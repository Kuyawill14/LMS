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
use App\Models\tbl_teacher_course;
use App\Models\tbl_classClassworks;


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
        $StudentList = tbl_userclass::whereNull('tbl_userclasses.deleted_at')
        ->select('tbl_userclasses.class_id as class_id','tbl_classes.class_name'
        ,'users.id as user_id','users.firstName','users.email','users.lastName','users.role','tbl_user_details.profile_pic' )
        ->leftJoin('tbl_classes', 'tbl_classes.id', '=', 'tbl_userclasses.class_id', )
        ->leftJoin('users', 'tbl_userclasses.user_id', '=', 'users.id', )
        ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id',)
        ->where('tbl_userclasses.course_id', $id)
        ->where('users.role', 'Student')
        ->orderBy('users.lastName', 'ASC')
        ->get();


        $InstructorList = tbl_teacher_course::where('tbl_teacher_courses.course_id', $id)
        ->select('tbl_teacher_courses.course_id','users.id as user_id','users.firstName','users.email','users.lastName','tbl_user_details.profile_pic' )
        ->leftJoin('users', 'tbl_teacher_courses.user_id', '=', 'users.id', )
        ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id',)
        ->where('users.role', 'Teacher')
        ->orderBy('users.lastName', 'ASC')
        ->get();

        

        } 
        else if (auth('sanctum')->user()->role == 'Student') { 
            

            $Class = tbl_userclass::where('tbl_userclasses.course_id', $id)
            ->select('tbl_userclasses.class_id')
            ->where('tbl_userclasses.user_id', $userId)
            ->first();


            $StudentList = tbl_userclass::where('tbl_userclasses.class_id', $Class->class_id)
            ->select('users.firstName','users.lastName','tbl_user_details.profile_pic' )
            ->leftJoin('users', 'tbl_userclasses.user_id', '=', 'users.id', )
            ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id', )
            ->where('users.role', 'Student')
            ->orderBy('users.lastName', 'ASC')
            ->get();

           
            $InstructorList = tbl_userclass::where('tbl_userclasses.course_id', $id)
            ->select('users.firstName','users.lastName', 'tbl_user_details.profile_pic' )
            ->leftJoin('users', 'tbl_userclasses.user_id', '=', 'users.id', )
            ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id', )
            ->where('users.role', 'Teacher')
            ->where('tbl_userclasses.class_id', $Class->class_id)
            ->orderBy('users.lastName', 'ASC')
            ->get();

            

        }

        return ["StudentList"=>$StudentList , "InstructorList"=>$InstructorList];
        
    }

    public function getStudentListbyClass($class_id) {
        $StudentList = DB::table('tbl_userclasses')
        ->select('tbl_userclasses.id as uc_id','users.id','users.firstName','users.email','users.lastName','users.role' )
        ->leftJoin('users', 'tbl_userclasses.user_id', '=', 'users.id', )
        ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id', )
        ->where('tbl_userclasses.class_id', $class_id)
        ->where('role', 'Student')
        ->orderBy('users.lastName', 'ASC')
        ->get();
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
        if($request->type == 'Objective Type'){
            $Check = tbl_Submission::where('classwork_id', $request->id)
            ->where('user_id',  $userId)->first();
            if($Check){
                $Check->status = "Taking";
                $Check->save();
                return;
            }
            $StatusUpdate = new tbl_Submission;
            $StatusUpdate->classwork_id = $request->id;
            $StatusUpdate->class_classwork_id = $request->class_classwork_id;
            
            $StatusUpdate->user_id =  $userId;
            $StatusUpdate->status = "Taking";
            $StatusUpdate->save();
            return;
        }
        elseif($request->type == 'Subjective Type'){
            
           if($request->Submission_id == 'empty'){
            
                $StatusUpdate = new tbl_Submission;
                $StatusUpdate->classwork_id = $request->id;
                $StatusUpdate->class_classwork_id = $request->class_classwork_id;
                $StatusUpdate->user_id =  $userId;
                $StatusUpdate->status = "Submitting";
                $file = $request->file('file');
                if($file != ""){
                    $newFile = $file->store('public/upload/classworkSubmission/'.$userId);
                    $tempAnswer[] = ["link"=> preg_replace('/\bpublic\/\b/', '', $newFile) , 
                    "name"=> $request->fileName,"fileSize"=> $request->fileSize,"fileExte"=> $request->fileExte];
                    $StatusUpdate->Submitted_Answers = serialize($tempAnswer);
                }
                $StatusUpdate->save();
                return $StatusUpdate->id;
           }
           else{
            
            $StatusUpdate = tbl_Submission::find($request->Submission_id);
            $TempOldAttach = $StatusUpdate->Submitted_Answers = unserialize($StatusUpdate->Submitted_Answers);
            $file = $request->file('file');
            if($file != ""){
                $newFile = $file->store('public/upload/classworkSubmission/'.$userId);
                $tempAnswer = ["link"=> preg_replace('/\bpublic\/\b/', '', $newFile) , 
                "name"=> $request->fileName,"fileSize"=> $request->fileSize,"fileExte"=> $request->fileExte];
                array_push($TempOldAttach, $tempAnswer);
                $StatusUpdate->Submitted_Answers = serialize($TempOldAttach);
                $StatusUpdate->save();
            }
            return unserialize($StatusUpdate->Submitted_Answers);
           }
           
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function SubmitClassworkSubj($id)
    {

        $userId = auth('sanctum')->id();
        $SubmitSubj = tbl_Submission::find($id);
        if($SubmitSubj){
            $SubmitSubj->status = "Submitted";
            $SubmitSubj->save();
        }
        return $SubmitSubj;
    }


    


   
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function checkSubmissionStatus($id)
    {

        $userId = auth('sanctum')->id();
        $UserFullName = auth('sanctum')->user()->firstName.' '.auth('sanctum')->user()->lastName;
        $CheckStatus = tbl_Submission::where('tbl_submissions.classwork_id', $id)
        ->select('tbl_submissions.status','tbl_submissions.points as score','tbl_class_classworks.id as class_classwork_id'
        ,'tbl_class_classworks.showAnswer','tbl_class_classworks.showAnswerType','tbl_class_classworks.showDateFrom','tbl_class_classworks.showDateTo','tbl_class_classworks.response_late',

        'tbl_classworks.title','tbl_classworks.points as totalPoints','tbl_classworks.id as cl_id','tbl_classworks.course_id'
        ,'tbl_submissions.Submitted_Answers','tbl_submissions.updated_at')
        ->leftJoin('tbl_classworks', 'tbl_classworks.id','=','tbl_submissions.classwork_id')
        ->leftJoin('tbl_class_classworks', 'tbl_class_classworks.id','=','tbl_submissions.class_classwork_id')
        ->where('tbl_submissions.user_id',  $userId)
        ->first();
        if($CheckStatus){
            $ClassId = tbl_userclass::where('course_id',$CheckStatus->course_id)
            ->select('class_id')
            ->where('user_id', $userId)
            ->first();
            $CheckStatus->name =  $UserFullName;
            $CheckStatus->class_id =  $ClassId->class_id;
            $CheckStatus->id = $userId;
            if($CheckStatus){
                $TempAnswer = unserialize($CheckStatus->Submitted_Answers);
                $CheckStatus->Submitted_Answers = $TempAnswer;
            }
        }
       
        return $CheckStatus;

    }

     /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function CheckStatus($id)
    {
       
        $userId = auth('sanctum')->id();
        $CheckStatus = tbl_Submission::where("tbl_submissions.user_id",$userId)
        ->where('tbl_submissions.classwork_id',$id)
        ->select('tbl_submissions.status')
        ->first();
        if($CheckStatus){
            return response()->json([
                'user_id'=> $userId, 
                'status' => $CheckStatus->status
            ]);
        }
        else{
            return response()->json([
                'user_id'=> $userId, 
                'status' => null
            ]);  
        }
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
        $Class = Tbl_class::where('class_code', $id)->first();
        
        if(!$Class){
            return response()->json("Class doest exist",203);
        }
        else{
            $Check = tbl_userclass::withTrashed()
            ->where('course_id','=', $Class->course_id)
            ->where('user_id','=',$userId)
            ->first();
           
            if($Check){
                if($Check->deleted_at == null){
                    return response()->json([
                    'course_id'=>$Check->course_id, 
                    'status'=>1, 
                    'message'=>"You already join to this class"],202);
                }
                else{
                    $Check->restore();
                    return response()->json([
                    'course_id'=>$Check->course_id, 
                    'status'=>1, 
                    'message'=>"Class Restored"],200);
                }
                
            }
            
        }
           
        $JoinClass = new tbl_userclass;
        $JoinClass->class_id = $Class->id;
        $JoinClass->user_id = $userId;
        $JoinClass->course_id = $Class->course_id;
        $JoinClass->save();




        $userInClass = DB::table('tbl_userclasses')
        ->select('tbl_userclasses.id','tbl_userclasses.user_id', 'tbl_classes.class_name', 'users.role','tbl_subject_courses.course_name','tbl_subject_courses.id as course_id','tbl_subject_courses.completed as status')
        ->leftJoin('tbl_classes', 'tbl_classes.id', '=', 'tbl_userclasses.class_id')
        ->leftJoin('tbl_subject_courses', 'tbl_userclasses.course_id', '=', 'tbl_subject_courses.id')
        ->leftJoin('users', 'users.id', '=', 'tbl_userclasses.user_id')
        ->where('users.role', 'Teacher')
        ->where('tbl_userclasses.class_id', $JoinClass->class_id)
        ->first();

       /*  $newNotification = new tbl_notification;
        $newNotification->userid_from = $userId;
        $newNotification->userid_to = $userInClass[0]->user_id;
        $newNotification->class_id = $JoinClass->class_id;
        $newNotification->message = "Join to your ".$userInClass[0]->course_name." - " .$userInClass[0]->class_name ." class";
        $newNotification->notification_type = 1;
        $newNotification->status = 0;
        $newNotification->save(); */

        $newNotification = new tbl_notification;
        $newNotification->course_id = $userInClass->course_id;
        $newNotification->class_id = $JoinClass->class_id;
        $newNotification->from_id =  $userId;
        $newNotification->message = "Join to your ".$userInClass->course_name." - " .$userInClass->class_name ." class";
        $newNotification->notification_type = 2;
        $newNotification->save();
        broadcast(new NewNotification($newNotification))->toOthers();
        return response()->json([
            'course_id'=>$userInClass->course_id, 
            'status'=>$userInClass->status, 
            'message'=>"Join class success"],200);
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
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function removeFromClass($class_id, $user_id)
    {
        //return $class_id;
        $userClass = tbl_userclass::where('class_id', $class_id)
        ->where('user_id', $user_id)->first();

        if($userClass){
            $userClass->delete();
            return "Deleted";

        }
        return "Student Not found";
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
