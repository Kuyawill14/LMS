<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class tbl_subject_course extends Model
{
    use HasFactory, SoftDeletes,LogsActivity;

    //protected static $recordEvents = ['deleted'];
    protected static $logName = 'Teacher Courses';
    protected static $logOnlyDirty = true;
    protected static $submitEmptyLogs = false;
    protected static $logAttributes = ['course_code', 
    'course_name',
    'course_description',
    'completed',
    'semester_id',
    'school_year_id'
    ];

    public function getDescriptionForEvent(string $eventName): string
    {
        $name =  auth('sanctum')->user()->tbl_userDetails->firstName.' '.auth('sanctum')->user()->tbl_userDetails->lastName;
        return "{$name} {$eventName} course";
    }
}
