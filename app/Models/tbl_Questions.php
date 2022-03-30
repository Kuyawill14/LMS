<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_Questions extends Model
{
    use HasFactory;
    protected $table = 'tbl_questions';

    /* protected $casts = [
        'attachments' => 'array',
    ]; */

    public function getAttachmentsAttribute($value)
    {
        //return unserialize($value);
        return @unserialize($value) !== false ? unserialize($value) : $value;
         
    }
  /*   public function setAttachmentsAttribute($value)
    {
        $this->attributes['attachments'] = serialize($value);
    } */

    
}
