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
    }
}
