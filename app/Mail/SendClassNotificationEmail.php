<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendClassNotificationEmail extends Mailable
{
    use Queueable, SerializesModels;

    protected $title, $instruction, $due,$class_name ,$lastName, $url;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct( $title, $instruction, $due,$class_name ,$lastName,$url)
    {
        $this->title = $title;
        $this->instruction = $instruction;
        $this->due = $due;
        $this->class_name = $class_name;
        $this->lastName = $lastName;
        $this->url = $url;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('EmailTemplates.NewClasswork')
                    ->subject('ISUE-ORANGE Instrutor '.$this->lastName)
                    ->with([
                        'title' => $this->title,
                        'instruction' => $this->instruction,
                        'due' => $this->due,
                        'courseClassName'=> $this->class_name,
                        'lastName' => $this->lastName,
                        'url' => $this->url,
                    ]);
    }
}
