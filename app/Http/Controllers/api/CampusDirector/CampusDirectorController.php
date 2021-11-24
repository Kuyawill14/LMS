<?php

namespace App\Http\Controllers\api\CampusDirector;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_department;
class CampusDirectorController extends Controller
{
    //




    public function getDepartmentsData() {
      
        $total_students = '(SELECT COUNT(*) FROM users
        LEFT JOIN tbl_user_departments ON tbl_user_departments.user_id = users.id
        WHERE tbl_user_departments.department_id = tbl_departments.id
        AND users.role = "Student") AS total_students';

        $total_teachers =  '(SELECT COUNT(*) FROM users
        LEFT JOIN tbl_user_departments ON tbl_user_departments.user_id = users.id
        WHERE tbl_user_departments.department_id = tbl_departments.id
        AND users.role = "Teacher") AS total_teachers';


            $departments = tbl_department::select('logo', 'name', 'short_name','id')
            ->selectRaw($total_students)
            ->selectRaw($total_teachers)
           
            ->get();

       
        
        return $departments;


    }


    public function selectedDeparment($id) {
        $total_students = '(SELECT COUNT(*) FROM users
        LEFT JOIN tbl_user_departments ON tbl_user_departments.user_id = users.id
        WHERE tbl_user_departments.department_id = tbl_departments.id
        AND users.role = "Student") AS total_students';

        $total_teachers =  '(SELECT COUNT(*) FROM users
        LEFT JOIN tbl_user_departments ON tbl_user_departments.user_id = users.id
        WHERE tbl_user_departments.department_id = tbl_departments.id
        AND users.role = "Teacher") AS total_teachers';


     
            $departments = tbl_department::select('logo', 'name', 'short_name','id')
            ->selectRaw($total_students)
            ->selectRaw($total_teachers)
            ->where('tbl_departments.id',$id)
            ->first();

    
       
        
        return $departments;

    }
}
