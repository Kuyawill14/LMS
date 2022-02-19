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
        ->select(
            'tbl_user_details.firstName',
            'tbl_user_details.middleName',
            'tbl_user_details.lastName',
            'users.email',
            'users.password',
            'users.role',
            'tbl_departments.short_name as department_short',
            'tbl_departments.name as department_full',        
            )
        ->leftJoin('users', 'users.id', '=', 'tbl_user_details.user_id')
        ->leftjoin('tbl_teacher_courses', 'tbl_teacher_courses.id' , '=', 'users.id')
        ->leftjoin('tbl_user_departments', 'tbl_user_departments.user_id' , '=', 'users.id')
        ->leftjoin('tbl_departments', 'tbl_departments.id' , '=', 'tbl_user_departments.department_id')
        ->get();

        

        return $teachers;
    }
}
