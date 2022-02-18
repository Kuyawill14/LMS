<?php

namespace App\Http\Controllers\api\backup;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\tbl_userDetails;
class BackupController extends Controller
{
    //
    public function backupTeacherToCSV(){
        
        $teachers = tbl_userDetails::where('role','Teacher')
        ->select('users.role','users.email',
        'tbl_user_details.*')
        ->leftJoin('users', 'users.id', '=', 'tbl_user_details.user_id')
        ->leftjoin('tbl_teacher_courses', 'tbl_teacher_courses.id' , '=', 'users.id')
        ->get();

        return array('id'=>1231);
    }
}
