<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\tbl_classpost;

class NewPost implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    
    public $newPost;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(tbl_classpost $newPost)
    {
        $this->newPost = $newPost;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('post.'. $this->newPost->class_id);
    }

    public function broadcastWith()
    {
        return ['post' => $this->newPost->id];
    }
}
