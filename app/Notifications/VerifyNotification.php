<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Models\tbl_userDetails;

class VerifyNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $params =  [
            'id' => $notifiable->getKey(),
            'hash' => sha1($notifiable->getEmailForVerification()),
        ];

        $url = "/verify-email?";
        $url = $url.'id='.$params['id'].'&hash='.$params['hash'];

        $user = tbl_userDetails::where('user_id', $params['id'])->first();
        
      /*   return (new MailMessage)
                ->greeting('Hello '.$user->firstName)
                ->line('Please click the button below to verify your email address.')
                ->action('Verify Email Address', $url)
                ->line('Thank you for using '.config('app.name')); */
            return (new MailMessage)->view('VerifyEmail', 
                    ['firstName' => $user->firstName,
                     'url'=> $url,
                    ]
                );
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
