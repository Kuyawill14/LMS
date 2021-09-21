<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Models\tbl_userclass;
use App\Models\User;
use App\Models\Tbl_class;
use App\Models\tbl_notification;
use App\Models\UserNotification;
use App\Models\tbl_Submission;
use App\Events\NewNotification;
use App\Models\tbl_teacher_course;
use App\Models\tbl_classClassworks;
use App\Models\tbl_userDetails;



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
        ->select('tbl_userclasses.class_id as class_id','tbl_classes.class_name', 'tbl_user_details.student_id'
        ,'users.id as user_id','tbl_user_details.firstName','tbl_user_details.middleName','users.email','tbl_user_details.lastName','users.role','tbl_user_details.profile_pic' )
        ->leftJoin('tbl_classes', 'tbl_classes.id', '=', 'tbl_userclasses.class_id', )
        ->leftJoin('users', 'tbl_userclasses.user_id', '=', 'users.id', )
        ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id',)
        ->where('tbl_userclasses.course_id', $id)
        ->where('users.role', 'Student')
        ->orderBy('tbl_user_details.lastName', 'ASC')
        ->where('tbl_userclasses.deleted_at', null)
        ->get();


        $InstructorList = tbl_teacher_course::where('tbl_teacher_courses.course_id', $id)
        ->select('tbl_teacher_courses.course_id','users.id as user_id','tbl_user_details.firstName','tbl_user_details.middleName','users.email','tbl_user_details.lastName','tbl_user_details.profile_pic' )
        ->leftJoin('users', 'tbl_teacher_courses.user_id', '=', 'users.id', )
        ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id',)
        ->where('users.role', 'Teacher')
        ->orderBy('tbl_user_details.lastName', 'ASC')
        ->get();

        

        } 
        else if (auth('sanctum')->user()->role == 'Student') { 
            

            $Class = tbl_userclass::where('tbl_userclasses.course_id', $id)
            ->select('tbl_userclasses.class_id')
            ->where('tbl_userclasses.user_id', $userId)
            ->first();


            $StudentList = tbl_userclass::where('tbl_userclasses.class_id', $Class->class_id)
            ->select('tbl_user_details.firstName','tbl_user_details.middleName','tbl_user_details.lastName','tbl_user_details.profile_pic' ,'tbl_user_details.student_id')
            ->leftJoin('users', 'tbl_userclasses.user_id', '=', 'users.id', )
            ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id', )
            ->where('users.role', 'Student')
            ->orderBy('tbl_user_details.lastName', 'ASC')
            ->get();

           
            $InstructorList = tbl_userclass::where('tbl_userclasses.course_id', $id)
            ->select('tbl_user_details.firstName','tbl_user_details.middleName','tbl_user_details.lastName', 'tbl_user_details.profile_pic' )
            ->leftJoin('users', 'tbl_userclasses.user_id', '=', 'users.id', )
            ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id', )
            ->where('users.role', 'Teacher')
            ->where('tbl_userclasses.class_id', $Class->class_id)
            ->orderBy('tbl_user_details.lastName', 'ASC')
            ->get();

            

        }

        return ["StudentList"=>$StudentList , "InstructorList"=>$InstructorList];
        
    }

    public function getStudentListbyClass($class_id) {
        $StudentList = DB::table('tbl_userclasses')
        ->select('tbl_userclasses.id as uc_id','users.id','tbl_user_details.firstName','tbl_user_details.middleName','users.email','tbl_user_details.lastName','users.role','tbl_user_details.student_id' )
        ->leftJoin('users', 'tbl_userclasses.user_id', '=', 'users.id')
        ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id', )
        ->where('tbl_userclasses.class_id', $class_id)
        ->where('role', 'Student')
        ->where('tbl_userclasses.deleted_at', null)
        ->orderBy('tbl_user_details.lastName', 'ASC')
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
                if($Check->status == "Taking"){
                    $Check->status = "Taking";
                }
                else if($Check->status == null){
                    $Check->status = "Taking";
                    $Check->created_at = date('Y-m-d H:i:s');
                    $Check->updated_at = date('Y-m-d H:i:s');
                }
                $Check->save();
                return response()->json([
                    "success"=> true, 
                    "Exam_status"=>$Check->status, 
                ]);
            }
            $StatusUpdate = new tbl_Submission;
            $StatusUpdate->classwork_id = $request->id;
            $StatusUpdate->class_classwork_id = $request->class_classwork_id;
            
            $StatusUpdate->user_id =  $userId;
            $StatusUpdate->status = "Taking";
            $StatusUpdate->save();
            return response()->json([
                "success"=> true, 
                "Exam_status"=> $StatusUpdate->status, 
            ]);
        }
        elseif($request->type == 'Subjective Type'){
            
           if($request->Submission_id == 'empty'){
            
                $StatusUpdate = new tbl_Submission;
                $StatusUpdate->classwork_id = $request->id;
                $StatusUpdate->class_classwork_id = $request->class_classwork_id;
                $StatusUpdate->user_id =  $userId;
                $StatusUpdate->status = "Submitting";
                $file = $request->file('file');
                if($file){
                    //$newFile = $file->store('public/upload/classworkSubmission/'.$request->class_classwork_id.'/'.$userId);

                    $original_file_name = preg_replace('/\\.[^.\\s]{3,4}$/', '', $request->fileName);
                    $Uploadname = $original_file_name.'_'.time().'.'.$request->fileExte;
                    $upload_file = Storage::disk('DO_spaces')->putFileAs('classworkSubmission/'.$request->class_classwork_id.'/'.$userId, $file, $Uploadname , 'public');
                    $path = \Config::get('app.do_url').'/'. $upload_file;
                    $tempAnswer[] = ["link"=> $path, 
                    "name"=> $request->fileName,"fileSize"=> $request->fileSize,"fileExte"=> $request->fileExte];
                    $StatusUpdate->Submitted_Answers = serialize($tempAnswer);
                }
                $StatusUpdate->save();
                return response()->json([
                    "id" => $StatusUpdate->id,
                    "link" => $path
                ]);
           }
           else{
                
            $StatusUpdate = tbl_Submission::find($request->Submission_id);
            $TempOldAttach = $StatusUpdate->Submitted_Answers = unserialize($StatusUpdate->Submitted_Answers);
            $file = $request->file('file');
            if($file){
                //$newFile = $file->store('public/upload/classworkSubmission/'.$userId);

                $original_file_name = preg_replace('/\\.[^.\\s]{3,4}$/', '', $request->fileName);
                $Uploadname = $original_file_name.'_'.time().'.'.$request->fileExte;
                $upload_file = Storage::disk('DO_spaces')->putFileAs('classworkSubmission/'.$request->class_classwork_id.'/'.$userId, $file,  $Uploadname , 'public');
                $path = \Config::get('app.do_url').'/'. $upload_file;
                $tempAnswer = ["link"=> $path, 
                "name"=> $request->fileName,"fileSize"=> $request->fileSize,"fileExte"=> $request->fileExte];
                array_push($TempOldAttach, $tempAnswer);
                $StatusUpdate->Submitted_Answers = serialize($TempOldAttach);
                $StatusUpdate->save();
            }
            //return unserialize($StatusUpdate->Submitted_Answers);
            return response()->json([
                "id" => $StatusUpdate->id,
                "link" => $path
            ]);
           }
           
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function AddLinkToSubmittedAnswer(Request $request){
        $userId = auth('sanctum')->id();
        if($request->Submission_id == 'empty'){
            
            $StatusUpdate = new tbl_Submission;
            $StatusUpdate->classwork_id = $request->id;
            $StatusUpdate->class_classwork_id = $request->class_classwork_id;
            $StatusUpdate->user_id =  $userId;
            $StatusUpdate->status = "Submitting";
            $tempAnswer[] = ["link"=> $request->file, 
            "name"=> $request->fileName,"fileSize"=> $request->fileSize,"fileExte"=> $request->fileExte];
            $StatusUpdate->Submitted_Answers = serialize($tempAnswer);
            $StatusUpdate->save();
            return $StatusUpdate->id;
       }
       else{
        
        $StatusUpdate = tbl_Submission::find($request->Submission_id);
        $TempOldAttach = $StatusUpdate->Submitted_Answers = unserialize($StatusUpdate->Submitted_Answers);
        $tempAnswer = ["link"=> $request->file , 
        "name"=> $request->fileName,"fileSize"=> $request->fileSize,"fileExte"=> $request->fileExte];
        array_push($TempOldAttach, $tempAnswer);
        $StatusUpdate->Submitted_Answers = serialize($TempOldAttach);
        $StatusUpdate->save();
        return $StatusUpdate->id;
       }
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function AddFileToSubmittedAnswer(Request $request){
        //return $request->file;

        $userId = auth('sanctum')->id();
        $Classwork = tbl_Submission::where('classwork_id', $request->id)->where('user_id',  $userId)->first();
        $file = $request->file;
        if($Classwork){

            $TempOldAttach = $Classwork->Submitted_Answers = unserialize($Classwork->Submitted_Answers);

            $original_file_name = preg_replace('/\\.[^.\\s]{3,4}$/', '', $request->name);
            $Uploadname = $original_file_name.'_'.time().'.'.$request->extension;
            $upload_file = Storage::disk('DO_spaces')->putFileAs('classworkSubmission/'.$request->class_classwork_id.'/'.$userId, $file, $Uploadname , 'public');
            $path = \Config::get('app.do_url').'/'. $upload_file;
            $tempAnswer = ["link"=> $path, 
            "name"=> $request->name,"fileSize"=> $request->size,"fileExte"=> $request->extension];
            array_push($TempOldAttach, $tempAnswer);
            $Classwork->Submitted_Answers = serialize($TempOldAttach);
            $Classwork->save();
            return $path;
        }
        else{
            $newSubmission = new tbl_Submission;
            $newSubmission->classwork_id = $request->id;
            $newSubmission->class_classwork_id = $request->class_classwork_id;
            $newSubmission->user_id =  $userId;
            $newSubmission->status = "Submitting";
            $file = $request->file;
            if($file != ""){
                $original_file_name = preg_replace('/\\.[^.\\s]{3,4}$/', '', $request->name);
                $Uploadname = $original_file_name.'_'.time().'.'.$request->extension;
                $upload_file = Storage::disk('DO_spaces')->putFileAs('classworkSubmission/'.$request->class_classwork_id.'/'.$userId, $file,  $Uploadname , 'public');
                $path = \Config::get('app.do_url').'/'. $upload_file;
                $tempAnswer[] = ["link"=> $path, 
                "name"=> $request->name,"fileSize"=> $request->size,"fileExte"=> $request->extension];
                $newSubmission->Submitted_Answers = serialize($tempAnswer);
            }
            $newSubmission->save();

            $newSubmission->Submitted_Answers = uanserialize($newSubmission->Submitted_Answers);
            return $newSubmission;
        }
       
        

    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function markAsSubmitting(Request $request, $id){
        //return $request->file;
        $Classwork = tbl_Submission::find($id);
        if( $Classwork){
            $Classwork->status = 'Submitting';
            $Classwork->save();
        }
            
    }

    




    


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function SubmitClassworkSubj(Request $request, $id)
    {
        $userId = auth('sanctum')->id();
        $SubmitSubj = tbl_Submission::find($id);
        if($SubmitSubj){
            $SubmitSubj->status = "Submitted";
            $SubmitSubj->rubrics_score = $request->data != null ? serialize($request->data) : null;
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
        $name = tbl_userDetails::where('user_id',  $userId)->first();
        $UserFullName = $name->firstName.' '. $name ->lastName;

        $CheckStatus = tbl_Submission::where('tbl_submissions.classwork_id', $id)
        ->select('tbl_submissions.status','tbl_submissions.points as score','tbl_class_classworks.id as class_classwork_id'
        ,'tbl_class_classworks.showAnswer', 'tbl_class_classworks.reviewAnswer','tbl_class_classworks.showAnswerType','tbl_class_classworks.showDateFrom','tbl_class_classworks.showDateTo','tbl_class_classworks.response_late',

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

          if($CheckStatus->reviewAnswer == 1){
                $TempAnswer = unserialize($CheckStatus->Submitted_Answers);
                $CheckStatus->Submitted_Answers = $TempAnswer;
            }
            else{
                $CheckStatus->Submitted_Answers = null;
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

        $CheckStatus = tbl_Submission::where("tbl_submissions.user_id", $userId)
        ->where('tbl_submissions.classwork_id',$id)
        ->select('tbl_submissions.id','tbl_submissions.status','tbl_submissions.Submitted_Answers','tbl_submissions.created_at')
        ->first();

        if($CheckStatus){
            $tempAnswer = $CheckStatus->Submitted_Answers != null ? unserialize($CheckStatus->Submitted_Answers) : null;
            return response()->json([
                'submission_id'=> $CheckStatus->id, 
                'status' => $CheckStatus->status,
                'startTime' => $CheckStatus->created_at,
                'Submitted_Answers'=>$tempAnswer,
                'success'=>true
            ]);
        }
        else{
            $class = tbl_userclass::where('user_id', $userId)->get();
            $class_classwork_id;
            foreach($class as $item){
                $check = tbl_classClassworks::where('class_id', $item->class_id)
                ->where('classwork_id', $id)->first();
                if($check){
                    $class_classwork_id =  $check->id;
                    goto targetLocation;
                }
            }
            targetLocation:
            $NewSubmission = new tbl_Submission;
            $NewSubmission->classwork_id = $id;
            $NewSubmission->class_classwork_id = $class_classwork_id;
            $NewSubmission->user_id =  $userId;
            $NewSubmission->status = "Taking";
            $NewSubmission->save();

            return response()->json([
                'submission_id'=> $NewSubmission->id, 
                'status' => 'Taking',
                'startTime' =>  $NewSubmission->created_at,
                'Submitted_Answers'=> null,
                'success'=>true
            ]);  
        }
    }

     /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function FetchScoreDetails($id)
    {
       
        $userId = auth('sanctum')->id();
        $name = tbl_userDetails::where('user_id',  $userId)->first();
        $UserFullName = $name->firstName.' '. $name ->lastName;
        $CheckStatus = tbl_Submission::where('tbl_submissions.classwork_id', $id)
        ->select('tbl_submissions.status','tbl_submissions.points as score','tbl_class_classworks.id as class_classwork_id'
        ,'tbl_class_classworks.showAnswer', 'tbl_class_classworks.reviewAnswer','tbl_class_classworks.showAnswerType',

        'tbl_classworks.title','tbl_classworks.points as totalPoints','tbl_classworks.id as cl_id','tbl_classworks.course_id'
        ,'tbl_submissions.Submitted_Answers')
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
            if($CheckStatus->reviewAnswer == 1){
                $TempAnswer = unserialize($CheckStatus->Submitted_Answers);
                $CheckStatus->Submitted_Answers = $TempAnswer;
            }
            else{
                $CheckStatus->Submitted_Answers = null;
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
    public function JoinClass($id)
    {
        $userId = auth('sanctum')->id();
        $Class = Tbl_class::where('class_code', $id)->first();
        
        if(!$Class){
            return response()->json("Class doest exist",203);
        }
    
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
                if($Class->id ==  $Check->class_id){
                    $Check->restore();
                    return response()->json([
                        'course_id'=>$Check->course_id, 
                        'status'=>1, 
                        'message'=>"Class Restored"],200);
                }
                else{
                    $Check->restore();
                    $Check->class_id = $Class->id;
                    $Check->save();
                    return response()->json([
                        'course_id'=>$Check->course_id, 
                        'status'=>1, 
                        'message'=>"Join class success"],200);
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

        
        $userCount = DB::table('tbl_userclasses')->whereNull('deleted_at')
        ->leftJoin('users', 'users.id', '=', 'tbl_userclasses.user_id')
        ->where('users.role', 'Student')
        ->where('tbl_userclasses.class_id', $JoinClass->class_id)
        ->count();
        

        $CheckNotif = tbl_notification::where('course_id', $userInClass->course_id)
        ->where('class_id', $JoinClass->class_id)
        ->first();

        $user = tbl_userDetails::where('user_id', $userId)
        ->select('firstName', 'lastName')
        ->first();

        if($CheckNotif){
            $CheckNotifIfRead = UserNotification::where('notification_id', $CheckNotif->id)->first();

            if($CheckNotifIfRead){
                $CheckNotifIfRead->delete();
            }

            if($userCount <= 2){
                $CheckNotif->message = $user->firstName." ".$user->lastName." join to your ".$userInClass->course_name." - " .$userInClass->class_name ." class";
            }   
            else{
                $userCount = $userCount - 1;
                $CheckNotif->message = $user->firstName." ".$user->lastName." and ".$userCount." others join to your ".$userInClass->course_name." - " .$userInClass->class_name ." class";
            }
            $CheckNotif->from_id =  $userId;
            $CheckNotif->save();
            broadcast(new NewNotification($CheckNotif))->toOthers();

        }
        else{
            $newNotification = new tbl_notification;
            $newNotification->course_id = $userInClass->course_id;
            $newNotification->class_id = $JoinClass->class_id;
            $newNotification->from_id =  $userId;

            if($userCount <= 2){
                $newNotification->message = $user->firstName." ".$user->lastName." join to your ".$userInClass->course_name." - " .$userInClass->class_name ." class";
            }   
            else{
                $userCount = $userCount - 1;
                $newNotification->message = $user->firstName." ".$user->lastName." and ".$userCount." others join to your ".$userInClass->course_name." - " .$userInClass->class_name ." class";
            }
        /*     $newNotification->message = $userCount." Student join to your ".$userInClass->course_name." - " .$userInClass->class_name ." class"; */
            $newNotification->notification_type = 2;
            $newNotification->save();
            broadcast(new NewNotification($newNotification))->toOthers();
        }

        
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
