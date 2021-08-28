<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_Submission;
use App\Models\tbl_userclass;
use Illuminate\Support\Facades\Storage;
use App\Models\User;
use App\Models\tbl_classwork;
use App\Models\tbl_classClassworks;
use App\Models\tbl_student_course_subject_grades;
use App\Models\tbl_student_main_grades;
use App\Models\tbl_comment;
class SubmissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {   
        $userId = auth('sanctum')->id();
        $SubmissionList = tbl_classClassworks::where('tbl_class_classworks.classwork_id', $id)
        ->select('tbl_class_classworks.classwork_id', 'tbl_class_classworks.class_id', 'tbl_userclasses.user_id','tbl_user_details.profile_pic','tbl_user_details.firstName', 'tbl_user_details.lastName')
        ->leftJoin('tbl_userclasses', 'tbl_userclasses.class_id','=','tbl_class_classworks.class_id')
        ->leftJoin('users', 'users.id','=','tbl_userclasses.user_id')
        ->leftjoin('tbl_user_details','tbl_user_details.user_id','=','users.id')
        ->where('users.role','Student')
        ->get();

        if(count($SubmissionList) != 0){
            foreach($SubmissionList as $Sub){
                $Submission = tbl_Submission::where('classwork_id',$Sub->classwork_id)
                ->where('user_id', $Sub->user_id)->first();
                if(!$Submission){
                    $Sub->id = null;
                    $Sub->status = null;
                    $Sub->points = null;
                    $Sub->graded = null;
                    $Sub->updated_at = null;
                    $Sub->Submitted_Answers = null;
                    
                }
                else{
                    $Sub->id = $Submission->id;
                    $Sub->status = $Submission->status;
                    $Sub->points = $Submission->points;
                    $Sub->graded = $Submission->graded;
                    $Sub->updated_at = $Submission->updated_at;
                    $Sub->Submitted_Answers = unserialize($Submission->Submitted_Answers);
                }

                $PrivateComment = tbl_comment::where("tbl_comments.classwork_id",  $Sub->classwork_id)
                ->select("tbl_comments.id","tbl_comments.content",DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_user_details.profile_pic")
                ->leftJoin("tbl_user_details", "tbl_user_details.user_id","=","tbl_comments.user_id")
                ->where('tbl_comments.from_user', $Sub->user_id)
                ->where('tbl_comments.to_user',  $userId)
                ->where('tbl_comments.type', 'Private')
                ->orderBy("tbl_comments.created_at", "ASC")
                ->get();
                $Sub->comments =  $PrivateComment;
            }
        } 
        return $SubmissionList;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function RemoveUploadedFile(Request $request, $id)
    {
        $RemoveSubmissionFile = tbl_Submission::find($id);
        if($RemoveSubmissionFile){
            
            $Ans = unserialize($RemoveSubmissionFile->Submitted_Answers);
            if(count($Ans) == 1){
                Storage::delete('public/'.$Ans[$request->Fileindex]['link']);
                $RemoveSubmissionFile->delete();
            }
            else{
                Storage::delete('public/'.$Ans[$request->Fileindex]['link']);
                array_splice($Ans, $request->Fileindex, 1);
                $RemoveSubmissionFile->Submitted_Answers = serialize($Ans);
                $RemoveSubmissionFile->save();
            }
           
           
        }
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
    public function checkSubjectiveSubmission($id)
    {
        $userId = auth('sanctum')->id();
        //$userId = 2;
        /* $CheckStatus = User::where('users.id',  $userId )
        ->select('users.id','tbl_classworks.course_id','tbl_classworks.id as classwork_id',
        'tbl_submissions.status','tbl_submissions.points as score','tbl_submissions.Submitted_Answers','tbl_submissions.id as Sub_id',
        'tbl_classworks.points as totalPoints')
        ->leftJoin('tbl_userclasses','tbl_userclasses.user_id','=','users.id')
        ->leftJoin('tbl_classworks','tbl_classworks.course_id','=','tbl_userclasses.course_id')
        ->leftJoin('tbl_submissions','tbl_submissions.classwork_id','=','tbl_classworks.id')
        ->where('tbl_classworks.id',$id)
        ->first(); */

        $CheckStatus = tbl_Submission::where('tbl_submissions.classwork_id', $id)
        ->select('tbl_submissions.status','tbl_submissions.points as score','tbl_submissions.Submitted_Answers','tbl_submissions.id as Sub_id','tbl_submissions.graded',
        'tbl_classworks.points as totalPoints','tbl_classworks.id as classwork_id','tbl_classworks.course_id')
        ->leftJoin('tbl_classworks', 'tbl_classworks.id','=','tbl_submissions.classwork_id')
        ->where('tbl_submissions.user_id',  $userId)
        ->first();
        if($CheckStatus){
            $CheckStatus->Submitted_Answers = unserialize($CheckStatus->Submitted_Answers);
        }
        return $CheckStatus;
    }

    /**
     * Show the form for editing the specified resource.
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateSbjSubmissionScore(Request $request,$id)
    {
        $UpdateScore = tbl_Submission::find($id);
        if($UpdateScore){
            $UpdateScore->graded = 1;
            $UpdateScore->points = $request->score;
            $UpdateScore->save();

            $userId = $UpdateScore->user_id;
            $classwork_id = $UpdateScore->classwork_id;
            
            



            return 'Score Updated!';
        }
        return 'Submission not found!';
        
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
