<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\tbl_userDetails;
use App\Models\Tbl_class;
use App\Models\tbl_userclass;
use App\Models\tbl_student_sub_module_progress;
use App\Models\tbl_sub_modules;
use App\Models\tbl_subject_course;
use App\Models\tbl_Submission;
use App\Models\tbl_classwork;
use App\Models\tbl_classClassworks;
use Illuminate\Support\Str;


class TeacherProfileController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function teacherProfile($id)
    {
    
        // return $id;
        //$userDetails = User::find($id);
        // ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id')


        $userDetails = User::where('users.id' ,$id)
        ->select('users.role','users.email',
        'tbl_user_details.*')
        ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id')
        ->first();
        
        
        return $userDetails;
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
     * @return \Illuminate\Http\Response
     */
    public function getCourseAndClassesList($id)
    {
        $i = [];
        $totalProgress = 0;
        $userId = $id;

                    
            $course_count = '(SELECT COUNT(*) FROM tbl_teacher_courses WHERE user_id = users.id) AS course_count';
            $class_count = '(SELECT COUNT(*) FROM tbl_userclasses WHERE user_id = '.$userId.' AND course_id = tbl_teacher_courses.course_id) AS total_classes';
            $classwork_count = '(SELECT COUNT(*) FROM tbl_classworks WHERE user_id = '.$userId.' AND course_id = tbl_teacher_courses.course_id) AS total_classworks';
            $sub_module_count = '(SELECT COUNT(*) FROM tbl_main_modules 
            LEFT JOIN tbl_sub_modules ON  tbl_main_modules.id = tbl_sub_modules.main_module_id WHERE tbl_main_modules.created_by = '.$userId.' AND course_id = tbl_teacher_courses.course_id ) AS sub_modules_count';
          /*   $student_count = '(SELECT COUNT(*) FROM tbl_userclasses WHERE  course_id = tbl_teacher_courses.course_id ) AS total_students'; */

           
     
            $allCourses = tbl_subject_course::select('tbl_subject_courses.course_name',
            'tbl_subject_courses.course_code',
            'tbl_subject_courses.id as course_id',
            'tbl_subject_courses.school_year_id',
            'tbl_subject_courses.semester_id'
            )
            ->selectRaw($class_count)
            ->selectRaw($classwork_count)
            ->selectRaw($sub_module_count)
           /*  ->selectRaw($student_count) */
            ->leftJoin('tbl_teacher_courses','tbl_teacher_courses.course_id','=','tbl_subject_courses.id')
            ->where('tbl_teacher_courses.user_id',$userId)
            ->get();

            foreach($allCourses as $item){
               /*  $Classes = tbl_userclass::where('tbl_userclasses.course_id', $item->course_id) ->get();

                foreach($Classes as $class){ */
                    $StudentCount = tbl_userclass::where('tbl_userclasses.course_id', $item->course_id)
                    ->leftJoin('users','users.id','=','tbl_userclasses.user_id')
                    ->where('users.role','Student')
                    ->count();
                    
                    $item->total_students = $StudentCount;
                /* } */

               
            }

            return $allCourses;      
    }


    public function getCourseClassList($id, $user_id){

        $allClass = tbl_userclass::where('tbl_userclasses.course_id',$id)
        ->select('tbl_classes.class_name',
        'tbl_classes.class_code',
        'tbl_subject_courses.course_name',
        'tbl_subject_courses.course_code',
        'tbl_classes.id as class_id',
        'tbl_classes.created_at',
        )
        ->selectRaw('count(tbl_class_classworks.class_id ) as classwork_count')
        ->leftJoin('tbl_classes', 'tbl_userclasses.class_id', '=', 'tbl_classes.id')
        ->leftJoin('tbl_subject_courses', 'tbl_userclasses.course_id', '=', 'tbl_subject_courses.id')
        ->leftJoin('tbl_class_classworks', 'tbl_class_classworks.class_id', '=', 'tbl_userclasses.class_id')
        ->groupBy('tbl_classes.class_name','tbl_classes.class_code', 'tbl_subject_courses.course_name'
        ,'tbl_subject_courses.course_code', 'tbl_classes.id')
        ->where('user_id', $user_id)
        ->get();

        foreach($allClass as $key => $value) {
            $StudentCount = tbl_userclass::where('class_id', $value ->class_id)
            ->leftJoin('users','users.id','=','tbl_userclasses.user_id')
            ->where('users.role','Student')
            ->count();
            $value->student_count = $StudentCount;
        }

        return $allClass;
    }

    public function getCourseStudentList($id){

        $allStudent = tbl_userclass::where('tbl_userclasses.course_id',$id)
        ->select('tbl_user_details.user_id','tbl_user_details.student_id', 'tbl_user_details.firstName', 'tbl_user_details.lastName','tbl_user_details.profile_pic',
        'tbl_classes.class_name','tbl_classes.id as class_id')
        ->leftjoin('users','users.id','=','tbl_userclasses.user_id')
        ->leftjoin('tbl_user_details','tbl_user_details.user_id','=','users.id')
        ->leftjoin('tbl_classes','tbl_classes.id','=','tbl_userclasses.class_id')
        ->where('users.role', 'Student')
        ->orderBy('tbl_user_details.lastName')
        ->get();

        $class = Tbl_class::where('course_id', $id)
        ->select('tbl_classes.id','tbl_classes.class_name')
        ->get();

        return ['student_list'=> $allStudent, 'class_name'=> $class] ;
    }


    public function getCourseClassworkList($id){

        $Classwork = tbl_classwork::where('tbl_classworks.course_id', $id)
        ->select('tbl_classworks.id', 'tbl_classworks.title', 'tbl_classworks.type', 'tbl_classworks.instruction', 'tbl_classworks.attachment','tbl_classworks.created_at',
        'tbl_classworks.duration','tbl_classworks.points')->get();
        foreach($Classwork as $item){
            //$item->attachment = $item->attachment != null && $item->attachment != '' ? unserialize($item->attachment) : $item->attachment;
            
            $submissionCount = tbl_Submission::where('tbl_submissions.classwork_id', $item->id)
            ->where('tbl_submissions.status', 'Submitted')->count();
            $item->submittion_count =  $submissionCount;
            


            $publishIn = tbl_classClassworks::where('tbl_class_classworks.classwork_id', $item->id)
            ->select('tbl_classes.class_name','tbl_class_classworks.from_date', 'tbl_class_classworks.to_date','tbl_class_classworks.availability')
            ->leftJoin('tbl_classes', 'tbl_classes.id','=','tbl_class_classworks.class_id')
            ->get();

            $item->publish_in = $publishIn;
        }
        
        return $Classwork;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updatePicture(Request $request)
    {
        $userId = auth('sanctum')->id();
        $UpdatePicture = tbl_userDetails::where("tbl_user_details.user_id",$userId)->first();
        if($UpdatePicture){
            $UpdatePicture->profile_pic = $request->data;
            $UpdatePicture->save();
            return "Profile Picture Updated";
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateDetails(Request $request)
    {
        $userId = auth('sanctum')->id();
        $user = User::find($userId);
        if($user){
            $UpdateDetails = tbl_userDetails::where('tbl_user_details.user_id',$userId)->first();
            if($UpdateDetails){
                $UpdateDetails->firstName = $request->firstName;
                $UpdateDetails->middleName = $request->middleName;
                $UpdateDetails->lastName = $request->lastName;
                $UpdateDetails->address = $request->address;
                $UpdateDetails->cp_no = $request->cp_no;
                $UpdateDetails->social_account =  $request->social_account;
                $UpdateDetails->save();

                $user->email = $request->email;
                $user->save();
                return "Details Successfully Updated";
            }
        }
    }

     /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function FetchCalendarSched()
    {

        $userId = auth('sanctum')->id();
        //$userId = 2;
        $SubmitSubj = tbl_userclass::where('tbl_userclasses.user_id', $userId)
        ->select('tbl_userclasses.class_id','tbl_userclasses.course_id'
        ,'tbl_classworks.title','tbl_class_classworks.availability','tbl_class_classworks.from_date','tbl_class_classworks.to_date'
        ,'tbl_class_classworks.classwork_id')
        ->leftJoin('tbl_class_classworks','tbl_class_classworks.class_id','=','tbl_userclasses.class_id')
        ->leftJoin('tbl_classworks','tbl_classworks.id','=','tbl_class_classworks.classwork_id')
        ->get();
        foreach($SubmitSubj as $sj){
            $StatusCheck = tbl_Submission::where('tbl_submissions.classwork_id', $sj->classwork_id)
            ->where('tbl_submissions.user_id', $userId)
            ->first();
            
            if($StatusCheck){
                if($StatusCheck->status == "Submitted"){
                    $sj->status = $StatusCheck->status;
                }
                elseif($StatusCheck->status == "Submitting"){
                    $sj->status = $StatusCheck->status;
                }elseif($StatusCheck->status == "Taking"){
                    $sj->status = $StatusCheck->status;
                }
            }
            else{
                if($sj->status == ''){
                    $sj->status = null;
                }
            }
        }
        return $SubmitSubj;
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
