<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\tbl_join_request;

class JoinRequest
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $newJoinRequest;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(tbl_join_request $newJoinRequest)
    {
        $this->newJoinRequest = $newJoinRequest;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('course.'. $this->newJoinRequest->course_id);
    }
    public function broadcastWith()
    {
        return ['course' => $this->newJoinRequest->course_id];
    }
}
