<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendAnnoucementEmail extends Mailable
{
    use Queueable, SerializesModels;
    protected $name, $student_name, $course_name, $content,$url;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $student_name, $course_name, $content, $url)
    {
        $this->name = $name;
        $this->student_name = $student_name;
        $this->course_name = $course_name;
        $this->content = $content;
        $this->url = $url;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('EmailTemplates.NewAnnouncement')
                    ->subject('ISUE-ORANGE')
                    ->with([
                        'name' => $this->name,
                        'student_name' => $this->student_name,
                        'course_name' => $this->course_name,
                        'content' => $this->content,
                        'url' => $this->url,
                    ]);
    }
}
