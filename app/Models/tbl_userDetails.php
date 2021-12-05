<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_userDetails extends Model
{
    use HasFactory;

   

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    //protected $hidden = ['firstName', 'lastName'];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
