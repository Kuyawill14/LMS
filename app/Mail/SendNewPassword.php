<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendNewPassword extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;
    public $new_password;
   
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($new_password)
    {
     $this->new_password = $new_password;
    }

    /**
     * Build the message.
     *
     * @return $this
     */

   
    public function build()
    {
        return $this->view('ResetPasswordEmail')
        ->subject('New Password');
    }
}
