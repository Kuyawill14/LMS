<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_classpost extends Model
{
    use HasFactory;
    public function comments() {
        //return $this->hasMany(App\Models\tbl_comment::class);
        

        return $this->hasMany('App\Models\tbl_comment');
    }
}
