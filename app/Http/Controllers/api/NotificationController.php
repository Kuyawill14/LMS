<?php

namespace App\Http\Controllers\api;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;
use App\Models\tbl_userclass;
use App\Models\tbl_classwork;
use App\Models\Tbl_class;
use App\Models\tbl_notification;
use App\Models\UserNotification;
use App\Models\tbl_teacher_course;
use App\Events\NewPost;
use App\Events\NewNotification;
use App\Models\tbl_subject_course;
use App\Models\tbl_userDetails;
use App\Jobs\SendNotificationMailToClass;
use App\Jobs\SendAnnouncementEmailToCLass;
use App\Jobs\SendClassworkNotification;
use App\Jobs\SendModulePushNotification;
use Carbon\Carbon;
use App\Notifications\SendPushNotification;

class NotificationController extends Controller
{


    public function NewNotification(Request $request){


        //return $request;
        $userId = auth("sanctum")->id();
       
        if($request->type == "classwork"){
            $count = 1;
            $delay = 15;

            foreach($request->data as $item){
                $clsssworkTitle = tbl_classwork::where("tbl_classworks.id", $item['classwork_id'])
                ->select("tbl_classworks.title","tbl_classworks.instruction", "tbl_subject_courses.course_name","tbl_user_details.lastName")
                ->leftJoin("tbl_subject_courses", "tbl_subject_courses.id","=","tbl_classworks.course_id")
                ->leftJoin("tbl_teacher_courses", "tbl_teacher_courses.course_id","=","tbl_subject_courses.id")
                ->leftJoin("tbl_user_details", "tbl_user_details.user_id","=","tbl_teacher_courses.user_id")
                ->first();

                $type = 'classwork_assigned';
                $message = $clsssworkTitle->title." assigned in your ".$clsssworkTitle->course_name;
                $dateToday = date('Y-m-d H:i:s');
                $seconds;
                $tmp_due;

                if($item['availability'] == 1){
                    $to = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $dateToday);
                    $from = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $item['from_date']);
                    if($to->greaterThanOrEqualTo($from)){
                        $tmp = 0;
                        $tmp_delay = $delay * $count;
                        $seconds =  $tmp + $tmp_delay;
                    }else{
                        $diff_in_minutes = $to->diffInMinutes($from);
                        $tmp =  $diff_in_minutes * 60;
                        $tmp_delay = $delay * $count;
                        $seconds =  $tmp + $tmp_delay;
                    }
                }else{
                    $seconds = 0;
                }


                if($item['availability'] == 1 || $item['availability'] == 0){
                    $due = $item['availability'] == 0 ? '' : $item['to_date'];
                    SendClassworkNotification::dispatch($item['class_id'], $userId, $item['classwork_id'], $message, $type, 'notification',$clsssworkTitle->title, $due, $clsssworkTitle->course_name)->delay(Carbon::now()->addSeconds($seconds));
                    $ClassName = Tbl_class::where('tbl_classes.id',$item['class_id'])->first();
                    $url = '/classwork'.'/'.$request->course_id.'/classwork-details?clwk='.$item['classwork_id'];
                    $CourseClassName = $ClassName->class_name.' '.$clsssworkTitle->course_name;
                    //SendNotificationMailToClass::dispatch($item['class_id'], $item['classwork_id'], $clsssworkTitle->title, $clsssworkTitle->instruction, $item['to_date'], $CourseClassName, $clsssworkTitle->lastName, $url, 'email')->delay(Carbon::now()->addSeconds($seconds));
                }

                $count++;
               
            }
            return;
        }
        elseif($request->type == "announcement"){

            $userInClass = tbl_subject_course::where("tbl_subject_courses.id", $request->course_find_id)->first();

            $newNotification = new tbl_notification;

            if(auth("sanctum")->user()->role == "Student"){
                $myClass = tbl_userclass::where("course_id", $request->course_find_id)
                ->where("user_id",$userId)->first();
                $newNotification->course_id = null;
                $newNotification->class_id = $myClass->class_id;
            }else{
                $newNotification->course_id = $request->course_id;
                $newNotification->class_id = $request->class_id;
            }
            $newNotification->from_id =  $userId;
            $newNotification->notification_attachments =  $request->announcement_id;
            $newNotification->message = "Posted new announcement in ".$userInClass->course_name;
            $newNotification->notification_type = 'post_annoucement';
            $newNotification->save();
            
            broadcast(new NewNotification($newNotification))->toOthers();

            $userDetails  = auth('sanctum')->user()->tbl_userDetails;
            $Name = $userDetails->firstName.' '.$userDetails->lastName;
            $role = auth("sanctum")->user()->role;
            
            if(auth("sanctum")->user()->role == "Teacher"){
                SendAnnouncementEmailToCLass::dispatch($newNotification->course_id, $newNotification->class_id , $userInClass->course_name, $Name, $role, $request->content, $userInClass->id, $newNotification);
            }
            return;
        }
        else if($request->type == 'module'){

            if($request->isPublished){
                $course = tbl_subject_course::where("tbl_subject_courses.id", $request->course_id)->first();

                $dateToday = date('Y-m-d H:i:s');
                $seconds;
                if($request->availability == 2){
                    
                    $to = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $dateToday);
                    $from = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $request->date_from);
                    $diff_in_minutes = $to->diffInMinutes($from);
                    if($to->greaterThanOrEqualTo($from)){
                        $seconds =  0;
                    }else{
                        $seconds = $diff_in_minutes * 60;
                    }
                }else if($request->availability == 1){
                    $seconds =  0;
                }

                $checkNotif = tbl_notification::where('tbl_notifications.notification_attachments', $request->module_id)
                ->where('tbl_notifications.notification_type', 'publish_module')
                ->where('tbl_notifications.course_id', $request->course_id)
                ->first();

                if(!$checkNotif){
                    $notif_message = "Publish new module named ".$request->module_name.' in your '.$course->course_name;
                    $type = 'publish_module';
                    $userDetails  = auth('sanctum')->user()->tbl_userDetails;
                    $Name = 'Instructor '.$userDetails->lastName;
                    SendModulePushNotification::dispatch(
                        $request->course_id,
                        $userId,
                        $Name,
                        $request->module_id,
                        $notif_message,
                        $type
                    )->delay(Carbon::now()->addSeconds($seconds));
                }

    
            }
           
        }
       
    }
 
     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function UnreadNotification(Request $request, $id){
        $userId = auth("sanctum")->id();
        $Unread = UserNotification::where("user_notifications.notification_id", $id)
        ->where("user_notifications.user_id",$userId)->first();
       
        if($request->accepted){
            $Unread = UserNotification::where("user_notifications.notification_id", $id)
            ->where("user_notifications.user_id",$userId)->first();
            if($Unread){
                $Unread->notification_accepted =  1;
                $Unread->status = 1;
                $Unread->save();
                return "Invite accepted";
            }
            else{
                $NewUnread = new UserNotification;
                $NewUnread->notification_id = $id;
                $NewUnread->user_id = $userId;
                $NewUnread->status = 1;
                $NewUnread->notification_accepted =  1;
                $NewUnread->save();
                return "Invite accepted";
            }
            
        }
        else{
            $NewUnread = new UserNotification;
            $NewUnread->notification_id = $id;
            $NewUnread->user_id = $userId;
            $NewUnread->status = 1;
            $NewUnread->save();
            return "Notification read";
        }
       
        return "Notification not found";
    }

    public function MarkAllAsRead(Request $request){
        $userId = auth("sanctum")->id();
        if(auth("sanctum")->user()->role != "Student"){
            $Course = tbl_teacher_course::where('tbl_teacher_courses.user_id', $userId)->get();
            $list = array();
            foreach($Course as $item){
                $classes = Tbl_class::where("course_id", $item->course_id)->get();
                foreach($classes as $class){
                    $list[] = $class->id;
                }
            }

            $allNotification = tbl_notification::where("user_notifications.status", null)
            ->select("tbl_notifications.id as notif_id","tbl_notifications.notification_type",
            "user_notifications.status", "user_notifications.hide_notif", "user_notifications.notification_accepted")
            ->leftJoin("user_notifications", function($join) use ($userId){
                $join->on("user_notifications.notification_id", "=", "tbl_notifications.id");
                $join->on('user_notifications.user_id','=',DB::raw("'".$userId."'"));
            })
            ->where(function ($query) {
                $query->where('user_notifications.status', 0)->orWhere('user_notifications.status', null);
            })
            ->orderBy("tbl_notifications.created_at", "DESC")
            ->where("tbl_notifications.from_id","!=", $userId)
            ->WhereIn('tbl_notifications.class_id', $list)
            ->get();
        }
        else{
            $notifType[0] = 'post_annoucement';
            $notifType[1] = 'class_invite';
            $notifType[2] = 'classwork_assigned';
            $notifType[3] = 'classwork_graded';
            $notifType[4] = 'publish_module';
            $notifType[5] = 'post_reply';

            $allNotification = tbl_userclass::whereNull("tbl_userclasses.deleted_at")
            ->where("tbl_userclasses.user_id", $userId)
            ->select("tbl_notifications.id as notif_id","tbl_notifications.notification_type","user_notifications.status")
            ->leftJoin("tbl_notifications", function($join) use ($userId){
                $join->on("tbl_notifications.course_id", "=", "tbl_userclasses.course_id")
                ->orOn("tbl_notifications.class_id", "=", "tbl_userclasses.class_id")
                ->orOn(function($query) use ($userId) {
                    $query->on('tbl_notifications.user_id_to', '=', DB::raw("'".$userId."'"));
                    $query->On('tbl_notifications.from_course', '=',"tbl_userclasses.course_id");
                });
            })
            ->leftJoin("user_notifications", function($join) use ($userId){
                $join->on("user_notifications.notification_id", "=", "tbl_notifications.id");
                $join->on('user_notifications.user_id','=',DB::raw("'".$userId."'"));
            })
            ->orderBy("tbl_notifications.created_at", "DESC")
            ->where(function ($query) {
                $query->where('user_notifications.status', 0)->orWhere('user_notifications.status', null);
            })
            ->where("tbl_notifications.from_id","!=", $userId)
            ->whereIn("tbl_notifications.notification_type", $notifType)
            ->get();
        }
        

        foreach($allNotification as $item){
            $NewUnread = new UserNotification;
            $NewUnread->notification_id = $item["notif_id"];
            $NewUnread->user_id = $userId;
            $NewUnread->status = 1;
            $NewUnread->notification_accepted =  1;
            $NewUnread->save();
        }
        return count($allNotification);
    }

    public function HideNotification($id){
        $userId = auth("sanctum")->id();
        $HideNotif = UserNotification::where("user_notifications.notification_id", $id)
        ->where("user_notifications.user_id",$userId)->first();
        if($HideNotif){
            $HideNotif->hide_notif = 1;
            $HideNotif->save();
            return "Notification Hidden";
        }
        else{
            $NewUnread = new UserNotification;
            $NewUnread->notification_id = $id;
            $NewUnread->user_id = $userId;
            $NewUnread->hide_notif = 1;
            $NewUnread->status = 1;
            $NewUnread->save();
            return "Notification Hidden";
        }
        return "Notification not found";
    }

    public function UnHideNotification($id){
        $userId = auth("sanctum")->id();
        $HideNotif = UserNotification::where("user_notifications.notification_id", $id)
        ->where("user_notifications.user_id",$userId)->first();
        if($HideNotif){
            $HideNotif->hide_notif = 0;
            $HideNotif->save();
            return "Notification Unhide";
        }
       
        return "Notification not found";
    }

    

    public function DeleteNotification($id){
        $removeNotif = tbl_notification::find($id);
        if($removeNotif){
            $removeNotif->delete();
        }
    }
    

    public function getNotificationCount(){
        $userId = auth("sanctum")->id();
        $InviteCount;
        if(auth("sanctum")->user()->role != "Student"){

            $Course = tbl_teacher_course::where('tbl_teacher_courses.user_id', $userId)->get();
            $list = array();
            foreach($Course as $item){
                $classes = Tbl_class::where("course_id", $item->course_id)->get();
                foreach($classes as $class){
                    $list[] = $class->id;
                }
            }
            $NotificationCount = tbl_notification::where("tbl_notifications.from_id","!=", $userId)
            ->leftJoin("user_notifications", function($join) use ($userId){
                $join->on("user_notifications.notification_id", "=", "tbl_notifications.id");
                $join->on('user_notifications.user_id','=',DB::raw("'".$userId."'"));
            })
            ->leftJoin("users", "users.id", "=", "tbl_notifications.from_id")
            ->leftJoin("tbl_user_details", "tbl_user_details.user_id","=","users.id")
            ->orderBy("tbl_notifications.created_at", "DESC")
            ->where(function ($query) {
                $query->where('user_notifications.status', 0)->orWhere('user_notifications.status', null);
            })
            ->whereIn('tbl_notifications.class_id', $list)
            ->count();

        }else{
            $notifType[0] = 'post_annoucement';
            $notifType[1] = 'class_invite';
            $notifType[2] = 'classwork_assigned';
            $notifType[3] = 'classwork_graded';
            $notifType[4] = 'publish_module';
            $notifType[5] = 'post_reply';

            $NotificationCount = tbl_userclass::whereNull("tbl_userclasses.deleted_at")
            ->where("tbl_userclasses.user_id", $userId)
            ->leftJoin("tbl_notifications", function($join) use ($userId){
                $join->on("tbl_notifications.course_id", "=", "tbl_userclasses.course_id")
                ->orOn("tbl_notifications.class_id", "=", "tbl_userclasses.class_id")
                ->orOn(function($query) use ($userId) {
                    $query->on('tbl_notifications.user_id_to', '=', DB::raw("'".$userId."'"));
                    $query->On('tbl_notifications.from_course', '=',"tbl_userclasses.course_id");
                });
            })
            ->leftJoin("user_notifications", function($join) use ($userId){
                $join->on("user_notifications.notification_id", "=", "tbl_notifications.id");
                $join->on('user_notifications.user_id','=',DB::raw("'".$userId."'"));
            })
            ->leftJoin("users", "users.id", "=", "tbl_notifications.from_id")
            ->leftJoin("tbl_user_details", "tbl_user_details.user_id","=","users.id")
            ->orderBy("tbl_notifications.created_at", "DESC")
            ->where(function ($query) {
                $query->where('user_notifications.status', 0)->orWhere('user_notifications.status', null);
            })
            ->where("tbl_notifications.from_id","!=", $userId)
            ->whereIn("tbl_notifications.notification_type", $notifType)
            ->count();
        } 
        return ["notificationCount"=> $NotificationCount];
      
    }

  
    public function getNotificationListWithFilter($type){
        $userId = auth("sanctum")->id();
        $notifType = array();
        if(auth("sanctum")->user()->role != "Student"){
            $Course = tbl_teacher_course::where('tbl_teacher_courses.user_id', $userId)->get();
            $list = array();

            foreach($Course as $item){
                $classes = Tbl_class::where("course_id", $item->course_id)->get();
                foreach($classes as $class){
                    $list[] = $class->id;
                }
            }

            if($type != "Hidden"){
                if($type != "all"){
                    if($type == 'classwork_assigned'){
                        $notifType[0] = $type;
                        $notifType[1] = 'classwork_submission';
                    }
                    else if($type == 'post_annoucement'){
                        $notifType[0] = $type;
                        $notifType[1] = 'post_reply';
                    }
                    else{
                        $notifType[0] = $type;
                    }
                }else{
                    $notifType[0] = 'post_annoucement';
                    $notifType[1] = 'class_joined';
                    $notifType[2] = 'class_invite';
                    $notifType[3] = 'classwork_assigned';
                    $notifType[4] = 'post_reply';
                    $notifType[5] = 'classwork_submission';
                }

                $allNotification = DB::table('tbl_notifications')->where("tbl_notifications.from_id","!=", $userId)
                ->select("tbl_user_details.profile_pic","tbl_notifications.id as n_id","tbl_notifications.from_course","tbl_notifications.notification_type","tbl_notifications.notification_attachments",
                "tbl_notifications.message","user_notifications.status", "user_notifications.hide_notif","user_notifications.notification_accepted",
                "tbl_classes.course_id as c_id",
                DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_notifications.updated_at as created_at")
                ->leftjoin("user_notifications", function($join) use ($userId){
                    $join->on("user_notifications.notification_id", "=", "tbl_notifications.id");
                    $join->on('user_notifications.user_id','=',DB::raw("'".$userId."'"));
                })
                ->join("tbl_classes", "tbl_classes.id", "=", "tbl_notifications.class_id")
                ->join("users", "users.id", "=", "tbl_notifications.from_id")
                ->join("tbl_user_details", "tbl_user_details.user_id","=","users.id")
                ->orderBy("tbl_notifications.updated_at", "DESC")
                ->where(function ($query) {
                    $query->where('user_notifications.hide_notif', 0)->orWhere('user_notifications.hide_notif', null);
                })
                ->whereIn("tbl_notifications.notification_type", $notifType)
                ->whereIn('tbl_notifications.class_id', $list)
                ->paginate(10);  

            }
            else{
                $notifType[0] = 'post_annoucement';
                $notifType[1] = 'class_joined';
                $notifType[2] = 'class_invite';
                $notifType[3] = 'classwork_assigned';
                $notifType[4] = 'post_reply';
                $notifType[5] = 'classwork_submission';

                $allNotification = DB::table('tbl_notifications')->where("tbl_notifications.from_id","!=", $userId)
                ->select("tbl_user_details.profile_pic","tbl_notifications.id as n_id","tbl_notifications.from_course","tbl_notifications.notification_type","tbl_notifications.notification_attachments",
                "tbl_notifications.message","user_notifications.status", "user_notifications.hide_notif","user_notifications.notification_accepted",
                "tbl_classes.course_id as c_id",
                DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_notifications.updated_at as created_at")
                ->leftjoin("user_notifications", function($join) use ($userId){
                    $join->on("user_notifications.notification_id", "=", "tbl_notifications.id");
                    $join->on('user_notifications.user_id','=',DB::raw("'".$userId."'"));
                })
                ->join("tbl_classes", "tbl_classes.id", "=", "tbl_notifications.class_id")
                ->join("users", "users.id", "=", "tbl_notifications.from_id")
                ->join("tbl_user_details", "tbl_user_details.user_id","=","users.id")
                ->orderBy("tbl_notifications.updated_at", "DESC")
                ->where(function ($query) {
                    $query->where('user_notifications.hide_notif', 1);
                })
                ->whereIn("tbl_notifications.notification_type", $notifType)
                ->whereIn('tbl_notifications.class_id', $list)
                ->paginate(10);  
            }
            return $allNotification;

        }else{

                       
            if($type != "Hidden"){
                
                if($type != "all"){
                    if($type == 'classwork_assigned'){
                        $notifType[0] = $type;
                        $notifType[1] = 'classwork_graded';
                    }else if($type == 'post_annoucement'){
                        $notifType[0] = $type;
                        $notifType[1] = 'post_reply';
                    }
                    else{
                        $notifType[0] = $type;
                    }
                }
                else{
                    $notifType[0] = 'post_annoucement';
                    $notifType[1] = 'class_invite';
                    $notifType[2] = 'classwork_assigned';
                    $notifType[3] = 'classwork_graded';
                    $notifType[4] = 'publish_module';
                    $notifType[5] = 'post_reply';
                }
                $allNotification = DB::table('tbl_userclasses')->whereNull("tbl_userclasses.deleted_at")
                ->where("tbl_userclasses.user_id", $userId)
                ->select("tbl_userclasses.class_id as cl_id","tbl_userclasses.course_id as c_id",
                "tbl_user_details.profile_pic","tbl_notifications.id as n_id","tbl_notifications.from_course","tbl_notifications.notification_type","tbl_notifications.message",
                "tbl_notifications.notification_attachments","user_notifications.status", "user_notifications.hide_notif","user_notifications.notification_accepted",
                DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_notifications.updated_at as created_at")
                ->leftjoin("tbl_notifications", function($join) use ($userId){
                    $join->on("tbl_notifications.course_id", "=", "tbl_userclasses.course_id")
                    ->orOn("tbl_notifications.class_id", "=", "tbl_userclasses.class_id")
                    ->orOn(function($query) use ($userId) {
                        $query->on('tbl_notifications.user_id_to', '=', DB::raw("'".$userId."'"));
                        $query->On('tbl_notifications.from_course', '=',"tbl_userclasses.course_id");
                    });
                })
                ->leftjoin("user_notifications", function($join) use ($userId){
                    $join->on("user_notifications.notification_id", "=", "tbl_notifications.id");
                    $join->on('user_notifications.user_id','=',DB::raw("'".$userId."'"));
                })
                ->join("users", "users.id", "=", "tbl_notifications.from_id")
                ->join("tbl_user_details", "tbl_user_details.user_id","=","users.id")
                ->orderBy("tbl_notifications.updated_at", "DESC")
                ->where(function ($query) {
                    $query->where('user_notifications.hide_notif', 0)->orWhere('user_notifications.hide_notif', null);
                })
                ->where("tbl_notifications.from_id","!=", $userId)
                ->whereIn("tbl_notifications.notification_type", $notifType)
                ->paginate(10);
            }
            else{         
                $notifType[0] = 'post_annoucement';
                $notifType[1] = 'class_invite';
                $notifType[2] = 'classwork_assigned';
                $notifType[3] = 'classwork_graded';
                $notifType[4] = 'publish_module';
                $notifType[5] = 'post_reply';
                

                $allNotification =  DB::table('tbl_userclasses')->whereNull("tbl_userclasses.deleted_at")
                ->where("tbl_userclasses.user_id", $userId)
                ->select("tbl_userclasses.class_id as cl_id","tbl_userclasses.course_id as c_id",
                "tbl_user_details.profile_pic","tbl_notifications.id as n_id","tbl_notifications.from_course","tbl_notifications.notification_type","tbl_notifications.message",
                "tbl_notifications.notification_attachments","user_notifications.status", "user_notifications.hide_notif","user_notifications.notification_accepted",
                DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_notifications.updated_at as created_at")
                ->leftJoin("tbl_notifications", function($join) use ($userId){
                    $join->on("tbl_notifications.course_id", "=", "tbl_userclasses.course_id")
                    ->orOn("tbl_notifications.class_id", "=", "tbl_userclasses.class_id")
                    ->orOn(function($query) use ($userId) {
                        $query->on('tbl_notifications.user_id_to', '=', DB::raw("'".$userId."'"));
                        $query->On('tbl_notifications.from_course', '=',"tbl_userclasses.course_id");
                    });
                })
                ->leftJoin("user_notifications", function($join) use ($userId){
                    $join->on("user_notifications.notification_id", "=", "tbl_notifications.id");
                    $join->on('user_notifications.user_id','=',DB::raw("'".$userId."'"));
                })
                ->join("users", "users.id", "=", "tbl_notifications.from_id")
                ->join("tbl_user_details", "tbl_user_details.user_id","=","users.id")
                ->orderBy("tbl_notifications.updated_at", "DESC")
                ->where(function ($query) {
                    $query->where('user_notifications.hide_notif', 1);
                })
                ->where("tbl_notifications.from_id","!=", $userId)
                ->whereIn("tbl_notifications.notification_type", $notifType)
                ->paginate(10);
            }
            
            return $allNotification;
        }

      
    }
}
