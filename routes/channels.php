<?php

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('post.{course_id}', function ($user, $course_id) {
    return ['id' => $user->id];
});

Broadcast::channel('notification', function ($user) {
    return ['id' => $user->id];
});

Broadcast::channel('newuserclass', function ($user) {
    return ['id' => $user->id];
});

Broadcast::channel('join_request', function ($user) {
    return ['id' => $user->id];
});


