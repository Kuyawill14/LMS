<?php

namespace App\Listener;

use App\Events\NewNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendNewNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  NewNotification  $event
     * @return void
     */
    public function handle(NewNotification $event)
    {
        //
    }
}
