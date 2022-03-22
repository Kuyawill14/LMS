<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Models\tbl_Submission;
use App\Models\User;
use App\Models\tbl_notification;
use App\Models\UserNotification;
use App\Models\tbl_student_course_subject_grades;
use App\Models\tbl_subject_course;
use App\Models\tbl_userclass;
use App\Models\tbl_classwork;
use App\Models\tbl_classClassworks;
use App\Models\tbl_Submitted_Answer;
use App\Models\tbl_userDetails;
use App\Models\tbl_join_request;
use App\Models\tbl_comment;
use App\Models\tbl_student_exam_activity_log;
use App\Models\tbl_choice;


use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendInviteMail;
use App\Mail\AlertStudentMail;
use App\Jobs\ProcessEmails;
use Carbon\Carbon;
use App\Events\NewUserCLass;
use App\Jobs\DeleteUploadedFiles;
use App\Jobs\AlertSelectedStudents;
use App\Events\NewNotification;
use Notification;
use App\Notifications\SendPushNotification;



class TeacherController extends Controller
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

    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function InviteStudent(Request $request)
    {   
        $userId = auth('sanctum')->id();
        $name = tbl_userDetails::where('user_id',  $userId)->first();
        $UserFullName = $name->firstName.' '. $name->lastName;
        $FindUser = User::where('users.email', $request->email)
        ->first();

        if($FindUser){
            $course = tbl_subject_course::find($request->course_id);

            $JoinClass = new tbl_userclass;
            $JoinClass->class_id = $request->class_id;
            $JoinClass->user_id = $FindUser->id;
            $JoinClass->course_id = $request->course_id;
            $JoinClass->save();

            $newNotification = new tbl_notification;
            $newNotification->user_id_to = $FindUser->id;
            $newNotification->from_id =  $userId;
            $newNotification->from_course = $request->course_id;
            $newNotification->message = "Added you in ". $course->course_name." ".$request->class_name." class";
            $newNotification->notification_attachments = $request->course_id;
            $newNotification->notification_type = 'class_invite';
            $newNotification->save();
            broadcast(new NewNotification($newNotification))->toOthers();

            $notif_message = $UserFullName.' '.$newNotification->message;
            if($FindUser->device_key)Notification::send(null,new SendPushNotification('ISUE-ORANGE',$notif_message, $FindUser->device_key)); 
            return;
        }
        else{
           
            Mail::to($request->email)->send(new SendInviteMail($request->class_code, $UserFullName, $request->course_name, $request->class_name));
            return $request->email;
        }

    }


     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function InviteInstructor(Request $request)
    {
        //
    }


    
     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function MoveStudent(Request $request)
    {
        $StudentClass = tbl_userclass::where('user_id', $request->user_id)
        ->where('class_id', $request->old_class_id)
        ->where('course_id', $request->old_course_id)
        ->first();


        if($StudentClass){
            $StudentClass->class_id = $request->new_class_id;
            $StudentClass->course_id = $request->new_course_id;
            $StudentClass->save();
            return response()->json([
                "message" => "Student Successfully move!",
                "success" => true
            ]);
        }

        return response()->json([
            "message" => "Something went wrong while moving student!",
            "success" => false
        ]);
     
    }

       /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function AlertStudent(Request $request)
    {   

        $user = User::find($request->user_id);
        $course = tbl_subject_course::find($request->course_id);
        //return $request;
        //return $user->email;
        //Mail::to($user->email)->send(new AlertStudentMail($request->classwork_id, $request->classwork_name, $request->course_id, $course->course_name, $request->firstName));
        ProcessEmails::dispatch($user->email,$request->classwork_id, $request->classwork_name, $request->course_id, $course->course_name, $request->firstName)->delay(Carbon::now()->addSeconds(30));
        return response()->json([
            "message" => "Alert message has been send successfully.",
            "success" => true
        ]);
    }

       /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function AlertMultipleStudent(Request $request)
    {   
        //return $request;

        $course = tbl_subject_course::find($request->course_id);
        $userEmail = [];
        $userFirstName = [];
        foreach($request->data as $item){
            $user = User::find($item['id']);
            $userEmail[] = $user->email;
            $userFirstName[] = $item['firstName'];
            
        }
        //return $userFirstName;

        AlertSelectedStudents::dispatch($userEmail, $userFirstName, $request->course_id, $course->course_name, $request->classwork_id, $request->classwork_name);
        return response()->json([
            "message" => "Alert message has been send successfully.",
            "success" => true
        ]);

  
       
     
      /*   ProcessEmails::dispatch($user->email,$request->classwork_id, $request->classwork_name, $request->course_id, $course->course_name, $request->firstName)->delay(Carbon::now()->addSeconds(30));
        return response()->json([
            "message" => "Alert message has been send successfully.",
            "success" => true
        ]); */
    }

       /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function ResetStudentSubmission(Request $request)
    {   

 

        //return $request;
       
        if($request->type == 'Objective_Type'){
            foreach($request->data as $item){
                $ResetSubmission = tbl_Submission::find($item['id']);
                if($ResetSubmission){
                  $ResetSubmission->forceDelete(); 
                }
            }
        }
        else if($request->type == 'Subjective_Type'){
            $files = [];
            foreach($request->data as $item){
                $ResetSubmission = tbl_Submission::find($item['id']);
                if($ResetSubmission){
                    foreach(unserialize($ResetSubmission->Submitted_Answers) as $sub){
                        if($sub['fileExte'] != 'link'){
                            $path =  str_replace(\Config::get('app.do_url').'/', "", $sub['link']);
                            $files[] = $path;
                            //Storage::disk('DO_spaces')->delete($path);
                        }
                    }
                    $ResetSubmission->forceDelete();
                }
            }
            DeleteUploadedFiles::dispatch($files);
        }
        

        /* for ($i= 0; $i < count($request[0]); $i++) { 

            $ResetSubmission = tbl_Submission::find($request[0]['id']);
            if($ResetSubmission){
                $ResetSubmission->forceDelete();
                $ResetSubmission->status = null;
                $ResetSubmission->points = null;
                $ResetSubmission->Submitted_Answers = null;
                $ResetSubmission->created_at = null;
                $ResetSubmission->updated_at = null;
                $ResetSubmission->save();
            }
         
        } */
    
        return "Submission reset Success";
    }

    
    
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getStudentGradesInClass($id)
    {
        $StudentGradeList = tbl_userclass::where('tbl_userclasses.class_id', $id)
        ->select('tbl_user_details.firstname', 'tbl_user_details.lastName','tbl_user_details.user_id',
        'tbl_student_course_subject_grades.final_grade')
        ->leftJoin('tbl_subject_courses','tbl_subject_courses.id', '=','tbl_userclasses.course_id')
        ->leftJoin('tbl_student_course_subject_grades','tbl_student_course_subject_grades.student_id', '=','tbl_userclasses.user_id')
        ->leftJoin('users','users.id', '=','tbl_userclasses.user_id')
        ->leftJoin('tbl_user_details','users.id', '=','tbl_user_details.user_id')
        ->where('users.role', 'Student')
        ->get();


        foreach($StudentGradeList as $item){
            $Submission = tbl_Submission::where('tbl_submissions.user_id', $item->user_id)
            ->select('tbl_submissions.points as score','tbl_classworks.points as total_points', 'tbl_main_grade_categories.percentage')
            ->leftJoin('tbl_classworks', 'tbl_classworks.id','=','tbl_submissions.classwork_id')
            ->leftJoin('tbl_class_classworks', 'tbl_class_classworks.id','=','tbl_submissions.class_classwork_id')
            ->leftJoin('tbl_main_grade_categories', 'tbl_main_grade_categories.id','=', 'tbl_class_classworks.grading_criteria')
            ->get();

            //return $Submission;
            
            $temp = 0;
            $grade = 0;
            $counter = 1;
            foreach($Submission as $sub){
                $temp = $sub->score != null ? $temp + $sub->score : $temp;
                //$grade += (((($sub->score /  $sub->total_points)*100) /2) +50 ) * ($sub->total_points / 100);
           
                //(($sub->score / $sub->total_points) * ($sub->total_points / 100));
                $counter++;
            }
            $item->final_grade = ($temp / $counter);
        }

        return $StudentGradeList;
    }


    
    /**
     * Update the specified resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function ReUpdateScore(Request $request, $id){
        $updateObj = tbl_Submission::find($id);
        if($updateObj){
            $updateObj->points = $request->points;
            $updateObj->save();
            return;
        }
        return;
    }

    /**
     * Update the specified resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateScoreObj(Request $request, $id)
    {   
        $userId = auth('sanctum')->id();
        $updateObj = tbl_Submission::where('id', $id)->first();
        if($updateObj){

            $checkClasswork = tbl_classwork::find($updateObj->classwork_id);

            if($checkClasswork ->isNew == null){
                $TempAnswers = array();

                //return $request;
            
                $Tmp = unserialize($updateObj->Submitted_Answers);
                if($request->check != true){
                    $updateObj->points = ($updateObj->points - $request->points);
                    foreach($Tmp as $item){
                        if($item['Question_id'] == $request->question_id){
                            if($item['type'] == 'Essay'){
                                $item['check'] = false;
                                $item['score'] = $request->essay_points;
                                
                            }
                            else{
                                $item['check'] = false;
                                //$item['Answer'] = "Wrong answer";
                            }
                        
                            array_push($TempAnswers, $item);
                        }
                        else{
                            array_push($TempAnswers, $item);
                        }
                    }
                    $updateObj->Submitted_Answers = serialize($TempAnswers);
                    $updateObj->save();
                    return;
                }

                if($request->type == 'Essay'){
                    if($request->old_essay_points == 0){
                        $updateObj->points = ($updateObj->points + $request->essay_points);
                    }else{
                        $updateObj->points = ($updateObj->points - $request->old_essay_points);
                        $updateObj->points = ($updateObj->points + $request->essay_points);
                    }
                }
                else{
                    $updateObj->points = ($updateObj->points + $request->points);
                }
                
                
                foreach($Tmp as $item){
                    if($item['Question_id'] == $request->question_id){
                        //$item['Answer'] =  $request->answer;
                        if($item['type'] == 'Essay'){
                            $item['check'] = true;
                            $item['score'] = $request->essay_points;
                        }
                        else{
                            $item['check'] = true;
                            //$item['Answer'] =  $request->answer;
                        }
                        array_push($TempAnswers, $item);
                    }
                    else{
                        array_push($TempAnswers, $item);
                    }
                }
                $updateObj->Submitted_Answers = serialize($TempAnswers);
                $updateObj->save();
                return;
            }
            else{

                $submitted_Answer = tbl_Submitted_Answer::where('question_id', $request->question_id)
                ->where('user_id', $request->user_id)->first();
              
                //return  $submitted_Answer;

                if($request->check == true){
                    $updateObj->points = ($updateObj->points + $request->points);
                    if($submitted_Answer->type == 'Essay'){
                        $submitted_Answer->isCorrect = true;
                        
                    }
                    else{
                        $submitted_Answer->answer = $request->answer;
                        $submitted_Answer->isCorrect = true;
                    }

                    $submitted_Answer->save();
                    $updateObj->save();
                    return;
                }
                else{
                    $updateObj->points = ($updateObj->points - $request->points);
                    if($submitted_Answer->type == 'Essay'){
                        $submitted_Answer->isCorrect = null;
                    }
                    else{
                        $submitted_Answer->answer = $request->answer;
                        $submitted_Answer->isCorrect = null;
                    }
                    
                    $submitted_Answer->save();
                    $updateObj->save();
                    return;
                }
            
            }
        }
       
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function resetStudentObjSubmission($id)
    {
    
        //return $id;
        $ResetSubmission = tbl_Submission::find($id);
           if($ResetSubmission){
               $removeComment = tbl_comment::where('classwork_id', $ResetSubmission->classwork_id)->delete();
               $removeActivities = tbl_student_exam_activity_log::where('classwork_id', $ResetSubmission->classwork_id)
               ->where('student_id',$ResetSubmission->user_id)->delete();
                $ResetSubmission->forceDelete();
                return "Reset Success";
           }
           return "Submission Not found";
    }

     /**
     * Update the specified resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function resetStudentSbjSubmission(Request $request, $id)
    {
       
        $ResetSubmission = tbl_Submission::find($id);
        if($ResetSubmission){
            if($request["files"]){
                foreach($request["files"] as $item){
                    if($item["fileExte"] != "link" && $item["fileExte"] != "type_answer"){
                        $path =  str_replace(\Config::get('app.do_url').'/', "", $item['link']);
                        Storage::disk('DO_spaces')->delete($path);
                    }
                }
            }
           
            $ResetSubmission->forceDelete();
            return "Reset Success";
        }
        return "Submission Not found";
       
    }

     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function ChangeClassPicture(Request $request)
    {   
        $course = tbl_subject_course::find($request->course_id);
        
        
        $contains = str_contains($course->course_picture, 'https://orangestr.sgp1.cdn.digitaloceanspaces.com');
        if($contains){
            $path =  str_replace(\Config::get('app.do_url').'/', "", $course->course_picture);
            Storage::disk('DO_spaces')->delete($path);

            if($request->type == "uploaded"){
                $file = $request->file;
                $file_exte = $file->getClientOriginalExtension();
                $original_file_name = preg_replace('/\\.[^.\\s]{3,4}$/', '', $request->file_name);
                $Uploadname = $original_file_name.'_'.time().'.'.$file_exte;
                $upload_file = Storage::disk('DO_spaces')->putFileAs('courseBackground/'.$request->course_id, $file, $Uploadname , 'public');
                $path = \Config::get('app.do_url').'/'. $upload_file;
                $course->course_picture =  $path;
            }
            else if($request->type == "from_file"){
                $course->course_picture = $request->file_name;
            }
            $course->save();
            return $course->course_picture;
        }
        else{
            if($request->type == "uploaded"){
                $file = $request->file;
                $file_exte = $file->getClientOriginalExtension();
                $original_file_name = preg_replace('/\\.[^.\\s]{3,4}$/', '', $request->file_name);
                $Uploadname = $original_file_name.'_'.time().'.'.$file_exte;
                $upload_file = Storage::disk('DO_spaces')->putFileAs('courseBackground/'.$request->course_id, $file, $Uploadname , 'public');
                $path = \Config::get('app.do_url').'/'. $upload_file;
                $course->course_picture =  $path;
            }
            else if($request->type == "from_file"){
                $course->course_picture = $request->file_name;
            }
            $course->save();
            return $course->course_picture;
        }
    }


    public function FetchClassJoinRequest($id)
    {
        $join_request = tbl_join_request::where('tbl_join_requests.course_id',$id)
        ->select('tbl_join_requests.id','tbl_join_requests.user_id','tbl_join_requests.course_id','tbl_join_requests.class_id',
        'tbl_user_details.firstName','tbl_user_details.lastName','tbl_user_details.profile_pic','tbl_user_details.student_id','users.email')
        ->leftJoin('users', 'users.id', '=','tbl_join_requests.user_id')
        ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=','tbl_join_requests.user_id')
        ->get();
        if($join_request){
            return $join_request;
        }
    }

    public function AcceptJoinRequest($id)
    {
        $checkJoinRequest = tbl_join_request::find($id);
        if($checkJoinRequest){

            $checkUserClass = tbl_userclass::where('class_id', $checkJoinRequest->class_id)
            ->where('user_id', $checkJoinRequest->user_id)->where('course_id', $checkJoinRequest->course_id)
            ->first();

            if($checkUserClass){
                return response()->json([
                'course_id'=>$checkJoinRequest->course_id, 
                'status'=> 2, 
                'message'=>"This student is already in the class!"],200);
            }

            
            $JoinClass = new tbl_userclass;
            $JoinClass->class_id = $checkJoinRequest->class_id;
            $JoinClass->user_id = $checkJoinRequest->user_id;
            $JoinClass->course_id = $checkJoinRequest->course_id;
            $JoinClass->save();
            broadcast(new NewUserCLass($JoinClass))->toOthers();
            $checkJoinRequest->delete();

         

            return response()->json([
            'course_id'=>$JoinClass->course_id, 
            'status'=> 1, 
            'message'=>"Student successfully added in class!"],200);
        }
        return response()->json([
            'status'=> 1, 
            'message'=>"Something went wrong!"],201);
    }


    public function MultipleAcceptJoinRequest(Request $request)
    {

        foreach($request->request_id as $item){
            $checkJoinRequest = tbl_join_request::find($item['id']);
            if($checkJoinRequest){
                $checkUserClass = tbl_userclass::where('class_id', $checkJoinRequest->class_id)
                ->where('user_id', $checkJoinRequest->user_id)->where('course_id', $checkJoinRequest->course_id)
                ->first();
    
                if(!$checkUserClass){
                    $JoinClass = new tbl_userclass;
                    $JoinClass->class_id = $checkJoinRequest->class_id;
                    $JoinClass->user_id = $checkJoinRequest->user_id;
                    $JoinClass->course_id = $checkJoinRequest->course_id;
                    $JoinClass->save();
                    broadcast(new NewUserCLass($JoinClass))->toOthers();
                }
                $checkJoinRequest->delete();
            }
        }
        return response()->json([
            'status'=> 1, 
            'message'=>"Student successfully added in class!"],200);
    }
    

    public function rejectJoinRequest($id){
        $checkJoinRequest = tbl_join_request::find($id);
        if($checkJoinRequest){
            $checkJoinRequest->delete();
        }
    }

    public function MultiplerejectJoinRequest(Request $request){
        foreach($request->request_id as $item){
            $checkJoinRequest = tbl_join_request::find($item['id']);
            if($checkJoinRequest){
                $checkJoinRequest->delete();
            }
        }
    }

    public function AllowResubmit(Request $request, $id){

        //return $request;
        $Submission = tbl_Submission::find($id);
        if($Submission){
            if($request->type == "Subjective Type"){
                $Submission->status = 'Submitting';
                $Submission->allow_resubmit = true;
                $Submission->graded = false;
                $Submission->points = 0;
                $Submission->save();
                return response()->json([
                    'sub_id'=> $Submission->id, 
                    'message'=>"Allowed Resubmit"],200);
            }
            elseif($request->type == "Objective Type"){
                $Submission->status = null;
                $Submission->points = 0;
                $Submission->Submitted_Answers = null;
                $Submission->allow_resubmit = true;
                $Submission->save();
                return response()->json([
                    'sub_id'=> $Submission->id, 
                    'message'=>"Allowed Retake"],200);
                
            }
        }else{
            //if($request->type == "Objective Type"){
                $checkCLasswork = tbl_classClassworks::where('tbl_class_classworks.class_id', $request->class_id)
                ->where('tbl_class_classworks.classwork_id', $request->classwork_id)->first();
                if($checkCLasswork){
                    $StatusUpdate = new tbl_Submission;
                    $StatusUpdate->classwork_id = $request->classwork_id;
                    $StatusUpdate->class_classwork_id = $checkCLasswork->id;
                    $StatusUpdate->user_id =  $request->user_id;
                    $StatusUpdate->status = null;
                    $StatusUpdate->allow_resubmit = true;
                    $StatusUpdate->save();
                    return response()->json([
                        'sub_id'=> $StatusUpdate->id, 
                        'message'=>"Allow Submission"],200);
                }
            //}

        }
    }
    
}
