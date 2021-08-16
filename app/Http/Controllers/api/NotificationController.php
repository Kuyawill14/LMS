<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_userclass;
use App\Models\tbl_classwork;
use App\Models\tbl_notification;
use App\Models\UserNotification;
use App\Models\tbl_teacher_course;
use App\Events\NewPost;
use App\Events\NewNotification;
use App\Models\tbl_subject_course;

class NotificationController extends Controller
{


    public function NewNotification(Request $request){

        $userId = auth('sanctum')->id();

        if($request->type == 'classwork'){
            $clsssworkTitle = tbl_classwork::where('tbl_classworks.id', $request->classwork_id)
            ->select('tbl_classworks.title', 'tbl_subject_courses.course_name')
            ->leftJoin('tbl_subject_courses', 'tbl_subject_courses.id','=','tbl_classworks.course_id')
            ->first();
            $newNotification = new tbl_notification;
            $newNotification->course_id = $request->course_id;
            $newNotification->class_id = $request->class_id;
            $newNotification->from_id =  $userId;
            $newNotification->message = $clsssworkTitle->title.' assigned in your '.$clsssworkTitle->course_name;
            $newNotification->notification_type = 4;
            $newNotification->save();
            broadcast(new NewNotification($newNotification))->toOthers();
            return;
        }
        elseif($request->type == 'announcement'){
            $userInClass = tbl_subject_course::where('tbl_subject_courses.id', $request->course_id)->first();

            $newNotification = new tbl_notification;
            $newNotification->course_id = $request->course_id;
            $newNotification->class_id = $request->class_id;
            $newNotification->from_id =  $userId;
            $newNotification->message = "Posted new announcement in ".$userInClass->course_name;
            $newNotification->notification_type = 1;
            $newNotification->save();
            broadcast(new NewNotification($newNotification))->toOthers();
            return;
        }
       
       


    }
/* 
    public function NewNotificationfornAnnouncement(Request $request){

        $newNotification = new tbl_notification;
        $newNotification->course_id = $request->announcement['course_id'];
        $newNotification->class_id = $NewPost->class_id;
        $newNotification->from_id =  $userId;
        $newNotification->message = "Posted new announcement in ".$userInClass->course_name;
        $newNotification->notification_type = 1;
        $newNotification->save();
        broadcast(new NewNotification($newNotification))->toOthers();
    } */
    
    public function fetchmyInvite(){
        $userId = auth('sanctum')->id();
        $allInvites = tbl_notification::where('tbl_notifications.user_id_to', $userId)
        ->select(DB::raw('CONCAT(tbl_user_details.firstname, " ", tbl_user_details.lastName) as name'),
        'tbl_user_details.profile_pic','tbl_notifications.id as n_id','tbl_notifications.notification_type','tbl_notifications.message',
        'tbl_notifications.notification_attachments','tbl_notifications.created_at')
        ->leftJoin('users', 'users.id', '=', 'tbl_notifications.from_id')
        ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
        ->leftJoin('user_notifications', 'user_notifications.notification_id','=','tbl_notifications.id')
        ->orderBy('tbl_notifications.created_at', 'DESC')
        ->paginate(5);

        foreach($allInvites as $item){
            $checkNotifStatus = UserNotification::where('user_notifications.notification_id', $item->n_id)
            ->where('user_notifications.user_id', $userId)->first();
            $item->status = '';
            if($checkNotifStatus){
                $item->status = $checkNotifStatus->status;
                $item->hide_notif = $checkNotifStatus->hide_notif;
                $item->notification_accepted = $checkNotifStatus->notification_accepted;
            }
            else{
                if($item->status == ''){
                    $item->status = null;
                    $item->hide_notif = null;
                    $item->notification_accepted = 0;
                    
                }
            }

        }
        return $allInvites;
    }


    public function getNotification(){
        $userId = auth('sanctum')->id();
        //$userId = 2;
        //$role = 'Teacher';
        $CheckIfJoinToClassesExist = tbl_userclass::where('tbl_userclasses.user_id', $userId)->exists();
        if(auth('sanctum')->user()->role != 'Student'){
            if($CheckIfJoinToClassesExist){
                $allNotification = tbl_teacher_course::where('tbl_teacher_courses.user_id', $userId)
                ->select('tbl_teacher_courses.course_id as cl_id',DB::raw('CONCAT(tbl_user_details.firstname, " ", tbl_user_details.lastName) as name'),
                'tbl_user_details.profile_pic','tbl_notifications.id as n_id','tbl_notifications.notification_type','tbl_notifications.message',
                'tbl_notifications.created_at')
                ->leftJoin('tbl_notifications', function($join){
                    $join->on('tbl_notifications.course_id', '=', 'tbl_teacher_courses.course_id')
                    ->orOn('tbl_notifications.user_id_to', '=', 'tbl_teacher_courses.user_id');
                })
                ->leftJoin('users', 'users.id', '=', 'tbl_notifications.from_id')
                ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
                ->orderBy('tbl_notifications.created_at', 'DESC')
                ->where('tbl_notifications.from_id','!=', $userId)
                ->paginate(5);
            }
            else{
                $allNotification = tbl_notification::where('tbl_notifications.user_id_to', $userId)
                ->select(DB::raw('CONCAT(tbl_user_details.firstname, " ", tbl_user_details.lastName) as name'),
                'tbl_user_details.profile_pic','tbl_notifications.id as n_id','tbl_notifications.notification_type','tbl_notifications.message',
                'tbl_notifications.notification_attachments','tbl_notifications.created_at')
                ->leftJoin('users', 'users.id', '=', 'tbl_notifications.from_id')
                ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
                ->leftJoin('user_notifications', 'user_notifications.notification_id','=','tbl_notifications.id')
                ->orderBy('tbl_notifications.created_at', 'DESC')
                ->paginate(5);
            }
            
        }else{
           
            if($CheckIfJoinToClassesExist){
                $allNotification = tbl_userclass::whereNull('tbl_userclasses.deleted_at')
                ->where('tbl_userclasses.user_id', $userId)
                ->select('tbl_userclasses.class_id as cl_id',DB::raw('CONCAT(tbl_user_details.firstname, " ", tbl_user_details.lastName) as name'),
                'tbl_user_details.profile_pic','tbl_notifications.id as n_id','tbl_notifications.notification_type','tbl_notifications.message',
                'tbl_notifications.notification_attachments','tbl_notifications.created_at')
                ->leftJoin('tbl_notifications', function($join){
                    $join->on('tbl_notifications.class_id', '=', 'tbl_userclasses.class_id')
                    ->orOn('tbl_notifications.class_id', '=', 'tbl_userclasses.course_id');
                })
                ->leftJoin('users', 'users.id', '=', 'tbl_notifications.from_id')
                ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
                ->orderBy('tbl_notifications.created_at', 'DESC')
                ->where('tbl_notifications.from_id','!=', $userId)
                ->whereIn('tbl_notifications.notification_type', [1, 3, 4])
                ->paginate(5);
            }
            else{
                $allNotification = tbl_notification::where('tbl_notifications.user_id_to', $userId)
                ->select(DB::raw('CONCAT(tbl_user_details.firstname, " ", tbl_user_details.lastName) as name'),
                'tbl_user_details.profile_pic','tbl_notifications.id as n_id','tbl_notifications.notification_type','tbl_notifications.message',
                'tbl_notifications.notification_attachments','tbl_notifications.created_at')
                ->leftJoin('users', 'users.id', '=', 'tbl_notifications.from_id')
                ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
                ->leftJoin('user_notifications', 'user_notifications.notification_id','=','tbl_notifications.id')
                ->orderBy('tbl_notifications.created_at', 'DESC')
                ->paginate(5);
            }
               
        }

        foreach($allNotification as $item){
            $checkNotifStatus = UserNotification::where('user_notifications.notification_id', $item->n_id)
            ->where('user_notifications.user_id', $userId)->first();
            $item->status = '';
            if($checkNotifStatus){
                $item->status = $checkNotifStatus->status;
                $item->hide_notif = $checkNotifStatus->hide_notif;
                $item->notification_accepted = $checkNotifStatus->notification_accepted;
            }
            else{
                if($item->status == ''){
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
        /* accepted */
        //return $request;
        $userId = auth('sanctum')->id();
        $Unread = UserNotification::where('user_notifications.notification_id', $id)
        ->where('user_notifications.user_id',$userId)->first();
       
        if($request->accepted){
            $Unread = UserNotification::where('user_notifications.notification_id', $id)
            ->where('user_notifications.user_id',$userId)->first();
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
        $userId = auth('sanctum')->id();
        //$userId = 1;
        if(auth('sanctum')->user()->role != 'Student'){
             $allNotification = tbl_teacher_course::where('tbl_teacher_courses.user_id', $userId)
                ->select('tbl_notifications.id as notif_id','tbl_notifications.notification_type',
                'user_notifications.status', 'user_notifications.hide_notif', 'user_notifications.notification_accepted')
                ->leftJoin('tbl_notifications', function($join){
                    $join->on('tbl_notifications.course_id', '=', 'tbl_teacher_courses.course_id')
                    ->orOn('tbl_notifications.user_id_to', '=', 'tbl_teacher_courses.user_id');
                })
                ->leftJoin('user_notifications', 'user_notifications.notification_id','=','tbl_notifications.id')
                ->orderBy('tbl_notifications.created_at', 'DESC')
                ->where('tbl_notifications.from_id','!=', $userId)
                ->where('user_notifications.status', null)
                ->get();
        }
        else{
            $allNotification = tbl_userclass::whereNull('tbl_userclasses.deleted_at')
            ->where('tbl_userclasses.user_id', $userId)
            ->select('tbl_notifications.id as notif_id','tbl_notifications.notification_type',
            'user_notifications.status', 'user_notifications.hide_notif', 'user_notifications.notification_accepted')
            ->leftJoin('tbl_notifications', function($join){
                $join->on('tbl_notifications.class_id', '=', 'tbl_userclasses.class_id')
                ->orOn('tbl_notifications.class_id', '=', 'tbl_userclasses.course_id');
            })
            ->leftJoin('user_notifications', 'user_notifications.notification_id','=','tbl_notifications.id')
            ->orderBy('tbl_notifications.created_at', 'DESC')
            ->where('tbl_notifications.from_id','!=', $userId)
            ->where('user_notifications.status', null)
            ->whereIn('tbl_notifications.notification_type', [1, 3, 4])
            ->get();
        }
        
        foreach($allNotification as $item){
            $NewUnread = new UserNotification;
            $NewUnread->notification_id = $item['notif_id'];
            $NewUnread->user_id = $userId;
            $NewUnread->status = 1;
            $NewUnread->notification_accepted =  1;
            $NewUnread->save();
        }
        return count($allNotification);
      
    }
    

    public function HideNotification($id){
        $userId = auth('sanctum')->id();
        $HideNotif = UserNotification::where('user_notifications.notification_id', $id)
        ->where('user_notifications.user_id',$userId)->first();
        if($HideNotif){
            $HideNotif->hide_notif = 1;
            $HideNotif->save();
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
        $userId = auth('sanctum')->id();
        $InviteCount;
        return auth('sanctum')->user()->role;
        if(auth('sanctum')->user()->role != 'Student'){
            $NotificationCount = tbl_teacher_course::where('tbl_teacher_courses.user_id', $userId)
            ->select('tbl_teacher_courses.course_id as cl_id',DB::raw('CONCAT(tbl_user_details.firstname, " ", tbl_user_details.lastName) as name'),
            'tbl_user_details.profile_pic','tbl_notifications.id as n_id','tbl_notifications.notification_type','tbl_notifications.message',
            'tbl_notifications.created_at')
            ->leftJoin('tbl_notifications', function($join){
                $join->on('tbl_notifications.course_id', '=', 'tbl_teacher_courses.course_id')
                ->orOn('tbl_notifications.user_id_to', '=', 'tbl_teacher_courses.user_id');
            })
            ->leftJoin('users', 'users.id', '=', 'tbl_notifications.from_id')
            ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
            ->orderBy('tbl_notifications.created_at', 'DESC')
            ->where('tbl_notifications.from_id','!=', $userId)
            ->get();
        
            
        }else{
            
                $NotificationCount = tbl_userclass::whereNull('tbl_userclasses.deleted_at')
                ->where('tbl_userclasses.user_id', $userId)
                ->select('tbl_userclasses.class_id as cl_id',DB::raw('CONCAT(tbl_user_details.firstname, " ", tbl_user_details.lastName) as name'),
                'tbl_user_details.profile_pic','tbl_notifications.id as n_id','tbl_notifications.notification_type','tbl_notifications.message',
                'tbl_notifications.notification_attachments','tbl_notifications.created_at')
                ->leftJoin('tbl_notifications', function($join){
                    $join->on('tbl_notifications.class_id', '=', 'tbl_userclasses.class_id')
                    ->orOn('tbl_notifications.class_id', '=', 'tbl_userclasses.course_id');
                })
                ->leftJoin('users', 'users.id', '=', 'tbl_notifications.from_id')
                ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
                ->orderBy('tbl_notifications.created_at', 'DESC')
                ->where('tbl_notifications.from_id','!=', $userId)
                ->whereIn('tbl_notifications.notification_type', [1, 3, 4])
                ->get();
           
                
            
        }

            $InviteCount = tbl_notification::where('tbl_notifications.user_id_to', $userId)
            ->select(DB::raw('CONCAT(tbl_user_details.firstname, " ", tbl_user_details.lastName) as name'),
            'tbl_user_details.profile_pic','tbl_notifications.id as n_id','tbl_notifications.notification_type','tbl_notifications.message',
            'tbl_notifications.notification_attachments','tbl_notifications.created_at')
            ->leftJoin('users', 'users.id', '=', 'tbl_notifications.from_id')
            ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
            ->leftJoin('user_notifications', 'user_notifications.notification_id','=','tbl_notifications.id')
            ->orderBy('tbl_notifications.created_at', 'DESC')
            ->get();

            foreach($InviteCount as $item){
                $checkNotifStatus = UserNotification::where('user_notifications.notification_id', $item->n_id)
                ->where('user_notifications.user_id', $userId)->first();
                $item->status = '';
                if($checkNotifStatus){
                    $item->status = $checkNotifStatus->status;
                    $item->hide_notif = $checkNotifStatus->hide_notif;
                    $item->notification_accepted = $checkNotifStatus->notification_accepted;
                }
                else{
                    if($item->status == ''){
                        $item->status = null;
                        $item->hide_notif = null;
                        $item->notification_accepted = 0;
                        
                    }
                }

            }






        foreach($NotificationCount as $item){
            $checkNotifStatus = UserNotification::where('user_notifications.notification_id', $item->n_id)
            ->where('user_notifications.user_id', $userId)->first();
            $item->status = '';
            if($checkNotifStatus){
                $item->status = $checkNotifStatus->status;
                $item->hide_notif = $checkNotifStatus->hide_notif;
                $item->notification_accepted = $checkNotifStatus->notification_accepted;
            }
            else{
                if($item->status == ''){
                    $item->status = null;
                    $item->hide_notif = null;
                    $item->notification_accepted = 0;
                    
                }
            }

        }
        

        $count = 0;
        $invitesC = 0;
        foreach($NotificationCount as $item){
            if($item->status == null || $item->status == 0){
                $count++;
            }
        }

        foreach($InviteCount as $item){
            if($item->status == null || $item->status == 0){
                $invitesC++;
            }
        }
        return ['notificationCount'=> $count, 'invitesCount'=> $invitesC];
      
    }

  
    public function getNotificationListWithFilter($type){
        $userId = auth('sanctum')->id();
        //$userId = 2;
        //$role = 'Teacher';
        if(auth('sanctum')->user()->role != 'Student'){
            if($type != 'all'){
                $allNotification = tbl_teacher_course::where('tbl_teacher_courses.user_id', $userId)
                ->select('tbl_teacher_courses.course_id as cl_id',DB::raw('CONCAT(tbl_user_details.firstname, " ", tbl_user_details.lastName) as name'),
                'tbl_user_details.profile_pic','tbl_notifications.id as n_id','tbl_notifications.notification_type','tbl_notifications.message',
                'tbl_notifications.created_at')
                ->leftJoin('tbl_notifications', function($join){
                    $join->on('tbl_notifications.course_id', '=', 'tbl_teacher_courses.course_id')
                    ->orOn('tbl_notifications.user_id_to', '=', 'tbl_teacher_courses.user_id');
                })
                ->leftJoin('users', 'users.id', '=', 'tbl_notifications.from_id')
                ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
                ->orderBy('tbl_notifications.created_at', 'DESC')
                ->where('tbl_notifications.from_id','!=', $userId)
                ->where('tbl_notifications.notification_type', $type)
                ->paginate(10);
            }
            else{
                $allNotification = tbl_teacher_course::where('tbl_teacher_courses.user_id', $userId)
                ->select('tbl_teacher_courses.course_id as cl_id',DB::raw('CONCAT(tbl_user_details.firstname, " ", tbl_user_details.lastName) as name'),
                'tbl_user_details.profile_pic','tbl_notifications.id as n_id','tbl_notifications.notification_type','tbl_notifications.message',
                'tbl_notifications.created_at')
                ->leftJoin('tbl_notifications', function($join){
                    $join->on('tbl_notifications.course_id', '=', 'tbl_teacher_courses.course_id')
                    ->orOn('tbl_notifications.user_id_to', '=', 'tbl_teacher_courses.user_id');
                })
                ->leftJoin('users', 'users.id', '=', 'tbl_notifications.from_id')
                ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
                ->orderBy('tbl_notifications.created_at', 'DESC')
                ->where('tbl_notifications.from_id','!=', $userId)
                ->paginate(10);
            }
            
        }else{
            $CheckIfJoinToClassesExist = tbl_userclass::where('tbl_userclasses.user_id', $userId)
            ->exists();
            if($type != 'all'){
                if($CheckIfJoinToClassesExist){
                    $allNotification = tbl_userclass::whereNull('tbl_userclasses.deleted_at')
                    ->where('tbl_userclasses.user_id', $userId)
                    ->select('tbl_userclasses.class_id as cl_id',DB::raw('CONCAT(tbl_user_details.firstname, " ", tbl_user_details.lastName) as name'),
                    'tbl_user_details.profile_pic','tbl_notifications.id as n_id','tbl_notifications.notification_type','tbl_notifications.message',
                    'tbl_notifications.notification_attachments','tbl_notifications.created_at')
                    ->leftJoin('tbl_notifications', function($join){
                        $join->on('tbl_notifications.class_id', '=', 'tbl_userclasses.class_id')
                        ->orOn('tbl_notifications.class_id', '=', 'tbl_userclasses.course_id');
                
                    })
                    ->leftJoin('users', 'users.id', '=', 'tbl_notifications.from_id')
                    ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
                    ->orderBy('tbl_notifications.created_at', 'DESC')
                    ->where('tbl_notifications.from_id','!=', $userId)
                    ->where('tbl_notifications.notification_type', $type)
                    ->paginate(10);
                }
                else{
                    $allNotification = tbl_notification::where('tbl_notifications.user_id_to', $userId)
                    ->select(DB::raw('CONCAT(tbl_user_details.firstname, " ", tbl_user_details.lastName) as name'),
                    'tbl_user_details.profile_pic','tbl_notifications.id as n_id','tbl_notifications.notification_type','tbl_notifications.message',
                    'tbl_notifications.notification_attachments','tbl_notifications.created_at')
                    ->leftJoin('users', 'users.id', '=', 'tbl_notifications.from_id')
                    ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
                    ->orderBy('tbl_notifications.created_at', 'DESC')
                    ->paginate(10);
                }
            }
            else{
                if($CheckIfJoinToClassesExist){
                    $allNotification = tbl_userclass::whereNull('tbl_userclasses.deleted_at')
                    ->where('tbl_userclasses.user_id', $userId)
                    ->select('tbl_userclasses.class_id as cl_id',DB::raw('CONCAT(tbl_user_details.firstname, " ", tbl_user_details.lastName) as name'),
                    'tbl_user_details.profile_pic','tbl_notifications.id as n_id','tbl_notifications.notification_type','tbl_notifications.message',
                    'tbl_notifications.notification_attachments','tbl_notifications.created_at')
                    ->leftJoin('tbl_notifications', function($join){
                        $join->on('tbl_notifications.class_id', '=', 'tbl_userclasses.class_id')
                        ->orOn('tbl_notifications.class_id', '=', 'tbl_userclasses.course_id');
                    })
                    ->leftJoin('users', 'users.id', '=', 'tbl_notifications.from_id')
                    ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
                    ->orderBy('tbl_notifications.created_at', 'DESC')
                    ->where('tbl_notifications.from_id','!=', $userId)
                    ->whereIn('tbl_notifications.notification_type', [1, 3, 4])
                    ->paginate(10);
                }
                else{
                    $allNotification = tbl_notification::where('tbl_notifications.user_id_to', $userId)
                    ->select(DB::raw('CONCAT(tbl_user_details.firstname, " ", tbl_user_details.lastName) as name'),
                    'tbl_user_details.profile_pic','tbl_notifications.id as n_id','tbl_notifications.notification_type','tbl_notifications.message',
                    'tbl_notifications.notification_attachments','tbl_notifications.created_at')
                    ->leftJoin('users', 'users.id', '=', 'tbl_notifications.from_id')
                    ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
                    ->leftJoin('user_notifications', 'user_notifications.notification_id','=','tbl_notifications.id')
                    ->orderBy('tbl_notifications.created_at', 'DESC')
                    ->paginate(10);
                }
               
            }
           
        }

        foreach($allNotification as $item){
            $checkNotifStatus = UserNotification::where('user_notifications.notification_id', $item->n_id)
            ->where('user_notifications.user_id', $userId)->first();
            $item->status = '';
            if($checkNotifStatus){
                $item->status = $checkNotifStatus->status;
                $item->hide_notif = $checkNotifStatus->hide_notif;
                $item->notification_accepted = $checkNotifStatus->notification_accepted;
            }
            else{
                if($item->status == ''){
                    $item->status = null;
                    $item->hide_notif = null;
                    $item->notification_accepted = 0;
                    
                }
            }

        }
        return $allNotification;
    }
}
