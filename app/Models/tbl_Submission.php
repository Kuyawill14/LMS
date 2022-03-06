<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class tbl_Submission extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'tbl_submissions';

 /*    public function getSubmittedAnswersAttribute($value)
    {
        @unserialize($value) !== false ? unserialize($value) : $value;

    } */


   

   
}
