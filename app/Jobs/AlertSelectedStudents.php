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

class AlertSelectedStudents implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $userEmail, $userFirstName, $course_id,  $course_name, $classwork_id, $classwork_name;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($userEmail, $userFirstName, $course_id,  $course_name, $classwork_id, $classwork_name)
    {
        $this->userEmail = $userEmail;
        $this->userFirstName = $userFirstName;
        $this->course_id = $course_id;
        $this->course_name = $course_name;
        $this->classwork_id = $classwork_id;
        $this->classwork_name = $classwork_name;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $counter = 0;
        $counter2 = 1;
        foreach($this->userEmail as $item){
            $latercount = 5;
            $delay = $latercount*$counter2;
            $MailData = new AlertStudentMail($this->classwork_id, $this->classwork_name, $this->course_id, $this->course_name, $this->userFirstName[$counter]);
            Mail::to($item)
            ->cc($this->userEmail)
            ->later($delay, $MailData);
            $counter++;
            $counter2++;
        }
    }
}
