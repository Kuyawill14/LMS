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

    protected $class_id, $title, $instruction, $due,$class_name ,$lastName, $url;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($class_id, $title, $instruction, $due,$class_name ,$lastName, $url)
    {
        $this->class_id = $class_id;
        $this->title = $title;
        $this->instruction = $instruction;
        $this->due = $due;
        $this->class_name = $class_name;
        $this->lastName = $lastName;
        $this->url = $url;
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
        //$notifData = new SendClassNotification($this->class_id,  $this->title, $this->instruction, $this->due, $this->class_name, $this->lastName);
        //Notification::send($notifData);


      /*   $test = array();
        $test[0] = 'markjoshua.mandigma@gmail.com';
        $test[1] = 'markjoshua.lmandigma@gmail.com';
        $test[2] = 'dwightjeffersonsalarzon222@gmail.com';
        $test[3] = 'dwightjefferson.m.salarzon@isu.edu.ph';
        for ($i=0; $i < count($test); $i++) { 
            $MailData = new SendClassNotificationEmail($this->title, $this->instruction, $this->due, $this->class_name, $this->lastName);
            Mail::to($test[$i])->send($MailData);
        } */
        foreach($emails as $email){
            $MailData = new SendClassNotificationEmail($this->title, $this->instruction, $this->due, $this->class_name, $this->lastName, $this->url);
            Mail::to($email->email)->send($MailData);
        }
       
    }
}
