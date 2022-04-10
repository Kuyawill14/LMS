<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class tbl_classwork extends Model
{
    use HasFactory, SoftDeletes;


    public function getAttachmentAttribute($value)
    {
        return @unserialize($value) !== false ? unserialize($value) : $value;
         
    }
}
