<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_Questions;
use App\Models\tbl_choice;
use App\Models\tbl_classwork;
use App\Models\tbl_classClassworks;
use App\Models\tbl_Submitted_Answer;
use App\Models\tbl_Submission;

class AnalyticsController extends Controller
{
    /**
     * Display a listing of the resource.
     *@param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {

        $checkCLasswork = tbl_classwork::find($id);

        if($checkCLasswork->isNew){
            $analytics = tbl_Questions::where("tbl_questions.classwork_id","=",$id)
            ->select("tbl_questions.id","tbl_questions.question")
            ->orderBy("tbl_questions.created_at","ASC")
            ->get();

            foreach($analytics as $item){
                $checkCount = tbl_Submitted_Answer::where('question_id',$item->id)
                ->where('isCorrect', true)->count();

                $wrongCount = tbl_Submitted_Answer::where('question_id',$item->id)
                ->where('isCorrect', false)->count();

                $item->correct_count = $checkCount;
                $item->wrong_count = $wrongCount;
            }


            return ["analytics"=>  $analytics];
        }
        else{
            $analytics = tbl_Questions::where("tbl_questions.classwork_id","=",$id)
            ->select("tbl_questions.id","tbl_questions.question", "tbl_questions.answer","tbl_questions.type","tbl_questions.sensitivity","tbl_questions.isNew")
            ->orderBy("tbl_questions.created_at","ASC")
            ->where("tbl_questions.type","!=",'Matching type')
            ->get();

            foreach($analytics as $item){
                $submission = tbl_Submission::where('tbl_submissions.classwork_id', $id)->where('tbl_submissions.status','Submitted')->get();
                $checkCount = 0;
                $wrongCount = 0;
                foreach($submission as $sub){
                    if($sub->Submitted_Answers != null && $sub->Submitted_Answers != ''){
                        $answers = unserialize($sub->Submitted_Answers);

                            foreach($answers as $sub_answers){
                                if($item->id == $sub_answers['Question_id']){
                                    
                                    $userAns = $item->sensitivity ? $sub_answers['Answer'] : strtolower($sub_answers['Answer']);
                                    $questionAns = $item->sensitivity ? $item->answer : strtolower($item->answer);

                                    if($item->type == 'Multiple Choice'){
                                        if($item->isNew){
                                            $answerID = intval($userAns);
                                            $question_ans = intval($questionAns);
                                            if($answerID == $question_ans){
                                                $checkCount++; 
                                            }else{
                                                $wrongCount++;
                                            }
                                        }else{
                                            if($questionAns == $userAns){
                                                $checkCount++; 
                                            }else{
                                                $wrongCount++;
                                            }
                                        }
                                    }
                                    elseif($item->type == 'True or False'){
                                        $userAns = $item->sensitivity ? $sub_answers['Answer'] : strtolower($sub_answers['Answer']);
                                        $questionAns = $item->sensitivity ? $item->answer : strtolower($item->answer);
                                        if($userAns == $questionAns){
                                            $checkCount++;
                                        }
                                        else{
                                            $wrongCount++;
                                        }
                                    }
                                    elseif($item->type == 'Identification'){
                                        if(array_key_exists("check",$sub_answers)){
                                            if($sub_answers['check'] == true){
                                                $checkCount++;
                                            }else{
                                                $wrongCount++;
                                            }
                                        }else{
                                            $answer_list = tbl_choice::where('question_id', $item->id)->get();
                                            if(count($answer_list) == 0){
                                                $check = false;
                                                $temp1ans = $questionAns != null ? str_replace(array('<p>', '</p>'), array('', ''),  $questionAns) : $questionAns;
                                                $temp1ans = $temp1ans != null ? str_replace('&nbsp;', '', $temp1ans) : $temp1ans;
                                                $temp1ans = $temp1ans != null ? trim($temp1ans) : $temp1ans;

                                                $temp1UserAns = str_replace(array('<p>', '</p>'), array('', ''),  $userAns);
                                                $temp1UserAns = str_replace('&nbsp;', '', $temp1UserAns);
                                                $temp1UserAns = trim($temp1UserAns);

                                                if($temp1ans == $temp1UserAns){
                                                    $checkCount++;
                                                }else{
                                                    $wrongCount++;
                                                }
                                            }else{
                                                $check = false;
                                                $count = 0;
                                            
                                                foreach($answer_list as $answer){
                                                    $other_answer =  $item['sensitivity'] ? $answer->Choice : strtolower($answer->Choice);

                                                    $tempOtherAns = $other_answer != null  ? str_replace(array('<p>', '</p>'), array('', ''),  $other_answer) : $other_answer;
                                                    $tempUserAns = $userAns != null ? str_replace(array('<p>', '</p>'), array('', ''),  $userAns) : $userAns;
                    
                                                    $tempUserAns = $tempUserAns != null ? str_replace('&nbsp;', '', $tempUserAns) : $tempUserAns;
                                                    $tempOtherAns = $tempOtherAns != null ? str_replace('&nbsp;', '', $tempOtherAns) : $tempOtherAns;

                                                    $tempUserAns = $tempUserAns != null ? trim($tempUserAns) : $tempUserAns;
                                                    $tempOtherAns = $tempOtherAns != null ? trim($tempOtherAns) : $tempUserAns;
                                                    
                                                    if($tempOtherAns == $tempUserAns){
                                                        $checkCount++;
                                                        $check = true;
                                                        goto breakLoop;
                                                    }
                                                }

                                                breakLoop:
                                                if($check = false){
                                                    $wrongCount++;
                                                } 
                                                    
                                            }
                                        }
                                    }
                                                      
                                }
                            }  
                       
                    }
                }
                $item->correct_count = $checkCount;
                $item->wrong_count = $wrongCount;
            }
            
            $SubmissionCount = tbl_classClassworks::where("tbl_class_classworks.classwork_id", $id)
            ->select("tbl_class_classworks.classwork_id", "tbl_class_classworks.class_id", "tbl_userclasses.user_id","tbl_user_details.profile_pic","tbl_user_details.firstName", "tbl_user_details.lastName")
            ->leftJoin("tbl_userclasses", "tbl_userclasses.class_id","=","tbl_class_classworks.class_id")
            ->leftJoin("users", "users.id","=","tbl_userclasses.user_id")
            ->leftjoin("tbl_user_details","tbl_user_details.user_id","=","users.id")
            ->where("users.role","Student")
            ->count();

            return ["analytics"=>  $analytics, "totalSubmission"=> $SubmissionCount];
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
