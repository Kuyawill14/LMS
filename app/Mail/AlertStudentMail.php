<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
//use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AlertStudentMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $classwork_id, $classwork_name, $course_id,  $course_name,$firstName;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($classwork_id, $classwork_name, $course_id, $course_name, $firstName)
    {
        $this->classwork_id = $classwork_id;
        $this->classwork_name = $classwork_name;
        $this->course_id = $course_id;
        $this->course_name = $course_name;
        $this->firstName = $firstName;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $url = '/classwork'.'/'.$this->course_id.'/classwork-details?clwk='.$this->classwork_id;
        return $this->view('AlertStudent')
                    ->subject('Your classwork in '.$this->classwork_name.' will end soon' )
                    ->with([
                        'classwork_id' => $this->classwork_id,
                        'classwork_name' => $this->classwork_name,
                        'course_id' => $this->course_id,
                        'course_name' => $this->course_name,
                        'firstName' => $this->firstName,
                        'url' => $url,
                    ]);
    }
}
