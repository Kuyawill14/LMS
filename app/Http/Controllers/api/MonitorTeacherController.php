<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\tbl_userDetails;
use App\Models\tbl_userclass;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_subject_course;


class MonitorTeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }
    public function teacherData() {
        $teachers = tbl_userDetails::where('role','Teacher')
        ->select('users.role','users.email',
        'tbl_user_details.*')
        ->leftJoin('users', 'users.id', '=', 'tbl_user_details.user_id')
        ->leftjoin('tbl_teacher_courses', 'tbl_teacher_courses.id' , '=', 'users.id')
        ->get();

        return $teachers;
    }


    public function getAllTeacherSummarryData(Request $request) {


    $school_year_id = $request->school_year_id;
    $semester_id = $request->semester_id;


    $inFilter = $this->filterAllSummarry($school_year_id, $semester_id) ;


    $filetr_query = $this->filterSchoolyearSemester($school_year_id, $semester_id);
    
    $course_count = '(SELECT COUNT(*) FROM tbl_teacher_courses 
    LEFT JOIN tbl_subject_courses on tbl_subject_courses.id = tbl_teacher_courses.course_id 
    WHERE user_id = users.id AND tbl_teacher_courses.course_id = tbl_subject_courses.id AND tbl_teacher_courses.deleted_at IS NULL
     '. $inFilter .') AS course_count';
   
    $class_count = '(SELECT COUNT(*) FROM tbl_userclasses
    LEFT JOIN tbl_subject_courses on tbl_subject_courses.id = tbl_userclasses.course_id
    WHERE user_id = users.id  AND tbl_teacher_courses.course_id = tbl_subject_courses.id  AND tbl_userclasses.deleted_at IS NULL
     '. $inFilter.') AS class_count';
   
    $classwork_count = '(SELECT COUNT(*) FROM tbl_classworks
    LEFT JOIN tbl_subject_courses on tbl_subject_courses.id = tbl_classworks.course_id
    WHERE user_id = users.id  AND tbl_teacher_courses.course_id = tbl_subject_courses.id
     '. $inFilter.' ) AS classwork_count';


    $sub_module_count = '(SELECT COUNT(*) FROM tbl_main_modules 
    LEFT JOIN tbl_subject_courses on tbl_subject_courses.id = tbl_main_modules.course_id
    LEFT JOIN tbl_sub_modules ON  tbl_main_modules.id = tbl_sub_modules.main_module_id
    WHERE tbl_main_modules.created_by = users.id  AND tbl_teacher_courses.course_id = tbl_subject_courses.id
     '. $inFilter.'
    ) AS sub_modules_count';
 
 
    $teachers = DB::table('users')
    ->select('users.id as user_id','users.role','tbl_user_details.firstName','tbl_user_details.middleName','tbl_user_details.lastName','users.email')
    ->leftjoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
    ->leftjoin('tbl_teacher_courses', 'tbl_teacher_courses.user_id','=','users.id')
    ->leftjoin('tbl_subject_courses', 'tbl_subject_courses.id','=','tbl_teacher_courses.course_id')

    ->selectRaw( $course_count)
    ->selectRaw( $class_count)
    ->selectRaw( $classwork_count)
    ->selectRaw( $sub_module_count)
    ->where('role','Teacher')
    ->whereNull("tbl_teacher_courses.deleted_at")
    ->groupBy('users.id')
    ->get();
        return $teachers;
    }


    public function filterAllSummarry($school_year_id, $semester_id) {
        $inFilter = '';

        if($school_year_id != null && $semester_id != null) {
            $inFilter = 'AND tbl_subject_courses.semester_id = ' . $semester_id . ' AND tbl_subject_courses.school_year_id = ' .$school_year_id ;
        } else if ($school_year_id != null) {
            $inFilter = 'AND tbl_subject_courses.school_year_id = ' .$school_year_id;
        } else if( $semester_id != null) {
            $inFilter = 'AND tbl_subject_courses.semester_id = ' . $semester_id;
        }

        return $inFilter;
    }




    public function getSpecificTeacherSumarryData($teacher_id, $school_year,$semester) {
        $Summary_data = [];
        

        $Summary_data['teacher_sumarry_data'] = $this->teacher_sumarry_data($teacher_id,$school_year,$semester);
        $Summary_data['course_summary'] = [];
        $Summary_data['sumarry_data'] = [];

    }


    public function teacher_sumarry_data(Request $request){
        $userId = $request->teacher_id;
        $school_year_id = $request->school_year_id;
        $semester_id = $request->semester_id;
        $filter_query = $this->filterSchoolyearSemester($school_year_id, $semester_id);
        
        $overview = [
            'total_courses' => 0,
            'total_students' => 0,
            'total_classes'  => 0,
            'total_classwork'=> 0,
            'total_modules'  => 0,
        ];



                    
            $course_count = '(SELECT COUNT(*) FROM tbl_teacher_courses WHERE user_id =  '.$userId.' and  course_id = tbl_teacher_courses.course_id ) AS course_count';
            $class_count = '(SELECT COUNT(*) FROM tbl_userclasses WHERE user_id = '.$userId.' and  course_id = tbl_teacher_courses.course_id) AS total_classes';
            $classwork_count = '(SELECT COUNT(*) FROM tbl_classworks WHERE user_id = '.$userId.' and  course_id = tbl_teacher_courses.course_id) AS total_classworks';
            $sub_module_count = '(SELECT COUNT(*) FROM tbl_main_modules 
            LEFT JOIN tbl_sub_modules ON  tbl_main_modules.id = tbl_sub_modules.main_module_id WHERE tbl_main_modules.created_by = '.$userId.' and  course_id = tbl_teacher_courses.course_id) AS sub_modules_count';
          /*   $student_count = '(SELECT COUNT(*) FROM tbl_userclasses WHERE  course_id = tbl_teacher_courses.course_id ) AS total_students'; */


            $teacher_course_list =   tbl_subject_course::select('tbl_subject_courses.id as course_id')
            ->leftJoin('tbl_teacher_courses','tbl_teacher_courses.course_id','=','tbl_subject_courses.id')
            ->where('tbl_teacher_courses.user_id',$userId)
            ->where($filter_query)
            ->get();


            $allCourses = [];


            foreach( $teacher_course_list as $course) {
                $tmp = tbl_subject_course::select('tbl_subject_courses.course_name',
                'tbl_subject_courses.course_code',
                'tbl_subject_courses.id as course_id',
                'tbl_subject_courses.school_year_id',
                'tbl_subject_courses.semester_id'
                )
                ->selectRaw($class_count)
                ->selectRaw($classwork_count)
                ->selectRaw($sub_module_count)
    
                ->leftJoin('tbl_teacher_courses','tbl_teacher_courses.course_id','=','tbl_subject_courses.id')
                ->where('tbl_teacher_courses.user_id',$userId)
                ->where($filter_query)
                ->where('tbl_teacher_courses.id',$course->course_id)
                ->get();
                $allCourses[] = $tmp[0];
            }

            $counter = 0;
            foreach($allCourses as $item){
                $counter ++;
                $StudentCount = tbl_userclass::where('tbl_userclasses.course_id', $item->course_id)
                ->leftJoin('users','users.id','=','tbl_userclasses.user_id')
                ->where('users.role','Student')
                ->count();
                    
                $item->total_students = $StudentCount;
               

           
                $overview['total_students'] +=   $item->total_students;

                $overview['total_courses'] =    $counter ;
                $overview['total_classes'] +=  $item->total_classes;
                $overview['total_classwork'] +=  $item->total_classworks;
                $overview['total_modules'] +=  $item->sub_modules_count;
            }


       




            return ['overview' => $overview, 'courses' => $allCourses , ];    

    }

    public function filterSchoolyearSemester ($school_year_id,  $semester_id) {
        
        $query = [];


     
        if( $school_year_id != null && $semester_id != null  ) {
            $query = [
                'tbl_subject_courses.school_year_id' => $school_year_id ,
                'tbl_subject_courses.semester_id' => $semester_id,
            ];
        } else if($school_year_id != null) {
            $query = [
                'tbl_subject_courses.school_year_id' => $school_year_id ,
            ];
        } else if($semester_id != null) {
            $query = [
                'tbl_subject_courses.semester_id' => $semester_id,
            ];
        } else {
            $query = [];
        }
        return $query;
    }




    public function removeUser($id) {
        $user_details = tbl_userDetails::where('user_id',$id)->first();
        $user = User::where('id',$id)->first();
        if($user_details && $user){
            $user_details->delete();
            $user->delete();
            return $user_details;
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
       
        $userId =$id;
        $UpdateDetails = User::where('users.id',$userId)
        ->leftjoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id')
        ->first();
        if($UpdateDetails){
            $UpdateDetails->firstName = $request->firstName;
            $UpdateDetails->middleName = $request->middleName;
            $UpdateDetails->lastName = $request->lastName;
            $UpdateDetails->email = $request->email;
            $UpdateDetails->cp_no = $request->cp_no;
            $UpdateDetails->save();
            return "Details Successfully Updated";
        }
    }

    public function generatePassword() {
        $append= 'isu';
        $alphabet = "aeiouxyzBCDFGHIJKL1023456789#$%&@@";
        $pass = array(); //remember to declare $pass as an array
        $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
        for ($i = 0; $i < 5; $i++) {
            $n = rand(0, $alphaLength);
            $pass[] = $alphabet[$n];
        }
        return $append . '-'. implode($pass); //turn the array into a string
    }

    public function resetTeacherPassword($id) {
        $userTeacher = User::find($id);

        if($userTeacher) {
            $newpassword = $this->generatePassword();
            $userTeacher->password =  Hash::make($newpassword);
            $userTeacher->save();
            Mail::to($userTeacher->email)->send(new SendNewPassword($newpassword));
 
            return "User's password successfully reset!";
        }

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
