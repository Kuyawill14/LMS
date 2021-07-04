<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_userclass;
use App\Models\tbl_classwork;
use App\Models\tbl_notification;

class NotificationController extends Controller
{


    public function NewNotification(Request $request){

        $userId = auth('sanctum')->id();
        $userInClass = tbl_userclass::where('tbl_userclasses.class_id', $request->class_id)
        ->select('tbl_userclasses.id','tbl_userclasses.user_id', 'tbl_subject_courses.course_name','tbl_classes.class_name')
        ->leftJoin('tbl_subject_courses', 'tbl_userclasses.course_id', '=', 'tbl_subject_courses.id')
        ->leftJoin('tbl_classes', 'tbl_classes.id', '=', 'tbl_userclasses.class_id')
        ->get();

        
        $clsssworkTitle = tbl_classwork::find($request->classwork_id);
        foreach($userInClass as $us_id){
            if($us_id->user_id != $userId){
                $newNotification = new tbl_notification;
                $newNotification->userid_from = $userId;
                $newNotification->userid_to = $us_id->user_id;
                $newNotification->class_id = $request->class_id;
                $newNotification->message = $clsssworkTitle->title.' assigned in your '.$us_id->course_name;
                $newNotification->notification_type = 2;
                $newNotification->status = 0;
                $newNotification->save();
            }
        }
    }


    public function getNotification(){
        $userId = auth('sanctum')->id();
        $allNotification = tbl_notification::where('tbl_notifications.userid_to',   $userId)
        ->select('tbl_notifications.id as n_id','tbl_notifications.userid_from','tbl_notifications.notification_type',
                'tbl_notifications.message',DB::raw('CONCAT(users.firstname, " ", users.lastName) as name'),
                'tbl_user_details.profile_pic','tbl_notifications.status',
                'tbl_notifications.created_at')
        ->leftJoin('users', 'users.id', '=', 'tbl_notifications.userid_from')
        ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
        ->orderBy('tbl_notifications.created_at', 'DESC')
        ->get();
        return $allNotification; 

    }

    public function UnreadNotification($id){


        $Unread = tbl_notification::find($id);
        if($Unread){
            $Unread->status = 1;
            $Unread->save();
            return "Notification read";
        }
        return "Class not found";
    }


    public function DeleteNotification($id){

        $Unread = tbl_notification::find($id);
        if($Unread){
            $Unread->delete();
     
            return "Notification Deleted";
        }
        return "Notification not found";
    }


   
}
