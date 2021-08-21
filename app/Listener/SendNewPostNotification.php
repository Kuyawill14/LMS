<?php

namespace App\Listener;

use App\Events\NewPost;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendNewPostNotification
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
     * @param  NewPost  $event
     * @return void
     */
    public function handle(NewPost $event)
    {
        //
    }
}
