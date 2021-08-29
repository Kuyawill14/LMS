<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use App\Mail\AlertStudentMail;

class ProcessEmails implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    protected $email, $classwork_id, $classwork_name, $course_id,  $course_name,$firstName;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($email , $classwork_id, $classwork_name, $course_id, $course_name, $firstName)
    {   
        $this->email = $email;
        $this->classwork_id = $classwork_id;
        $this->classwork_name = $classwork_name;
        $this->course_id = $course_id;
        $this->course_name = $course_name;
        $this->firstName = $firstName;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $MailData = new AlertStudentMail( $this->classwork_id, $this->classwork_name, $this->course_id, $this->course_name,$this->firstName);
        Mail::to($this->email)->send($MailData);        
    }
}
