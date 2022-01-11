<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendRequestJoinMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;
    protected $name, $profile, $course_name, $class_name, $url;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $profile, $course_name, $class_name, $url)
    {
        $this->name = $name;
        $this->profile = $profile;
        $this->course_name = $course_name;
        $this->class_name = $class_name;
        $this->url = $url;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('EmailTemplates.JoinRequestEmail')
                    ->subject('A student is requesting to join your ISUE-ORANGE Course')
                    ->with([
                        'name' => $this->name,
                        'profile' => $this->profile,
                        'course_name' => $this->course_name,
                        'class_name'=> $this->class_name,
                        'url' => $this->url,
                    ]);
    }
}
