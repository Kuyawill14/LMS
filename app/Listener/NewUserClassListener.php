<?php

namespace App\Listener;

use App\Events\NewUserCLass;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class NewUserClassListener
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
     * @param  NewUserCLass  $event
     * @return void
     */
    public function handle(NewUserCLass $event)
    {
        //
    }
}
