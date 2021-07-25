<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendInviteMail extends Mailable
{
    use Queueable, SerializesModels;
    
    public $class_code;
    public $name;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($class_code,$name, $course_name, $class_name)
    {
        $this->class_code = $class_code;
        $this->name = $name;
        $this->course_name = $course_name;
        $this->class_name = $class_name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        return $this->view('ClassInvite')
                    ->with([
                        'class_code' => $this->class_name,
                        'name' => $this->name,
                        'course_name' => $this->course_name,
                        'class_name' => $this->class_name,
                    ]);
    }
}
