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
        $SubmissionList = tbl_classClassworks::where('tbl_class_classworks.classwork_id', $id)
        ->select('tbl_class_classworks.classwork_id', 'tbl_class_classworks.class_id', 'tbl_userclasses.user_id','tbl_user_details.profile_pic','users.firstname', 'users.lastName')
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
            
            $tbl_classClassworks = tbl_classClassworks::where('classwork_id',$classwork_id)
            ->select('grading_criteria as grading_criteria_id','class_id','percentage')
            ->leftJoin('tbl_main_grade_categories' , 'tbl_main_grade_categories.id' , '=' , 'tbl_class_classworks.grading_criteria')
            ->first();

            $tbl_classworks = tbl_classwork::
            select('tbl_classworks.course_id')
            ->selectRaw('sum(tbl_classworks.points) as total_category_points ')

            ->leftJoin('tbl_class_classworks' , 'tbl_class_classworks.classwork_id' , '=' , 'tbl_classworks.id')
            ->where('tbl_class_classworks.class_id',   $tbl_classClassworks->class_id )
            ->where('tbl_class_classworks.grading_criteria',   $tbl_classClassworks->grading_criteria_id )
            ->get();

            $totalPoints =  tbl_Submission::where("tbl_submissions.user_id",$userId)
            ->selectRaw('sum(tbl_submissions.points) as total_points ')
            ->leftJoin('tbl_class_classworks' , 'tbl_class_classworks.classwork_id' , '=' , 'tbl_submissions.classwork_id')
            ->where('tbl_class_classworks.class_id',  $tbl_classClassworks->class_id)
            ->where('tbl_class_classworks.grading_criteria',  $tbl_classClassworks->grading_criteria_id)
            ->first();

            
            $totalPercentage = ($totalPoints->total_points/$tbl_classworks[0]->total_category_points) *  $tbl_classClassworks->percentage;

            $tbl_student_main_grades = tbl_student_main_grades::
            select('grade_category_id')
            ->where('course_id',$tbl_classworks[0]->course_id)
            ->where('grade_category_id', $tbl_classClassworks->grading_criteria_id )
            ->where( 'student_id', $userId)
            ->count();
          
            if($tbl_student_main_grades == 0) {
                $tbl_student_main_grades = new tbl_student_main_grades;
                $tbl_student_main_grades->student_id =  $userId;
                $tbl_student_main_grades->grade_category_id =   $tbl_classClassworks->grading_criteria_id;
                $tbl_student_main_grades->course_id =  $tbl_classworks[0]->course_id;
                $tbl_student_main_grades->grade =  $totalPercentage;
                $tbl_student_main_grades->save();

            } else {
               // return [$tbl_classworks[0]->course_id,$tbl_classClassworks->grading_criteria_id,$userId ];
                $tbl_student_main_grades = DB::table('tbl_student_main_grades')
                ->where(['course_id'=>$tbl_classworks[0]->course_id,
                'grade_category_id'=> $tbl_classClassworks->grading_criteria_id,
                'student_id'=> $userId ])
                ->update(
                    [
                    'grade' => $totalPercentage
                    ]
                );
            }

            $get_all_student_main_grades = tbl_student_main_grades::
            select('grade')
            ->where('course_id',$tbl_classworks[0]->course_id)
            ->where( 'student_id', $userId)
            ->get();

            $final_grade = 0;
            foreach($get_all_student_main_grades as $grade)
            {
                $final_grade += $grade->grade;
            }


            $update_course_finalGrade = tbl_student_course_subject_grades::
            select('student_id')
            ->where('course_id',$tbl_classworks[0]->course_id)
            ->where( 'student_id', $userId)
            ->count();
          
            if($update_course_finalGrade == 0) {
                $update_course_finalGrade = new tbl_student_course_subject_grades;
                $update_course_finalGrade->student_id =  $userId;
                $update_course_finalGrade->course_id =  $tbl_classworks[0]->course_id;
                $update_course_finalGrade->final_grade =  $final_grade;
                $update_course_finalGrade->save();

            } else {
               // return [$tbl_classworks[0]->course_id,$tbl_classClassworks->grading_criteria_id,$userId ];
               $update_course_finalGrade = DB::table('tbl_student_course_subject_grades')
               ->where(['course_id'=>$tbl_classworks[0]->course_id,
               'student_id'=> $userId ])
               ->update(
                   [
                   'final_grade' => $final_grade
                   ]
               );
            }
















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
