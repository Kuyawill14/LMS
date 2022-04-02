<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use App\Models\tbl_userclass;
use App\Models\User;
use App\Models\Tbl_class;
use App\Models\tbl_notification;
use App\Models\UserNotification;
use App\Models\tbl_Submission;
use App\Events\NewNotification;
use App\Events\JoinRequest;
use App\Models\tbl_teacher_course;
use App\Models\tbl_subject_course;
use App\Models\tbl_classwork;
use App\Models\tbl_classClassworks;
use App\Models\tbl_userDetails;
use App\Models\tbl_Submitted_Answer;
use App\Models\tbl_join_request;
use Carbon\Carbon;
use App\Mail\SendSubmittedWorkMail;
use App\Mail\SendRequestJoinMail;
use Notification;
use App\Notifications\SendPushNotification;


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
    public function getStudentList($id, $class_id)
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
        ->where('tbl_classes.id' , $class_id)
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
                
            $StatusUpdate = tbl_Submission::find($request->Submission_id);
            if($StatusUpdate){
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
                
                return response()->json([
                    "id" => $StatusUpdate->id,
                    "link" => $path
                ]);

            }
            else{
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
        
        $StatusUpdate = tbl_Submission::find($request->Submission_id);

        if($StatusUpdate){
            $TempOldAttach = $StatusUpdate->Submitted_Answers = $StatusUpdate->Submitted_Answers != null ? unserialize($StatusUpdate->Submitted_Answers) : [];
            $tempAnswer = ["link"=> $request->file , 
            "name"=> $request->fileName,"fileSize"=> $request->fileSize,"fileExte"=> $request->fileExte];
            array_push($TempOldAttach, $tempAnswer);
            $StatusUpdate->Submitted_Answers = serialize($TempOldAttach);
            $StatusUpdate->save();
            return $StatusUpdate->id;
        }
        else{
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
       
       //}
    }

     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function AddGoogleDriveLink(Request $request){

        //return $request->attachment[0];
    
        $userId = auth('sanctum')->id();
        
        $StatusUpdate = tbl_Submission::find($request->Submission_id);
        if($StatusUpdate){
            $TempOldAttach = $StatusUpdate->Submitted_Answers = $StatusUpdate->Submitted_Answers != null ? unserialize($StatusUpdate->Submitted_Answers) : [];
            foreach($request->attachment as $item){
                $tempAnswer = ["link"=> $item['url'] , 
                "name"=> $item['name'], "fileSize"=> $request['sizeBytes'],"fileExte"=> 'link',"icon"=> $item['iconUrl']];
                array_push($TempOldAttach, $tempAnswer);
            }
            $StatusUpdate->Submitted_Answers = serialize($TempOldAttach);
            $StatusUpdate->save();
            return $StatusUpdate->id;
        }
        else{
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

    public function UpdateSubmittedAnswer(Request $request, $id){
        $Classwork = tbl_Submission::find($id);
        if($Classwork){
            $Classwork->Submitted_Answers = serialize($request->answers);
            $Classwork->save();
            return 'Submission Updated';
        }

        return 'Classwork not found!';
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
            $Classwork->graded = false;
            $Classwork->points = 0;
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
            $SubmitSubj->allow_resubmit = false;
            $SubmitSubj->submitted_at = date('Y-m-d H:i:s');
            $SubmitSubj->save();

       $courseAndClassId = tbl_classClassworks::where('tbl_class_classworks.classwork_id', $SubmitSubj->classwork_id)
       ->select('tbl_classes.id', 'tbl_classes.course_id')
       ->leftJoin('tbl_classes','tbl_classes.id','=','tbl_class_classworks.class_id')
       ->first();

       

     
    
        $submissionCount = tbl_Submission::where('classwork_id', $SubmitSubj->classwork_id)->count();
        $submissionCount =  $submissionCount -1;
        $user = tbl_userDetails::where('user_id', $userId)->select('firstName', 'lastName')->first();

        $CheckNotif = tbl_notification::where('notification_attachments', $SubmitSubj->classwork_id)->where('notification_type', 'classwork_submission')->first();
        $classwork_details = tbl_classwork::find($SubmitSubj->classwork_id);
    
        if($CheckNotif){
            $CheckNotifIfRead = UserNotification::where('notification_id', $CheckNotif->id)->first();
            
            if($CheckNotifIfRead){
                $CheckNotifIfRead->delete();
            }

            if($submissionCount <= 2){
                $CheckNotif->message = $user->firstName." ".$user->lastName." Submit in your ".$classwork_details->title." classwork";
            }   
            else{
                $submissionCount = $submissionCount - 1;
                $CheckNotif->message = $user->firstName." ".$user->lastName." and ".$submissionCount." others Submit in your ".$classwork_details->title." classwork";
            }
            $CheckNotif->from_id =  $userId;
            $CheckNotif->updated_at =  date('Y-m-d H:i:s');
            $CheckNotif->save();
            broadcast(new NewNotification($CheckNotif))->toOthers();

        }
        else{
            $newNotification = new tbl_notification;
            $newNotification->course_id = $courseAndClassId->course_id;
            $newNotification->class_id = $courseAndClassId->id;
            $newNotification->from_id =  $userId;
            if($submissionCount <= 2){
                $newNotification->message = $user->firstName." ".$user->lastName." Submit in your ".$classwork_details->title." classwork";
            }   
            else{
                $submissionCount = $submissionCount - 1;
                $newNotification->message = $user->firstName." ".$user->lastName." and ".$submissionCount." others Submit in your ".$classwork_details->title." classwork";
            }
            $newNotification->notification_type = 'classwork_submission';
            $newNotification->notification_attachments = $SubmitSubj->classwork_id;
            $newNotification->save();
            broadcast(new NewNotification($newNotification))->toOthers();

            $mailDetails = tbl_Submission::where('tbl_submissions.id',$id)
            ->select('users.email','users.device_key','tbl_classworks.title','tbl_classworks.course_id', 'tbl_classworks.id')
            ->leftJoin('tbl_classworks','tbl_classworks.id','=', 'tbl_submissions.classwork_id')
            ->leftJoin('users','users.id','=', 'tbl_classworks.user_id')
            ->first();

            $userDetails  = auth('sanctum')->user()->tbl_userDetails;
            $name = $userDetails->firstName.' '.$userDetails->lastName;
            $date_submitted = \Carbon\Carbon::parse($SubmitSubj->updated_at)->format('F d, Y h:i a');
            $url = "/classwork"."/".$mailDetails->course_id."/submission-list?clwk=".$mailDetails->id;
            $profile = $userDetails->profile_pic == null ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' : $userDetails->profile_pic;
            Mail::to($mailDetails->email)->send(new SendSubmittedWorkMail($name, $profile, $mailDetails->title, $date_submitted, $url));
            if($mailDetails->device_key)Notification::send(null,new SendPushNotification('ISUE-ORANGE',$newNotification->message,$mailDetails->device_key));           
        }

    
            return $SubmitSubj;
        }

    
       
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
            return $CheckStatus;
        }
        return $CheckStatus;
       
     

    }

     /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function CheckStatus($id, $course_id)
    {
       
        $userId = auth('sanctum')->id();
        $checkCourse = tbl_userclass::where('tbl_userclasses.course_id', $course_id)
        ->where('tbl_userclasses.user_id',$userId)->first();
        
        if(!$checkCourse){
            return response()->json([
                'message'=>'You dont have permission to access this examination!',
                'success'=>false
            ]);
        }

        $checkClasswork = tbl_classwork::where('tbl_classworks.id', $id)
        ->where('tbl_classworks.course_id',$course_id)->first();
        if(!$checkClasswork){
            return response()->json([
                'message'=>'You dont have permission to access this examination!',
                'success'=>false
            ]);
        }

        $CheckStatus = tbl_Submission::where("tbl_submissions.user_id", $userId)
        ->where('tbl_submissions.classwork_id',$id)
        ->select('tbl_submissions.id','tbl_submissions.classwork_id','tbl_submissions.status','tbl_submissions.Submitted_Answers','tbl_submissions.created_at',
        'tbl_submissions.allow_resubmit','tbl_submissions.current_question')
        ->first();

        $dateToday = date('Y-m-d H:i:s');
        if($CheckStatus){
            $checkClasswork = tbl_classwork::find($CheckStatus->classwork_id);
            //if($checkClasswork->isNew == null){
                $tempAnswer = $CheckStatus->Submitted_Answers != null ? unserialize($CheckStatus->Submitted_Answers) : null;

                if($CheckStatus->allow_resubmit == 1 && ($CheckStatus->status == null || $CheckStatus->status == '')){
                    $CheckStatus->created_at  = $dateToday;
                    $CheckStatus->status = "Taking";
                    $CheckStatus->save();
                }else{
                    if($CheckStatus->created_at == null || $CheckStatus->created_at == ''){
                        $CheckStatus->created_at  = $dateToday;
                        $CheckStatus->save();
                    }
                }
               
                
                return response()->json([
                    'submission_id'=> $CheckStatus->id, 
                    'status' => $CheckStatus->status,
                    'currentTime' =>  (Carbon::now('Asia/Manila')->timestamp * 1000),
                    'testDate' =>  Carbon::now('Asia/Manila')->toDateTimeString(),
                    'startTime' => (Carbon::parse($CheckStatus->created_at)->timestamp * 1000),
                    'Submitted_Answers'=>$tempAnswer,
                    'current_question' =>  $CheckStatus->current_question,
                    'title'=> $checkClasswork ->title,
                    'duration'=> $checkClasswork ->duration,
                    'points'=> $checkClasswork ->points,
                    'success'=>true
                ]);
        }
        else{
            /* $class = tbl_userclass::where('user_id', $userId)->get();
            $class_classwork_id;
            foreach($class as $item){
                $check = tbl_classClassworks::where('class_id', $item->class_id)
                ->where('classwork_id', $id)->first();
                if($check){
                    $class_classwork_id =  $check->id;
                    goto targetLocation;
                }
            } */

            
            $check = tbl_classClassworks::where('class_id', $checkCourse->class_id)->where('classwork_id', $id)->first();

            //targetLocation:
            $NewSubmission = new tbl_Submission;
            $NewSubmission->classwork_id = $id;
            $NewSubmission->class_classwork_id = $check->id;
            $NewSubmission->user_id =  $userId;
            $NewSubmission->status = "Taking";
            $NewSubmission->save();

            return response()->json([
                'submission_id'=> $NewSubmission->id, 
                'status' => 'Taking',
                'currentTime' =>  (Carbon::now('Asia/Manila')->timestamp * 1000),
                'startTime' =>  Carbon::parse($NewSubmission->created_at)->timestamp * 1000,
                'Submitted_Answers'=> null,
                'current_question' =>  0,
                'title'=> $checkClasswork ->title,
                'duration'=> $checkClasswork ->duration,
                'points'=> $checkClasswork ->points,
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

    public function NotifyTeacher($class_id, $type, $userId, $course_id){
        $userInClass = tbl_userclass::select('tbl_userclasses.id','tbl_userclasses.user_id', 'tbl_classes.class_name', 
        'users.role','users.device_key','tbl_subject_courses.course_name','tbl_subject_courses.id as course_id','tbl_subject_courses.completed as status')
        ->leftJoin('tbl_classes', 'tbl_classes.id', '=', 'tbl_userclasses.class_id')
        ->leftJoin('tbl_subject_courses', 'tbl_userclasses.course_id', '=', 'tbl_subject_courses.id')
        ->leftJoin('users', 'users.id', '=', 'tbl_userclasses.user_id')
        ->where('users.role', 'Teacher')
        ->where('tbl_userclasses.class_id', $class_id)
        ->first();

        $userCount;
        if($type == 'joined'){
            $userCount = tbl_userclass::whereNull('deleted_at')
            ->leftJoin('users', 'users.id', '=', 'tbl_userclasses.user_id')
            ->orderBy('tbl_userclasses.id', 'DESC')
            ->where('users.role', 'Student')
            ->where('tbl_userclasses.class_id', $class_id)
            ->count();
        }
        else{
            $userCount = tbl_join_request::where('course_id', $course_id)->count();
        }
       

        $CheckNotif = tbl_notification::where('course_id', $userInClass->course_id)
        ->where('class_id', $class_id)->where('notification_type', 'class_joined')
        ->first();

        $userName = auth('sanctum')->user()->tbl_userDetails->firstName.' '.auth('sanctum')->user()->tbl_userDetails->lastName;
        $notif_message;
    
        if($CheckNotif){
            $CheckNotifIfRead = UserNotification::where('notification_id', $CheckNotif->id)->first();

            if($CheckNotifIfRead){
                $CheckNotifIfRead->delete();
            }

            if($userCount <= 2){
                if($type == 'joined'){
                    $CheckNotif->message = $userName." join to your ".$userInClass->course_name." - " .$userInClass->class_name ." class";
                }
                else if($type == 'request'){
                    $CheckNotif->message = $userName." ask to join your ".$userInClass->course_name." - " .$userInClass->class_name ." class";
                }
                
            }   
            else{
                $userCount = $userCount - 1;
                
                if($type == 'joined'){
                    $CheckNotif->message = $userName." and ".$userCount." others join to your ".$userInClass->course_name." - " .$userInClass->class_name ." class";
                }
                else if($type == 'request'){
                    $CheckNotif->message = $userName." and ".$userCount." others ask to join to your ".$userInClass->course_name." - " .$userInClass->class_name ." class";
                }
            }
            $CheckNotif->from_id =  $userId;
            $CheckNotif->updated_at =  date('Y-m-d H:i:s');
            $CheckNotif->save();
            $notif_message = $CheckNotif->message;
            broadcast(new NewNotification($CheckNotif))->toOthers();

        }
        else{
            $newNotification = new tbl_notification;
            $newNotification->course_id = $userInClass->course_id;
            $newNotification->class_id = $class_id;
            $newNotification->from_id =  $userId;

            if($userCount <= 2){
                if($type == 'joined'){
                    $newNotification->message = $userName." join to your ".$userInClass->course_name." - " .$userInClass->class_name ." class";
                }
                else if($type == 'request'){
                    $newNotification->message = $userName." ask to join your ".$userInClass->course_name." - " .$userInClass->class_name ." class";
                }
            }   
            else{
                $userCount = $userCount - 1;
                if($type == 'joined'){
                    $newNotification->message = $userName." and ".$userCount." others join to your ".$userInClass->course_name." - " .$userInClass->class_name ." class";
                }
                else if($type == 'request'){
                    $newNotification->message = $userName." and ".$userCount." others ask to join to your ".$userInClass->course_name." - " .$userInClass->class_name ." class";
                }
                
            }
            $newNotification->notification_type = 'class_joined';
     
            $newNotification->save();
            $notif_message = $newNotification->message;
            broadcast(new NewNotification($newNotification))->toOthers();
           
        }

        if($userInClass->device_key)Notification::send(null,new SendPushNotification('ISUE-ORANGE',$notif_message, $userInClass->device_key));
        return $userInClass->status;
        
        
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
            return response()->json("Class doesn't exist",203);
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
        
        if(!$Class->is_auto_accept){
            
            $Checkrequest = tbl_join_request::where('user_id', $userId)
            ->where('class_id',$Class->id )->where('course_id',$Class->course_id)
            ->first();

            if($Checkrequest){
                return response()->json([
                'course_id'=>$Checkrequest->course_id, 
                'status'=> 3, 
                'message'=>"Please wait for your instructor to accept your join request!"],200);
            }
            else{
                $new_request = new tbl_join_request;
                $new_request->user_id = $userId;
                $new_request->course_id = $Class->course_id;
                $new_request->class_id = $Class->id;
                $new_request->save();

                $this->NotifyTeacher($Class->id, 'request', $userId, $Class->course_id);

                $mailDetails = tbl_teacher_course::where('tbl_teacher_courses.course_id', $Class->course_id)
                ->select('users.email', 'tbl_subject_courses.course_name','tbl_subject_courses.id')
                ->leftJoin('users', 'users.id','=', 'tbl_teacher_courses.user_id')
                ->leftJoin('tbl_subject_courses', 'tbl_subject_courses.id','=', 'tbl_teacher_courses.course_id')
                ->first();

                $userDetails  = auth('sanctum')->user()->tbl_userDetails;
                $name = $userDetails->firstName.' '.$userDetails->lastName;
                $url = "/course"."/".$mailDetails->id."/people";
                $profile = $userDetails->profile_pic == null ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' : $userDetails->profile_pic;
                Mail::to($mailDetails->email)->send(new SendRequestJoinMail($name, $profile, $mailDetails->course_name, $Class->class_name , $url));

                
                return response()->json([
                'course_id'=>$new_request->course_id, 
                'status'=> 2, 
                'message'=>"Please wait for your instructor to accept you in the class!"],200);



            }
        }
           
        $JoinClass = new tbl_userclass;
        $JoinClass->class_id = $Class->id;
        $JoinClass->user_id = $userId;
        $JoinClass->course_id = $Class->course_id;
        $JoinClass->save();


        
        $course_status = $this->NotifyTeacher($Class->id, 'joined', $userId, $Class->course_id);

        return response()->json([
            'course_id'=>$Class->course_id, 
            'status'=>$course_status, 
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

    


}
