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

class NotificationController extends Controller
{


    public function NewNotification(Request $request){

        $userId = auth('sanctum')->id();
        $clsssworkTitle = tbl_classwork::where('tbl_classworks.id', $request->classwork_id)
        ->select('tbl_classworks.title', 'tbl_subject_courses.course_name')
        ->leftJoin('tbl_subject_courses', 'tbl_subject_courses.id','=','tbl_classworks.course_id')
        ->first();
        $newNotification = new tbl_notification;
        $newNotification->course_id = $request->course_id;
        $newNotification->class_id = $request->class_id;
        $newNotification->from_id =  $userId;
        $newNotification->message = $clsssworkTitle->title.' assigned in your '.$clsssworkTitle->course_name;
        $newNotification->notification_type = 1;
        $newNotification->save();
    }


    public function getNotification(){
        $userId = auth('sanctum')->id();
        //$userId = 2;
        //$role = 'Teacher';
        if(auth('sanctum')->user()->role != 'Student'){
            $allNotification = tbl_teacher_course::where('tbl_teacher_courses.user_id', $userId)
            ->select('tbl_teacher_courses.course_id as cl_id',DB::raw('CONCAT(users.firstname, " ", users.lastName) as name'),
            'tbl_user_details.profile_pic','tbl_notifications.id as n_id','tbl_notifications.notification_type','tbl_notifications.message',
            'tbl_notifications.created_at')
            ->leftJoin('tbl_notifications', 'tbl_notifications.course_id','=','tbl_teacher_courses.course_id')
            ->leftJoin('users', 'users.id', '=', 'tbl_notifications.from_id')
            ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
            ->orderBy('tbl_notifications.created_at', 'DESC')
            ->where('tbl_notifications.from_id','!=', $userId)
            ->get();
        }else{
            $allNotification = tbl_userclass::whereNull('tbl_userclasses.deleted_at')
            ->where('tbl_userclasses.user_id', $userId)
            ->select('tbl_userclasses.class_id as cl_id',DB::raw('CONCAT(users.firstname, " ", users.lastName) as name'),
            'tbl_user_details.profile_pic','tbl_notifications.id as n_id','tbl_notifications.notification_type','tbl_notifications.message',
            'tbl_notifications.created_at')
            ->leftJoin('tbl_notifications', function($join){
                $join->on('tbl_notifications.class_id', '=', 'tbl_userclasses.class_id')
                ->orOn('tbl_notifications.class_id', '=', 'tbl_userclasses.course_id');
            })
            ->leftJoin('users', 'users.id', '=', 'tbl_notifications.from_id')
            ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
            ->orderBy('tbl_notifications.created_at', 'DESC')
            ->where('tbl_notifications.from_id','!=', $userId)
            ->where('tbl_notifications.notification_type', 1)
            ->get();
        }
      
        foreach($allNotification as $item){
            $checkNotifStatus = UserNotification::where('user_notifications.notification_id', $item->n_id)
            ->where('user_notifications.user_id', $userId)->first();

            if($checkNotifStatus){
                $item->status = $checkNotifStatus->status;
                $item->hide_notif = $checkNotifStatus->hide_notif;
            }
            else{
                if($item->status == ''){
                    $item->status = null;
                    $item->hide_notif = null;
                }
            }

        }

      /*   $allNotification = tbl_notification::where('tbl_notifications.userid_to',   $userId)
        ->select('tbl_notifications.id as n_id','tbl_notifications.userid_from','tbl_notifications.notification_type',
                'tbl_notifications.message',DB::raw('CONCAT(users.firstname, " ", users.lastName) as name'),
                'tbl_user_details.profile_pic','tbl_notifications.status',
                'tbl_notifications.created_at')
        ->leftJoin('users', 'users.id', '=', 'tbl_notifications.userid_from')
        ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
        ->orderBy('tbl_notifications.created_at', 'DESC')
        ->get(); */
        return $allNotification; 

    }

    public function UnreadNotification($id){
        $userId = auth('sanctum')->id();
        $Unread = UserNotification::where('user_notifications.notification_id', $id)
        ->where('user_notifications.user_id',$userId)->first();
       
        if($Unread){
            $Unread->status = 1;
            $Unread->save();
            return "Notification read";
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

    public function DeleteNotification($id){
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
}
