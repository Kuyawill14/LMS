<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\tbl_notification;
use App\Events\NewNotification;
use Notification;
use App\Notifications\SendPushNotification;
use App\Models\tbl_userclass;
use App\Models\tbl_userDetails;

class SendClassworkNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    public $class_id, $user_id, $classwork_id, $mesage, $type, $dispatchType;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($class_id, $user_id, $classwork_id, $mesage, $type, $dispatchType)
    {
        $this->class_id = $class_id;
        $this->user_id = $user_id;
        $this->classwork_id = $classwork_id;
        $this->mesage = $mesage;
        $this->type = $type;
        $this->dispatchType = $dispatchType;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $newNotification = new tbl_notification;
        $newNotification->course_id = null;
        $newNotification->class_id = $this->class_id;
        $newNotification->from_id =  $this->user_id;
        $newNotification->notification_attachments =  $this->classwork_id;
        $newNotification->message =  $this->mesage;
        $newNotification->notification_type = $this->type;
        $newNotification->save();
        broadcast(new NewNotification($newNotification))->toOthers();



        $emails = tbl_userclass::where('tbl_userclasses.class_id', $this->class_id)
        ->select('users.email', 'users.device_key')
        ->leftjoin('users', 'users.id', '=', 'tbl_userclasses.user_id')
        ->where('users.role','Student')
        ->whereNotNull('users.device_key')
        ->get();

        $userDetails  = tbl_userDetails::where('user_id', $this->user_id)->first();
        $name = $userDetails->firstName.' '.$userDetails->lastName;
        $notif_message = $name.' '.$newNotification->message;
        foreach($emails as $email){
            Notification::send(null,new SendPushNotification('ISUE-ORANGE',$notif_message, $email->device_key));
        }
    }
}
