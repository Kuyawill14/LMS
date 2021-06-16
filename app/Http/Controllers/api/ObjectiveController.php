<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_Questions;
use App\Models\tbl_SubQuestion;
use App\Models\tbl_choice;
use App\Models\tbl_questionAnalytic;


use Illuminate\Support\Collection;

class ObjectiveController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
       
        
        $temQuest;
        if(auth('sanctum')->user()->role == 'Student'){
            $Questions = tbl_Questions::where('tbl_questions.classwork_id', $id)
            ->Select('tbl_questions.id', 'tbl_questions.question', 'tbl_questions.type','tbl_questions.points')
            ->orderBy('created_at','DESC')
            ->get();
            $temQuest = $Questions->shuffle();
        }
        else{
            $Questions = tbl_Questions::where('tbl_questions.classwork_id', $id)
            ->Select('tbl_questions.id', 'tbl_questions.question', 'tbl_questions.type',
            'tbl_questions.answer','tbl_questions.points')
            ->orderBy('created_at','DESC')
            ->get();
            $temQuest = $Questions;
        }
        $FinalAnswer = array();
        $tempQuestion = new Collection();
        $tempAnswer = new Collection();
        foreach($temQuest as $cl){
           
            $tempData1;
            $tempSubQuestion;
            if(auth('sanctum')->user()->role == 'Student'){
                $tempData1 = tbl_choice::where('tbl_choices.question_id',$cl->id)
                ->select('tbl_choices.id','tbl_choices.question_id','tbl_choices.Choice')
                ->get();

                $tempSubQuestion = tbl_SubQuestion::where('tbl_sub_questions.mainQuestion_id',$cl->id)
                ->select('tbl_sub_questions.id','tbl_sub_questions.sub_question')
                ->get();
            }
            else{
                $tempData1 = tbl_choice::where('tbl_choices.question_id',$cl->id)
                ->select('tbl_choices.id','tbl_choices.question_id','tbl_choices.Choice')
                ->get();

                $tempSubQuestion = tbl_SubQuestion::where('tbl_sub_questions.mainQuestion_id',$cl->id)
                ->select('tbl_sub_questions.id','tbl_sub_questions.answer_id','tbl_sub_questions.sub_question')
                ->get();
            }

            

           

            if($cl->type != 'Matching type'){
                $tempData2;
                if(auth('sanctum')->user()->role == 'Student'){
                    $tempData2  = $tempData1->shuffle();
                }
                else{
                    $tempData2 = $tempData1;
                }
                $FinalAnswer[] =  $tempData2;
            }
            else{
                $tmp = array();
                if(auth('sanctum')->user()->role == 'Student'){
                    $tempAns =  $tempData1->shuffle();
                    $temQues = $tempSubQuestion->shuffle();  
                }
                else{
                    $tempAns =  $tempData1;
                    $temQues = $tempSubQuestion;  
                } 
                $tmp =  ["SubQuestion"=>$temQues , "SubAnswer"=>$tempAns];
                $FinalAnswer[] = $tmp;    
            }     
        }
        return ["Question"=>$temQuest , "Answer"=>$FinalAnswer];


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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       
        $newQuestion  = new tbl_Questions;
        $newQuestion->classwork_id = $request->classwork_id;
        $newQuestion->question = $request->questions['question'];
        $newQuestion->answer = $request->questions['answer'];
        $newQuestion->type = $request->questions['type'];
        $newQuestion->points = $request->questions['points'];
        $newQuestion->required = $request->questions['Required'];
        $newQuestion->sensitivity = $request->questions['Sensitive'];
        $newQuestion->save();

        $objectAnswer = array();
        $objectAnswer1 = array();
        if($request->questions['type'] == 'Multiple Choice'){
            
            $temPata = array();
            for ($i=0; $i < $request->length ; $i++) { 
                foreach($request->answers[$i] as $cl){
                    $temPata[] = $cl;
                }
                $QuestionChoice  = new tbl_choice;
                $QuestionChoice->question_id = $newQuestion->id;
                $QuestionChoice->Choice = $temPata[$i];
                $QuestionChoice->save();
                $objectAnswer[] =  $QuestionChoice;
            }
        }
        elseif ($request->questions['type'] == 'Matching type') {
            for ($i=0; $i < $request->length ; $i++) { 
                $temp = array();
                foreach($request->answers[$i] as $cl){
                   $temp[] = $cl;
                }
                $objectAnswer[] = $temp;

               //Add Answer
                $QuestionChoice  = new tbl_choice;
                $QuestionChoice->question_id = $newQuestion->id;
                $QuestionChoice->Choice = $objectAnswer[$i][1];
                $QuestionChoice->save();

                 //Add to Sub question
                 $SubQuestion = new tbl_SubQuestion;
                 $SubQuestion->mainQuestion_id = $newQuestion->id;
                 $SubQuestion->answer_id = $QuestionChoice->id;
                 $SubQuestion->sub_question = $objectAnswer[$i][0];
                 $SubQuestion->save();
            }
        }
     
        $jsonString = json_encode($objectAnswer);
        $object = json_decode($jsonString);
        return ["Question"=>$newQuestion , "Answer"=>$object];
      
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
        $DelAnswer = tbl_choice::find($id);
        if($DelAnswer){
            $DelAnswer->delete();
            return "successfully Remove.";
        }
        return "Question not found";
    }

     /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function  deleteQuestion($id)
    {
        $DelQuestion = tbl_Questions::find($id);
        if($DelQuestion){

                $DelAnswer = tbl_choice::where('question_id', $id)
                ->delete();
                if($DelQuestion->type != 4){
                    $DelAnswer = tbl_choice::where('question_id', $id)
                    ->delete();
                }
                else{
                    $DelAnswer = tbl_choice::where('question_id', $id)->delete();
                    $DelAnswerSubQuestion = tbl_SubQuestion::where('mainQuestion_id', $id)->delete();
                }
           
           
          $DelQuestion->delete();
          return "Success";
            
        }
        return "Question not found";
    }

     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function check(Request $request, $id)
    {
    
        $questionCount = tbl_Questions::where('tbl_questions.classwork_id', $id)->count();
        $Questions = tbl_Questions::where('tbl_questions.classwork_id', $id)
        ->Select('tbl_questions.id', 'tbl_questions.type','tbl_questions.answer','tbl_questions.points')
        ->get();

        $tempData = array();
        $score = 0;
    
        foreach($request->item as $cl){
            if($cl['type'] == 'Multiple Choice' || $cl['type'] == 'Identification' || $cl['type'] == 'True or False')
            {
                foreach($Questions as $ques){
                    if($ques['id'] == $cl['Question_id']){
                        if($ques['answer'] == $cl['Answer']){
                            $score += $ques['points'];
                            $AnalyticsFind = tbl_questionAnalytic::where("tbl_question_analytics.question_id",$cl['Question_id'])->first();
                        
                            if($AnalyticsFind){
                                $AnalyticsFind->correct_count = ($AnalyticsFind->correct_count+1);
                                if($AnalyticsFind->shortest_time > $cl['timeConsume']){
                                   $AnalyticsFind->shortest_time = $cl['timeConsume'];
                                }

                                if($AnalyticsFind->longest_time < $cl['timeConsume']){
                                    $AnalyticsFind->longest_time  = $cl['timeConsume'];
                                }
                                $AnalyticsFind->average_time = $AnalyticsFind->average_time + $cl['timeConsume'];
                                $AnalyticsFind->save();
                            }
                            else{
                                $NewAnalytics  = new tbl_questionAnalytic;
                                $NewAnalytics->question_id = $cl['Question_id'];
                                $NewAnalytics->correct_count = 1;
                                $NewAnalytics->wrong_count = 0;
                                $NewAnalytics->shortest_time = $cl['timeConsume'];
                                $NewAnalytics->longest_time = $cl['timeConsume'];
                                $NewAnalytics->average_time = $cl['timeConsume'];
                                $NewAnalytics->save();
                            }
                        }
                        else{
                            $AnalyticsFind = tbl_questionAnalytic::where("tbl_question_analytics.question_id",$cl['Question_id'])->first();
                            if($AnalyticsFind){
                                $AnalyticsFind->wrong_count = ($AnalyticsFind->correct_count+1);
                                if($AnalyticsFind->shortest_time > $cl['timeConsume']){
                                   $AnalyticsFind->shortest_time = $cl['timeConsume'];
                                }

                                if($AnalyticsFind->longest_time < $cl['timeConsume']){
                                    $AnalyticsFind->longest_time  = $cl['timeConsume'];
                                }
                                $AnalyticsFind->average_time = $AnalyticsFind->average_time + $cl['timeConsume'];
                                $AnalyticsFind->save();
                            }
                            else{
                                $NewAnalytics  = new tbl_questionAnalytic;
                                $NewAnalytics->question_id = $cl['Question_id'];
                                $NewAnalytics->correct_count = 0;
                                $NewAnalytics->wrong_count = 1;
                                $NewAnalytics->shortest_time = $cl['timeConsume'];
                                $NewAnalytics->longest_time = $cl['timeConsume'];
                                $NewAnalytics->average_time = $cl['timeConsume'];
                                $NewAnalytics->save();
                            }
                        }
                    }
                }
            }
            else if ($cl['type'] == 'Matching Type'){

            }
        }
           
            

        
        return $score;
    }
 
}
