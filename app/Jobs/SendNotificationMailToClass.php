<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendClassNotificationEmail;
use App\Models\tbl_userclass;

class SendNotificationMailToClass implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $class_id,$classwork_id, $title, $instruction, $due,$class_name ,$lastName, $url, $dispatchType;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($class_id, $classwork_id, $title, $instruction, $due,$class_name ,$lastName, $url, $dispatchType)
    {
        $this->class_id = $class_id;
        $this->classwork_id = $classwork_id;
        $this->title = $title;
        $this->instruction = $instruction;
        $this->due = $due;
        $this->class_name = $class_name;
        $this->lastName = $lastName;
        $this->url = $url;
        $this->dispatchType = $dispatchType;
        
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {   

        $emails = tbl_userclass::where('tbl_userclasses.class_id', $this->class_id)
        ->select('users.email')
        ->leftjoin('users', 'users.id', '=', 'tbl_userclasses.user_id')
        ->where('users.role','Student')
        ->get();
        $counter = 1;
        foreach($emails as $email){
            $latercount = 5;
            $delay = $latercount*$counter;
            $MailData = new SendClassNotificationEmail($this->title, $this->instruction, $this->due, $this->class_name, $this->lastName, $this->url);
            Mail::to($email->email)
            ->cc($emails)
            ->later($delay, $MailData);
            $counter++;
        }
       
    }
}
