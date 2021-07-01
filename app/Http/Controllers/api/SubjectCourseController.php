<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Tbl_class;
use App\Models\tbl_userclass;
use App\Models\tbl_classwork;
use App\Models\tbl_classClassworks;
use App\Models\tbl_teacher_course;
use App\Models\tbl_subject_course;

class SubjectCourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $totalProgress = 0;
        $userId = auth('sanctum')->id();
        $allCourseSubject = DB::table('tbl_teacher_courses')
        ->select('tbl_teacher_courses.id as useClass_id','tbl_subject_courses.*','tbl_subject_courses.id as course_id')
        ->leftJoin('tbl_subject_courses', 'tbl_teacher_courses.course_id', '=', 'tbl_subject_courses.id')
        ->where('user_id',$userId)
        ->orderBy('created_at', 'ASC')
        ->get();

        // if(auth('sanctum')->user()->role == "Student") {
        //     foreach($allClass as $key => $value) {
        //         $allClassSubModules = DB::table('tbl_sub_modules')
        //         ->select('tbl_sub_modules.id')
        //         ->leftJoin('tbl_main_modules', 'tbl_sub_modules.main_module_id', '=', 'tbl_main_modules.id')
        //         ->where('tbl_main_modules.class_id', $value ->class_id )
        //         ->count();
        
        
        //         $allStudentSubmoduleProgress = DB::table('tbl_student_sub_module_progress')
        //         ->select('tbl_student_sub_module_progress.sub_module_id')
        //         ->leftJoin('tbl_sub_modules', 'tbl_student_sub_module_progress.sub_module_id', '=', 'tbl_sub_modules.id')
        //         ->where('tbl_student_sub_module_progress.class_id', $value ->class_id )
        //         ->count();
                
        //         if($allStudentSubmoduleProgress != 0 ) {
        //             $totalProgress =  ( $allStudentSubmoduleProgress / $allClassSubModules) * 100;
        //         }
               
    
        //         DB::table('tbl_userclasses')
        //         ->where('user_id', $userId)
        //         ->where('class_id', $value ->class_id)
        //         ->update(['progress' =>  $totalProgress]);
    
    
        
        //     }
        // }
        
    
        return $allCourseSubject;
    }
    public function CourseDetails($id)
    {
        $userId = auth('sanctum')->id();
        if(auth('sanctum')->user()->role == "Student"){
            $ShowCourseDetails = tbl_subject_course::where('tbl_subject_courses.id', $id)
            ->select('tbl_subject_courses.id', 'tbl_subject_courses.course_code', 'tbl_subject_courses.course_name', 'tbl_subject_courses.course_description'
            , 'tbl_subject_courses.course_picture',DB::raw('CONCAT(users.firstname, " ", users.lastName) as name'))
            ->leftjoin('tbl_userclasses', 'tbl_userclasses.course_id','=','tbl_subject_courses.id')
            ->leftjoin('users', 'users.id','=','tbl_userclasses.user_id')
            ->where('users.role', 'Teacher')
            ->first();
            return $ShowCourseDetails;
        }
        else{
            $ShowCourseDetails = tbl_subject_course::where('tbl_subject_courses.id', $id)
            ->select('tbl_subject_courses.id', 'tbl_subject_courses.course_code', 'tbl_subject_courses.course_name', 'tbl_subject_courses.course_description'
            ,'tbl_subject_courses.course_picture')
            ->first();
            $ShowCourseDetails->name = auth('sanctum')->user()->firstName.' '.auth('sanctum')->user()->lastName;

            return $ShowCourseDetails;
        }
       
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        //
        $userId = auth('sanctum')->id();
        $Newcourse = new tbl_subject_course;
        $coursePic = ['theme1.jpg','theme2.jpg','theme3.jpg','theme4.jpg','theme5.jpg','theme6.jpg','theme7.jpg','theme8.jpg'];
        shuffle($coursePic);


        $Newcourse->course_name =  $request->courseItem['course_name'];
        $Newcourse->course_code =  $request->courseItem['course_code'];
        $Newcourse->course_description ='';
        $Newcourse->course_picture = $coursePic[0];
        $Newcourse->save();

 
      
        $teacherSubjectCourse  = new tbl_teacher_course;

        $teacherSubjectCourse->course_id = $Newcourse->id;
        $teacherSubjectCourse->user_id = $userId;
        $teacherSubjectCourse->save();

        return $Newcourse;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
        $existingCourse = tbl_subject_course::find($id);

        if($existingCourse) {
            $existingCourse->course_name = $request->courseItem['course_name'];
            $existingCourse->course_code = $request->courseItem['course_code'];
            $existingCourse->course_description = $request->courseItem['course_description'];
            $existingCourse->save();
            return $existingCourse;
        }

        return $request->courseItem;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
