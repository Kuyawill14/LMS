<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_userclass;
use App\Models\User;
use App\Models\Tbl_class;
use App\Models\tbl_notification;
use App\Models\tbl_Submission;
use App\Events\NewNotification;


class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

      /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getStudentList($id)
    {
        $userId = auth('sanctum')->id();
        if(auth('sanctum')->user()->role == 'Teacher') {
        $StudentList = DB::table('tbl_userclasses')
        ->select('tbl_userclasses.id as uc_id','users.id','users.firstName','users.email','users.lastName','users.role','tbl_user_details.profile_pic' )
        ->leftJoin('users', 'tbl_userclasses.user_id', '=', 'users.id', )
        ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id', )
        ->where('tbl_userclasses.course_id', $id)
        ->where('users.role', 'Student')
        ->orderBy('users.lastName', 'ASC')
        ->get();
        } else if (auth('sanctum')->user()->role == 'Student') { 
            $StudentList = DB::table('tbl_userclasses')
            ->select('tbl_userclasses.id as uc_id','users.id','users.firstName','users.email','users.lastName','users.role','tbl_user_details.profile_pic' )
            ->leftJoin('users', 'tbl_userclasses.user_id', '=', 'users.id', )
            ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id', )
            ->where('tbl_userclasses.course_id', $id)
            ->where('users.role', 'Student')
            ->where('users.id', $userId)
            ->orderBy('users.lastName', 'ASC')
            ->get();
        }
            return $StudentList;
        
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
    public function UpdateStatus(Request $request)
    {
        $userId = auth('sanctum')->id();
        $StatusUpdate = new tbl_Submission;
        $StatusUpdate->classwork_id = $request->id;
        $StatusUpdate->user_id =  $userId;
        $StatusUpdate->status = "Taking";
        $StatusUpdate->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function checkSubmissionStatus($id)
    {
        //$userId = auth('sanctum')->id();
        $userId = 2;
        $CheckStatus = User::where('users.id', $userId)
        
        ->select('users.id', 'tbl_submissions.status','tbl_submissions.points as score','tbl_submissions.Submitted_Answers',
        'tbl_classworks.points as totalPoints'
        ,'tbl_userclasses.class_id','tbl_classworks.id as cl_id')
        ->leftJoin('tbl_userclasses', 'tbl_userclasses.user_id', '=', 'users.id')
        ->leftJoin('tbl_classworks', 'tbl_classworks.course_id', '=', 'tbl_userclasses.course_id')
        ->leftJoin('tbl_submissions', 'tbl_submissions.classwork_id', '=', 'tbl_classworks.id')
        ->where('tbl_classworks.id', $id)
        ->get();
        
       /*  if($CheckStatus[0]->status == "Submitted"){

        } */
        $TempAnswer = unserialize($CheckStatus[0]->Submitted_Answers);
        $CheckStatus[0]->Submitted_Answers = $TempAnswer;
        return $CheckStatus;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function JoinClass($id)
    {
        $userId = auth('sanctum')->id();
        $ClassCheckExist = DB::table('tbl_classes')
        ->where('class_code', $id)
        ->get();
        
        //$ClassCheckExist = Tbl_class::where('class_code', $id)->exists();

        if(count($ClassCheckExist) == 0){
            return response()->json("Class doest exist",203);
        }
        else{

            $Class = DB::table('tbl_classes')->where('class_code', $id)->get();
            $Check = tbl_userclass::where('course_id','=', $Class[0]->course_id)
            ->where('user_id','=',$userId)
            ->exists();

            if($Check == true){
                return response()->json("You already join to this class",202);
            }
            
        }
           
        $JoinClass = new tbl_userclass;
        $JoinClass->class_id = $Class[0]->id;
        $JoinClass->user_id = $userId;
        $JoinClass->course_id = $Class[0]->course_id;
        $JoinClass->save();



        //Create notif for join students to class
       

        //Get all student join to this class with the
        
        //notification
        $userInClass = DB::table('tbl_userclasses')
        ->where('class_id', $JoinClass->class_id)
        ->get();


        $userInClass = DB::table('tbl_userclasses')
        ->select('tbl_userclasses.id','tbl_userclasses.user_id', 'tbl_classes.class_name', 'users.role','tbl_subject_courses.course_name')
        ->leftJoin('tbl_classes', 'tbl_classes.id', '=', 'tbl_userclasses.class_id')
        ->leftJoin('tbl_subject_courses', 'tbl_userclasses.course_id', '=', 'tbl_subject_courses.id')
        ->leftJoin('users', 'users.id', '=', 'tbl_userclasses.user_id')
        ->where('users.role', 'Teacher')
        ->where('tbl_userclasses.class_id', $JoinClass->class_id)
        ->get();

        $newNotification = new tbl_notification;
        $newNotification->userid_from = $userId;
        $newNotification->userid_to = $userInClass[0]->user_id;
        $newNotification->class_id = $JoinClass->class_id;
        $newNotification->message = "Join to your ".$userInClass[0]->course_name." - " .$userInClass[0]->class_name ." class";
        $newNotification->notification_type = 1;
        $newNotification->status = 0;
        $newNotification->save();


        /* broadcast(new NewNotification($newNotification))->toOthers(); */
        return response()->json("Join class success",200); 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function Unenroll($id)
    {
        $Unenroll = tbl_userclass::find($id);
        if($Unenroll){
            $Unenroll->delete();
            return "successfully Unenrolled.";
        }
        return "Class not found";
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
        //
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
