<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_student_exam_activity_log;
class StduentExamActivityLog extends Controller
{
    //

    public function fetchStudentActivityLog(Request $request) {
        $activity_log = tbl_student_exam_activity_log
        ::select('created_at','description')
        ->where(['classwork_id' => $request->classwork_id, 'student_id'=>$request->student_id])
        ->get();
        
        return $activity_log;
    }

    public function addStudentActivityLog(Request $request) {

        /*
        0 - switch tabs/application 
        1 - exited to the exam through multiple violations
        2 - continue exam


        */
        $user_id = auth("sanctum")->id();

        $activity_log = new tbl_student_exam_activity_log;

        $description = 'Switched tabs / Lost focus on exam';

        $activity_log->student_id = $user_id;
        $activity_log->classwork_id = $request->classwork_id;
        $activity_log->description =  $request->description;
      
        if($activity_log->save()) {
            return 'Activity saved';
        } else {
            return 'Something went Wrong';
        }
        
    }
}
