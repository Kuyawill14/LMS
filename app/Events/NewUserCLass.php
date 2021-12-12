<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\tbl_userclass;

class NewUserCLass implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $newUserClass;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(tbl_userclass $newUserClass)
    {
        $this->newUserClass = $newUserClass;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('newuserclass');
    }

    public function broadcastWith()
    {
        return ['newuserclass' => $this->newUserClass];
    }
}
