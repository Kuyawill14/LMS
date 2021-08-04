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
        //$userId = 1;
        $allCourseSubject = tbl_teacher_course::whereNull('tbl_teacher_courses.deleted_at')
        ->where('tbl_teacher_courses.user_id', $userId)
       
        ->select('tbl_teacher_courses.id as useClass_id','tbl_subject_courses.id','tbl_subject_courses.course_code',
        'tbl_subject_courses.course_name','tbl_subject_courses.course_description','tbl_subject_courses.id as course_id',
        'tbl_subject_courses.course_picture','tbl_subject_courses.completed','tbl_subject_courses.created_at')
        ->selectRaw('count(tbl_userclasses.course_id ) as student_count')
        ->leftJoin('tbl_subject_courses', 'tbl_teacher_courses.course_id', '=', 'tbl_subject_courses.id')
        ->leftJoin('tbl_userclasses', 'tbl_userclasses.course_id','=','tbl_subject_courses.id')
        ->leftJoin('users', 'users.id','=','tbl_userclasses.user_id' )
        ->groupBy('tbl_teacher_courses.id','tbl_subject_courses.id','tbl_subject_courses.course_code',
        'tbl_subject_courses.course_name','tbl_subject_courses.course_description','tbl_subject_courses.id',
        'tbl_subject_courses.course_picture','tbl_subject_courses.completed','tbl_subject_courses.created_at')
        ->orderBy('created_at', 'ASC')
        ->get();


        foreach($allCourseSubject as $item){
            $countClass = tbl_userclass::where('tbl_userclasses.course_id', $item->id)
            ->where('tbl_userclasses.user_id', $userId )
            ->count();
            $item->class_count = $countClass;

            $StudentCount = tbl_userclass::where('tbl_userclasses.course_id', $item->id)
            ->where('tbl_userclasses.user_id','!=' ,$userId )
            ->count();

            $item->student_count =  $StudentCount;
        }
        return $allCourseSubject;
    }
    public function CourseDetails($id)
    {
        $userId = auth('sanctum')->id();
        if(auth('sanctum')->user()->role == "Student"){
            $ShowCourseDetails = tbl_subject_course::where('tbl_subject_courses.id', $id)
            ->select('tbl_subject_courses.id', 'tbl_subject_courses.course_code', 'tbl_subject_courses.course_name', 'tbl_subject_courses.course_description'
            , 'tbl_subject_courses.course_picture','tbl_subject_courses.v_classroom_link',DB::raw('CONCAT(users.firstname, " ", users.lastName) as name'),'completed')
            ->leftjoin('tbl_userclasses', 'tbl_userclasses.course_id','=','tbl_subject_courses.id')
            ->leftjoin('users', 'users.id','=','tbl_userclasses.user_id')
            ->where('users.role', 'Teacher')
            ->first();
            return $ShowCourseDetails;
        }
        else{
            $ShowCourseDetails = tbl_subject_course::where('tbl_subject_courses.id', $id)
            ->select('tbl_subject_courses.id', 'tbl_subject_courses.course_code', 'tbl_subject_courses.course_name', 'tbl_subject_courses.course_description'
            ,'tbl_subject_courses.course_picture','tbl_subject_courses.v_classroom_link','completed')
            ->first();
            $ShowCourseDetails->name = auth('sanctum')->user()->firstName.' '.auth('sanctum')->user()->lastName;
            return $ShowCourseDetails;
        }
    }

     /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function CheckCourseStatus()
    {
        $userId = auth('sanctum')->id();
        //$userId = 3;
        $courseStatus;
        if(auth('sanctum')->user()->role == "Student"){
            $courseStatus = tbl_userclass::whereNull('tbl_userclasses.deleted_at')
            ->select('tbl_subject_courses.id', 'tbl_subject_courses.completed as status')
            ->leftjoin('tbl_subject_courses', 'tbl_subject_courses.id','=','tbl_userclasses.course_id')
            ->where('tbl_userclasses.user_id', $userId)
            ->get();

        }else{
            $courseStatus = tbl_teacher_course::whereNull('tbl_teacher_courses.deleted_at')
            ->select('tbl_subject_courses.id', 'tbl_subject_courses.completed as status')
            ->leftjoin('tbl_subject_courses', 'tbl_subject_courses.id','=','tbl_teacher_courses.course_id')
            ->where('tbl_teacher_courses.user_id', $userId)
            ->get();
        }
        return $courseStatus;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
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
    public function ArchiveCourse($id)
    {
        //return $id;
        $CheckCourse = tbl_teacher_course::where('course_id', $id)->first();
        if($CheckCourse){
            $CheckClass = tbl_userclass::where('course_id', $id)
            ->delete();
            $CheckCourse->delete();
            return "Course Archive";
        }
        return "Course not found!";
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
            $existingCourse->v_classroom_link = $request->courseItem['v_classroom_link'];
            $existingCourse->save();
            return $existingCourse;
        }
        return $request->courseItem;
    }
    public function courseCompleted($id) {
        $userId = auth('sanctum')->id();
        $existingCourse = tbl_subject_course::find($id);

        if($existingCourse) {
            $existingCourse->completed = 1;
            $existingCourse->save();
            return $existingCourse;
        }

        return 1;
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
