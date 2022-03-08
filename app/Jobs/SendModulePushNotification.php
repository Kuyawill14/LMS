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
use App\Models\tbl_userclass;
use Notification;
use App\Notifications\SendPushNotification;


class SendModulePushNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $course_id, $user_id, $name, $module_id, $mesage, $type;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($course_id, $user_id, $name, $module_id, $mesage, $type)
    {
        $this->course_id = $course_id;
        $this->user_id = $user_id;
        $this->name = $name;
        $this->module_id = $module_id;
        $this->mesage = $mesage;
        $this->type = $type;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        

        $newNotification = new tbl_notification;
        $newNotification->course_id = $this->course_id;
        $newNotification->from_id =   $this->user_id;
        $newNotification->notification_attachments =  $this->module_id;
        $newNotification->message = $this->mesage;
        $newNotification->notification_type = $this->type;
        $newNotification->save();
        
        broadcast(new NewNotification($newNotification))->toOthers();

        $student_in_course = tbl_userclass::where('tbl_userclasses.course_id', $this->course_id)
        ->select('users.email', 'users.device_key')
        ->leftJoin('users', 'users.id', '=', 'tbl_userclasses.user_id')
        ->where('users.role', 'Student')
        ->whereNotNull('users.device_key')
        ->get();

        $notif_message = $this->name.' '.$this->mesage;
        foreach($student_in_course as $students){
            Notification::send(null,new SendPushNotification('ISUE-ORANGE', $notif_message, $students->device_key));
        }
        
    }
}
