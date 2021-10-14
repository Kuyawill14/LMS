<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_Submission;
use App\Models\User;
use App\Models\tbl_notification;
use App\Models\UserNotification;
use App\Models\tbl_student_course_subject_grades;
use App\Models\tbl_subject_course;
use App\Models\tbl_userclass;
use App\Models\tbl_userDetails;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendInviteMail;
use App\Mail\AlertStudentMail;
use App\Jobs\ProcessEmails;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;


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
            $newNotification->notification_type = 3;
            $newNotification->save();
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
        //return $request;

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
    public function ResetStudentSubmission(Request $request)
    {   

 

        for ($i= 0; $i < count($request[0]); $i++) { 

            $ResetSubmission = tbl_Submission::find($request[0]['id']);
            if($ResetSubmission){
                $ResetSubmission->status = null;
                $ResetSubmission->points = null;
                $ResetSubmission->Submitted_Answers = null;
                $ResetSubmission->created_at = null;
                $ResetSubmission->updated_at = null;
                $ResetSubmission->save();
            }
         
        }
    
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
        ->select('tbl_user_details.firstname', 'tbl_user_details.lastName',
        'tbl_student_course_subject_grades.final_grade')
        ->leftJoin('tbl_subject_courses','tbl_subject_courses.id', '=','tbl_userclasses.course_id')
        ->leftJoin('tbl_student_course_subject_grades','tbl_student_course_subject_grades.student_id', '=','tbl_userclasses.user_id')
        ->leftJoin('users','users.id', '=','tbl_userclasses.user_id')
        ->leftJoin('tbl_user_details','users.id', '=','tbl_user_details.user_id')
        ->where('users.role', 'Student')
        ->get();
        return $StudentGradeList;
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
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateScoreObj(Request $request, $id)
    {   
        //return $request->type;

        $updateObj = tbl_Submission::where('id', $id)->first();
        if($updateObj){
            $TempAnswers = array();
            
            $Tmp = unserialize($updateObj->Submitted_Answers);
            if($request->check != true){
                $updateObj->points = ($updateObj->points - $request->points);
                foreach($Tmp as $item){
                    if($item['Question_id'] == $request->question_id){
                        if($item['type'] == 'Essay'){
                            $item['check'] = false;   
                        }
                        else{
                            $item['Answer'] = null;
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
            $updateObj->points = ($updateObj->points + $request->points);
            foreach($Tmp as $item){
                if($item['Question_id'] == $request->question_id){
                    //$item['Answer'] =  $request->answer;
                    if($item['type'] == 'Essay'){
                        $item['check'] = true;   
                    }
                    else{
                        $item['Answer'] =  $request->answer;
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
                $ResetSubmission->status = null;
                $ResetSubmission->points = null;
                $ResetSubmission->Submitted_Answers = null;
                $ResetSubmission->created_at = null;
                $ResetSubmission->updated_at = null;
                $ResetSubmission->save();
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
            foreach($request["files"] as $item){
                if($item["fileExte"] != "link"){
                    $path =  str_replace(\Config::get('app.do_url').'/', "", $item['link']);
                    Storage::disk('DO_spaces')->delete($path);
                }
            }
            $ResetSubmission->forceDelete();
            return "Reset Success";
        }
        return "Submission Not found";
       
        
        
      /*   $ResetSubmission = tbl_Submission::find($id);
           if($ResetSubmission){
                $ResetSubmission->status = null;
                $ResetSubmission->points = null;
                $ResetSubmission->Submitted_Answers = null;
                $ResetSubmission->created_at = null;
                $ResetSubmission->updated_at = null;
                $ResetSubmission->save();
                return "Reset Success";
           }
           return "Submission Not found"; */
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
