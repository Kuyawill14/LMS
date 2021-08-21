<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_classAnnouncement extends Model
{
    use HasFactory;

     /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['content'];
}
