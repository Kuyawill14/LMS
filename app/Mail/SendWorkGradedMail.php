<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendWorkGradedMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;
    protected $name, $classwork_name, $url;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $classwork_name, $url)
    {
        $this->name = $name;
        $this->classwork_name = $classwork_name;
        $this->url = $url;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('EmailTemplates.GradedWorkEmail')
                    ->subject('Your work has been graded')
                    ->with([
                        'name' => $this->name,
                        'classwork_name' => $this->classwork_name,
                        'url' => $this->url,
                    ]);
    }
}
