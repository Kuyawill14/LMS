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

        $url = env(key: "APP_URL").'/verify-email?';

       /*  foreach ($params as $key => $param) {
            $url .= "{$key}={$param}&";
        } */

        $url = $url.'id='.$params['id'].'&hash='.$params['hash'];


        $user = tbl_userDetails::where('user_id', $params['id'])->first();
        
        return (new MailMessage)
                    ->greeting('Hello '.$user->firstName)
                    ->line('Please click the button below to verify your email address.')
                    ->action('Verify Email Address', $url)
                    ->line('Thank you for using '.env(key: 'APP_NAME'));

                    return $this->view('ClassInvite')
                    ->subject('You are invited to join ' . $this->course_name . ' ' .$this->class_name )
                                ->with([
                                    'class_code' => $this->class_name,
                                    'name' => $this->name,
                                    'course_name' => $this->course_name,
                                    'class_name' => $this->class_name,
                                ]);
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
