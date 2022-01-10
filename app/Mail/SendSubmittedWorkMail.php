<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendSubmittedWorkMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    protected $name, $profile, $classwork_name, $date_sub, $url;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $profile, $classwork_name, $date_sub, $url)
    {
        $this->name = $name;
        $this->profile = $profile;
        $this->classwork_name = $classwork_name;
        $this->date_sub = $date_sub;
        $this->url = $url;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('EmailTemplates.SubmitWork')
                    ->subject($this->name.' Submitted in your classwork.')
                    ->with([
                        'name' => $this->name,
                        'profile' => $this->profile,
                        'classwork_name' => $this->classwork_name,
                        'date_sub'=> $this->date_sub,
                        'url' => $this->url,
                    ]);
    }
}
