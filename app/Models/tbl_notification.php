<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Events\NewNotification;


class tbl_notification extends Model
{
    use HasFactory;

    /* protected $dispatchesEvents = [

        'created' => NewNotification::class,
        
    ]; */
}
