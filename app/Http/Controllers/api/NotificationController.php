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
use App\Jobs\SendNotificationMailToClass;
use App\Jobs\SendClassworkNotification;
use Carbon\Carbon;

class NotificationController extends Controller
{


    public function NewNotification(Request $request){

        $userId = auth("sanctum")->id();

        if($request->type == "classwork"){
            $clsssworkTitle = tbl_classwork::where("tbl_classworks.id", $request->classwork_id)
            ->select("tbl_classworks.title","tbl_classworks.instruction", "tbl_subject_courses.course_name","tbl_user_details.lastName")
            ->leftJoin("tbl_subject_courses", "tbl_subject_courses.id","=","tbl_classworks.course_id")
            ->leftJoin("tbl_teacher_courses", "tbl_teacher_courses.course_id","=","tbl_subject_courses.id")
            ->leftJoin("tbl_user_details", "tbl_user_details.user_id","=","tbl_teacher_courses.user_id")
            ->first();
            
            

            //return $request->from_date;
           /*  $newNotification = new tbl_notification;
            $newNotification->course_id = null;
            $newNotification->class_id = $request->class_id;
            $newNotification->from_id =  $userId;
            $newNotification->notification_attachments = $request->classwork_id;
            $newNotification->message = $clsssworkTitle->title." assigned in your ".$clsssworkTitle->course_name;
            $newNotification->notification_type = 4;
            $newNotification->save(); */
            
            $type = 4;
            $message = $clsssworkTitle->title." assigned in your ".$clsssworkTitle->course_name;

            $dateToday = date('Y-m-d H:i:s');
            $to = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $dateToday);
            $from = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $request->from_date);
            $diff_in_minutes = $to->diffInMinutes($from);
            $seconds;
            if( $diff_in_minutes <= 0){
                $seconds = 0;
            }
            else{
                $seconds =  $diff_in_minutes * 60;
            }
            SendClassworkNotification::dispatch($request->class_id, $userId, $request->classwork_id, $message, $type)->delay(Carbon::now()->addSeconds($seconds));

            $ClassName = Tbl_class::where('tbl_classes.id',$request->class_id)->first();
            $url = '/classwork'.'/'.$request->course_id.'/classwork-details?clwk='.$request->classwork_id;
            $CourseClassName = $ClassName->class_name.' '.$clsssworkTitle->course_name;
            SendNotificationMailToClass::dispatch($request->class_id, $clsssworkTitle->title, $clsssworkTitle->instruction, $request->due, $CourseClassName, $clsssworkTitle->lastName, $url)->delay(Carbon::now()->addSeconds(30));
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
            $newNotification->notification_type = 1;
            $newNotification->save();
            //broadcast(new NewNotification($newNotification))->toOthers();
            return;
        }
       
        


    }
/* 
    public function NewNotificationfornAnnouncement(Request $request){

        $newNotification = new tbl_notification;
        $newNotification->course_id = $request->announcement["course_id"];
        $newNotification->class_id = $NewPost->class_id;
        $newNotification->from_id =  $userId;
        $newNotification->message = "Posted new announcement in ".$userInClass->course_name;
        $newNotification->notification_type = 1;
        $newNotification->save();
        broadcast(new NewNotification($newNotification))->toOthers();
    } */
    
  /*   public function fetchmyInvite(){
        $userId = auth("sanctum")->id();
        $allInvites = tbl_notification::where("tbl_notifications.user_id_to", $userId)
        ->select("tbl_user_details.profile_pic","tbl_notifications.id as n_id","tbl_notifications.notification_type","tbl_notifications.message",
        "tbl_notifications.notification_attachments",DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_notifications.created_at")
        ->leftJoin("users", "users.id", "=", "tbl_notifications.from_id")
        ->leftJoin("tbl_user_details", "tbl_user_details.user_id","=","users.id")
        ->leftJoin("user_notifications", "user_notifications.notification_id","=","tbl_notifications.id")
        ->orderBy("tbl_notifications.created_at", "DESC")
        ->paginate(5);

        foreach($allInvites as $item){
            $checkNotifStatus = UserNotification::where("user_notifications.notification_id", $item->n_id)
            ->where("user_notifications.user_id", $userId)->first();
            $item->status = "";
            if($checkNotifStatus){
                $item->status = $checkNotifStatus->status;
                $item->hide_notif = $checkNotifStatus->hide_notif;
                $item->notification_accepted = $checkNotifStatus->notification_accepted;
            }
            else{
                if($item->status == ""){
                    $item->status = null;
                    $item->hide_notif = null;
                    $item->notification_accepted = 0;
                    
                }
            }

        }
        return $allInvites;
    } */


    public function getNotification(){
        $userId = auth("sanctum")->id();
        $CheckIfJoinToClassesExist = tbl_userclass::where("tbl_userclasses.user_id", $userId)->exists();
        if(auth("sanctum")->user()->role != "Student"){
            if($CheckIfJoinToClassesExist){
                $allNotification = tbl_teacher_course::where("tbl_teacher_courses.user_id", $userId)
                ->select("tbl_teacher_courses.course_id as cl_id","tbl_user_details.profile_pic","tbl_notifications.id as n_id","tbl_notifications.notification_type","tbl_notifications.message",
                DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_notifications.created_at")
                ->leftJoin("tbl_notifications", function($join){
                    $join->on("tbl_notifications.course_id", "=", "tbl_teacher_courses.course_id")
                    ->orOn("tbl_notifications.user_id_to", "=", "tbl_teacher_courses.user_id");
                })
                ->leftJoin("users", "users.id", "=", "tbl_notifications.from_id")
                ->leftJoin("tbl_user_details", "tbl_user_details.user_id","=","users.id")
                ->orderBy("tbl_notifications.created_at", "DESC")
                ->where("tbl_notifications.from_id","!=", $userId)
                ->paginate(5);
            }
            else{
                $allNotification = tbl_notification::where("tbl_notifications.user_id_to", $userId)
                ->select("tbl_user_details.profile_pic","tbl_notifications.id as n_id","tbl_notifications.notification_type","tbl_notifications.message",
                "tbl_notifications.notification_attachments",DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_notifications.created_at")
                ->leftJoin("users", "users.id", "=", "tbl_notifications.from_id")
                ->leftJoin("tbl_user_details", "tbl_user_details.user_id","=","users.id")
                ->leftJoin("user_notifications", "user_notifications.notification_id","=","tbl_notifications.id")
                ->orderBy("tbl_notifications.created_at", "DESC")
                ->paginate(5);
            }
            
        }else{
           
            if($CheckIfJoinToClassesExist){
                $allNotification = tbl_userclass::whereNull("tbl_userclasses.deleted_at")
                ->where("tbl_userclasses.user_id", $userId)
                ->select("tbl_userclasses.class_id as cl_id",
                "tbl_user_details.profile_pic","tbl_notifications.id as n_id","tbl_notifications.notification_type","tbl_notifications.message",
                "tbl_notifications.notification_attachments",DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_notifications.created_at")
                ->leftJoin("tbl_notifications", function($join){
                    $join->on("tbl_notifications.class_id", "=", "tbl_userclasses.class_id")
                    ->orOn("tbl_notifications.class_id", "=", "tbl_userclasses.course_id");
                })
                ->leftJoin("users", "users.id", "=", "tbl_notifications.from_id")
                ->leftJoin("tbl_user_details", "tbl_user_details.user_id","=","users.id")
                ->orderBy("tbl_notifications.created_at", "DESC")
                ->where("tbl_notifications.from_id","!=", $userId)
                ->whereIn("tbl_notifications.notification_type", [1, 3, 4])
                ->paginate(5);
            }
            else{
                $allNotification = tbl_notification::where("tbl_notifications.user_id_to", $userId)
                ->select("tbl_user_details.profile_pic","tbl_notifications.id as n_id","tbl_notifications.notification_type","tbl_notifications.message",
                "tbl_notifications.notification_attachments",DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_notifications.created_at")
                ->leftJoin("users", "users.id", "=", "tbl_notifications.from_id")
                ->leftJoin("tbl_user_details", "tbl_user_details.user_id","=","users.id")
                ->leftJoin("user_notifications", "user_notifications.notification_id","=","tbl_notifications.id")
                ->orderBy("tbl_notifications.created_at", "DESC")
                ->paginate(5);
            }
               
        }

        foreach($allNotification as $item){
            $checkNotifStatus = UserNotification::where("user_notifications.notification_id", $item->n_id)
            ->where("user_notifications.user_id", $userId)->first();
            $item->status = "";
            if($checkNotifStatus){
                $item->status = $checkNotifStatus->status;
                $item->hide_notif = $checkNotifStatus->hide_notif;
                $item->notification_accepted = $checkNotifStatus->notification_accepted;
            }
            else{
                if($item->status == ""){
                    $item->status = null;
                    $item->hide_notif = null;
                    $item->notification_accepted = 0;
                    
                }
            }

        }
        return $allNotification;
    
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
            ->whereIn("tbl_notifications.notification_type", [1, 3, 4])
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
            ->whereIn("tbl_notifications.notification_type", [1, 3, 4])
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
            if($type != "all"){
                $notifType[0] = $type;
            }else{
                $notifType[0] = 1;
                $notifType[1] = 2;
                $notifType[2] = 3;
                $notifType[3] = 4;
                $notifType[4] = 5;
            }

            $allNotification = tbl_notification::where("tbl_notifications.from_id","!=", $userId)
            ->select("tbl_user_details.profile_pic","tbl_notifications.id as n_id","tbl_notifications.notification_type",
            "tbl_notifications.message","user_notifications.status", "user_notifications.hide_notif","user_notifications.notification_accepted",
            "tbl_classes.course_id as c_id",
            DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_notifications.created_at")
            ->leftJoin("user_notifications", function($join) use ($userId){
                $join->on("user_notifications.notification_id", "=", "tbl_notifications.id");
                $join->on('user_notifications.user_id','=',DB::raw("'".$userId."'"));
            })
            ->leftJoin("tbl_classes", "tbl_classes.id", "=", "tbl_notifications.class_id")
            ->leftJoin("users", "users.id", "=", "tbl_notifications.from_id")
            ->leftJoin("tbl_user_details", "tbl_user_details.user_id","=","users.id")
            ->orderBy("tbl_notifications.created_at", "DESC")
            ->where(function ($query) {
                $query->where('user_notifications.hide_notif', 0)->orWhere('user_notifications.hide_notif', null);
            })
            ->whereIn("tbl_notifications.notification_type", $notifType)
            ->whereIn('tbl_notifications.class_id', $list)
            ->paginate(10);  
        }else{

            
           
            
            if($type != "Hidden"){
                
                if($type != "all"){
                    $notifType[0] = $type;
                }
                else{
                    $notifType[0] = 1;
                    $notifType[1] = 3;
                    $notifType[2] = 4;
                }

                $allNotification = tbl_userclass::whereNull("tbl_userclasses.deleted_at")
                ->where("tbl_userclasses.user_id", $userId)
                ->select("tbl_userclasses.class_id as cl_id","tbl_userclasses.course_id as c_id",
                "tbl_user_details.profile_pic","tbl_notifications.id as n_id","tbl_notifications.notification_type","tbl_notifications.message",
                "tbl_notifications.notification_attachments","user_notifications.status", "user_notifications.hide_notif","user_notifications.notification_accepted",
                DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_notifications.created_at")
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
                    $query->where('user_notifications.hide_notif', 0)->orWhere('user_notifications.hide_notif', null);
                })
                ->where("tbl_notifications.from_id","!=", $userId)
                ->whereIn("tbl_notifications.notification_type", $notifType)
                ->paginate(10);
            }
            else{
                if($type != "all"){
                    $notifType[0] = $type;
                }
                else{
                    $notifType[0] = 1;
                    $notifType[1] = 3;
                    $notifType[2] = 4;
                }

                $allNotification = tbl_userclass::whereNull("tbl_userclasses.deleted_at")
                ->where("tbl_userclasses.user_id", $userId)
                ->select("tbl_userclasses.class_id as cl_id","tbl_userclasses.course_id as c_id",
                "tbl_user_details.profile_pic","tbl_notifications.id as n_id","tbl_notifications.notification_type","tbl_notifications.message",
                "tbl_notifications.notification_attachments","user_notifications.status", "user_notifications.hide_notif","user_notifications.notification_accepted",
                DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_notifications.created_at")
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
                    $query->where('user_notifications.hide_notif', 1);
                })
                ->where("tbl_notifications.from_id","!=", $userId)
                ->whereIn("tbl_notifications.notification_type", [1, 3, 4])
                ->paginate(10);
            }
            
           
        }

        return $allNotification;
    }
}
