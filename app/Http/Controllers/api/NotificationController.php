<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_notification;

class NotificationController extends Controller
{
    public function getNotification(){


        $userId = 1;

       /*  $allNotification = DB::table('tbl_notifications')
        ->select('tbl_notifications.id as n_id','tbl_notifications.userid_from','tbl_notifications.notification_type',
                'tbl_notifications.event_type','tbl_notifications.message','users.firstName','users.lastName','tbl_notifications.status',
                'tbl_notifications.created_at')
        ->leftJoin('users', 'users.id', '=', 'tbl_notifications.userid_from')
        ->where('tbl_notifications.userid_to',  1)
        ->orderBy('tbl_notifications.created_at', 'DESC')
        ->get();
        return $allNotification;  */


        $allNotification = tbl_notification::where('tbl_notifications.userid_to',   $userId)
        ->select('tbl_notifications.id as n_id','tbl_notifications.userid_from','tbl_notifications.notification_type',
                'tbl_notifications.event_type','tbl_notifications.message',DB::raw('CONCAT(users.firstname, " ", users.lastName) as name'),
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
