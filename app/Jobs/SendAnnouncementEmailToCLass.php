<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendAnnoucementEmail;
use App\Models\tbl_userclass;

class SendAnnouncementEmailToCLass implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $course_id,$class_id, $course_name, $name, $role, $content, $link_id;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($course_id,$class_id, $course_name, $name, $role, $content,$link_id)
    {
        $this->course_id = $course_id;
        $this->class_id = $class_id;
        $this->course_name = $course_name;
        $this->name = $name;
        $this->role = $role;
        $this->content = $content;
        $this->link_id = $link_id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {   
        $emails;
        if($this->course_id == null){
            $emails = tbl_userclass::where('tbl_userclasses.class_id', $this->class_id)
            ->select('users.email','tbl_user_details.firstName')
            ->leftjoin('users', 'users.id', '=', 'tbl_userclasses.user_id')
            ->leftjoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'tbl_userclasses.user_id')
            ->where('users.role','Student')
            ->get();
        }
        else{
            $emails = tbl_userclass::where('tbl_userclasses.course_id', $this->course_id)
            ->select('users.email','tbl_user_details.firstName')
            ->leftjoin('users', 'users.id', '=', 'tbl_userclasses.user_id')
            ->leftjoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'tbl_userclasses.user_id')
            ->where('users.role','Student')
            ->get();
        }


        $counter = 1;
        foreach($emails as $email){
            $latercount = 5;
            $delay = $latercount*$counter;
            $url = '/course'.'/'.$this->link_id.'/announcement';
            $MailData = new SendAnnoucementEmail($this->name, $email->firstName, $this->course_name, $this->content, $url);
            Mail::to($email->email)
            ->cc($emails)
            ->later($delay, $MailData);
            $counter++;
        }



       
    }
}
