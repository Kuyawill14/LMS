<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_Questions;
use App\Models\tbl_classwork;
use App\Models\tbl_classClassworks;
use App\Models\tbl_SubQuestion;
use App\Models\tbl_choice;
use App\Models\tbl_Submission;
use App\Models\tbl_questionAnalytic;
use App\Models\tbl_student_main_grades;
use App\Models\tbl_student_course_subject_grades;
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
            'tbl_questions.answer','tbl_questions.points','tbl_questions.sensitivity')
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function fetchQuestionAnswerForViewSubmision($id, $class_clwk_Id){

        $temQuest;
        $FinalAnswer = array();
        $checkShowAnswer = tbl_classClassworks::find($class_clwk_Id);
        if($checkShowAnswer->showAnswer == true && $checkShowAnswer->showAnswerType == 0){
            $Questions = tbl_Questions::where('tbl_questions.classwork_id', $id)
            ->Select('tbl_questions.id', 'tbl_questions.question', 'tbl_questions.type',
            'tbl_questions.answer','tbl_questions.points')
            ->orderBy('created_at','DESC')
            ->get();
            $temQuest = $Questions;

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
                        $tempData2  = $tempData1;
                    }
                    else{
                        $tempData2 = $tempData1;
                    }
                    $FinalAnswer[] =  $tempData2;
                }
                else{
                    $tmp = array();
                    if(auth('sanctum')->user()->role == 'Student'){
                        $tempAns =  $tempData1;
                        $temQues = $tempSubQuestion;
                    }
                    else{
                        $tempAns =  $tempData1;
                        $temQues = $tempSubQuestion;  
                    } 
                    $tmp =  ["SubQuestion"=>$temQues , "SubAnswer"=>$tempAns];
                    $FinalAnswer[] = $tmp;    
                }     
            }
            
        }
        else{
            $Questions = tbl_Questions::where('tbl_questions.classwork_id', $id)
            ->Select('tbl_questions.id', 'tbl_questions.question', 'tbl_questions.type','tbl_questions.points')
            ->orderBy('created_at','DESC')
            ->get();
            $temQuest = $Questions;

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
                        $tempData2  = $tempData1;
                    }
                    else{
                        $tempData2 = $tempData1;
                    }
                    $FinalAnswer[] =  $tempData2;
                }
                else{
                    $tmp = array();
                    if(auth('sanctum')->user()->role == 'Student'){
                        $tempAns =  $tempData1;
                        $temQues = $tempSubQuestion;
                    }
                    else{
                        $tempAns =  $tempData1;
                        $temQues = $tempSubQuestion;  
                    } 
                    $tmp =  ["SubQuestion"=>$temQues , "SubAnswer"=>$tempAns];
                    $FinalAnswer[] = $tmp;    
                }     
            }
        }
        
       
        return ["Question"=>$temQuest , "Answer"=>$FinalAnswer];
    }
    

    /**
     * Show the form for creating a new resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function AddOption(Request $request)
    {   
       
        if($request->type == 'Multiple Choice'){
            $newChoice = new tbl_choice;
            $newChoice->question_id = $request->answers['question_id'];
            $newChoice->Choice = "<p>N/A</p>";
            $newChoice->save();
            return ["main_id"=>  $SubQuestion->question_id, "answer_id"=>  $newChoice->id];
        }
        elseif($request->type == 'Matching Type'){
            $QuestionChoice  = new tbl_choice;
            $QuestionChoice->question_id = $request->answer['question_id'];
            $QuestionChoice->Choice = "<p>N/A</p>";
            $QuestionChoice->save();

             //Add to Sub question
             $SubQuestion = new tbl_SubQuestion;
             $SubQuestion->mainQuestion_id = $request->SubQuestion['question_id'];
             $SubQuestion->answer_id = $QuestionChoice->id;
             $SubQuestion->sub_question = "<p>N/A</p>";
             $SubQuestion->save();

            return ["main_id"=>  $SubQuestion->id, "answer_id"=>  $QuestionChoice->id];

        }
        
      
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

        if(!$newQuestion){
            return response()->json([
                "message" => "Something went wrong while adding question!",
                "success" => false
            ]);
        }

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
        
        $UpdateClassworkPoints = tbl_classwork::find($request->classwork_id);
        if($UpdateClassworkPoints){
            $UpdateClassworkPoints ->points = $UpdateClassworkPoints ->points + $request->questions['points'];
            $UpdateClassworkPoints->save();
        }

       /*  $jsonString = json_encode($objectAnswer);
        $object = json_decode($jsonString);
        return ["Question"=>$newQuestion , "Answer"=>$object]; */

        return response()->json([
            "message" => "Question Succesfully Added!",
            "success" => true
        ]);
      
    }

     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function storeAnswer(Request $request, $id)
    {
       
            $StoreAnwers = tbl_Submission::find($id);
            if($StoreAnwers){
                $StoreAnwers->Submitted_Answers = serialize($request->data);
                $StoreAnwers->save();
            }
       
       
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
        //return $request;
        $UpdateQuestion = tbl_Questions::find($request->question['id']);
        if(!$UpdateQuestion){
            return response()->json([
                "message" => "Question not found!",
                "success" => false,
            ]);
        }

        if($UpdateQuestion->type == $request->type){

            if($request->type== 'Multiple Choice'){             
                $UpdateQuestion->question = $request->question['question'];
                $UpdateQuestion->answer = $request->question['answer'];

                $classworkTotalPoints = tbl_classwork::find($UpdateQuestion->classwork_id);
                $classworkTotalPoints->points = (($classworkTotalPoints->points - $UpdateQuestion->points)+$request->question['points']);
                $classworkTotalPoints->save();

                $UpdateQuestion->points = $request->question['points'];
                $UpdateQuestion->save();

                foreach($request->options as $options){
                    $UpdateChoices = tbl_choice::find($options['id']);
                    $UpdateChoices->Choice = $options['Choice'];
                    $UpdateChoices->save();
                }
                return 'Update Success!';
            
            }
            elseif($request->type == 'Identification' || $request->type == 'True or False' || $request->type == 'Essay' ){
            
                $UpdateQuestion->question = $request->question['question'];
                $UpdateQuestion->answer = $request->question['answer'];

                $classworkTotalPoints = tbl_classwork::find($UpdateQuestion->classwork_id);
                $classworkTotalPoints->points = (($classworkTotalPoints->points - $UpdateQuestion->points) + $request->question['points']);
                $classworkTotalPoints->save();

                $UpdateQuestion->points = $request->question['points'];
                $UpdateQuestion->save();
                return 'Update Success!';
            
            }
            elseif($request->type == 'Matching Type'){
               
                $UpdateQuestion->question = $request->details['question'];
                $UpdateQuestion->points = $request->details['points'];
                $UpdateQuestion->save();

                $classworkTotalPoints = tbl_classwork::find($UpdateQuestion->classwork_id);
                $tmpPoints = $classworkTotalPoints->points <= $UpdateQuestion->points ? 0 : $classworkTotalPoints->points - $UpdateQuestion->points;
                $classworkTotalPoints->points = $tmpPoints +$request->details['points'];
                $classworkTotalPoints->save();
                
                foreach($request->question as $question){
                    $UpdateSubQuestion = tbl_SubQuestion::find($question['id']);
                    $UpdateSubQuestion->sub_question = $question['sub_question'];
                    $UpdateSubQuestion->save();
                }

                foreach($request->options as $option){
                    $UpdateAnswer = tbl_choice::find($option['id']);
                    $UpdateAnswer->Choice = $option['Choice'];
                    $UpdateAnswer->save();
                }
                return 'Update Success!';
               
            }

        }
        else{
            $classworkTotalPoints = tbl_classwork::find($UpdateQuestion->classwork_id);
            $classworkTotalPoints->points = $classworkTotalPoints->points - $UpdateQuestion->points;
            $classworkTotalPoints->save();

            if($UpdateQuestion->type == 'Multiple Choice'){
                $DelAnswer = tbl_choice::where('question_id', $UpdateQuestion->id)->delete();
            }
            elseif($UpdateQuestion->type == 'Matching type'){
                $DelAnswer = tbl_choice::where('question_id', $id)->delete();
                $DelAnswerSubQuestion = tbl_SubQuestion::where('mainQuestion_id', $id)->delete();
            }


            if($request->type== 'Multiple Choice'){             
                $UpdateQuestion->question = $request->question['question'];
                $UpdateQuestion->answer = $request->question['answer'];

                $classworkTotalPoints = tbl_classwork::find($UpdateQuestion->classwork_id);
                $classworkTotalPoints->points = (($classworkTotalPoints->points - $UpdateQuestion->points)+$request->question['points']);
                $classworkTotalPoints->save();

                $UpdateQuestion->points = $request->question['points'];
                $UpdateQuestion->save();

                foreach($request->options as $options){
                    $UpdateChoices = tbl_choice::find($options['id']);
                    $UpdateChoices->Choice = $options['Choice'];
                    $UpdateChoices->save();
                }
                return 'Update Success!';
            
            }
            elseif($request->type == 'Identification' || $request->type == 'True or False' || $request->type == 'Essay' ){
            
                $UpdateQuestion->question = $request->question['question'];
                $UpdateQuestion->answer = $request->question['answer'];

                $classworkTotalPoints = tbl_classwork::find($UpdateQuestion->classwork_id);
                $classworkTotalPoints->points = (($classworkTotalPoints->points - $UpdateQuestion->points) + $request->question['points']);
                $classworkTotalPoints->save();

                $UpdateQuestion->points = $request->question['points'];
                $UpdateQuestion->save();
                return 'Update Success!';
            
            }
            elseif($request->type == 'Matching Type'){
               
                $UpdateQuestion->question = $request->details['question'];
                $UpdateQuestion->points = $request->details['points'];
                $UpdateQuestion->save();

                $classworkTotalPoints = tbl_classwork::find($UpdateQuestion->classwork_id);
                $tmpPoints = $classworkTotalPoints->points <= $UpdateQuestion->points ? 0 : $classworkTotalPoints->points - $UpdateQuestion->points;
                $classworkTotalPoints->points = $tmpPoints +$request->details['points'];
                $classworkTotalPoints->save();
                
                foreach($request->question as $question){
                    $UpdateSubQuestion = tbl_SubQuestion::find($question['id']);
                    $UpdateSubQuestion->sub_question = $question['sub_question'];
                    $UpdateSubQuestion->save();
                }

                foreach($request->options as $option){
                    $UpdateAnswer = tbl_choice::find($option['id']);
                    $UpdateAnswer->Choice = $option['Choice'];
                    $UpdateAnswer->save();
                }
                return 'Update Success!';
               
            }


            
        }
       

    }

    /**
     * Remove the specified resource from storage.
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function removeOption(Request $request, $id)
    {
        //return $request->type;
        if($request->type == 'Multiple Choice'){
            $DelAnswer = tbl_choice::find($id);
            if($DelAnswer){
                $DelAnswer->delete();
                return "successfully Remove.";
            }
            return "Question not found";
        }
        elseif($request->type == 'Matching Type'){
            $DelAnswerSubQuestion = tbl_SubQuestion::find($id);
            if($DelAnswerSubQuestion){
                $DelAnswer = tbl_choice::find($DelAnswerSubQuestion->answer_id);
                if($DelAnswer){
                    $DelAnswer->delete();
                }
                $DelAnswerSubQuestion->delete();
                return "successfully Remove.";
            }
            return "Question not found";
          
        }
        
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
            //$DelAnswer = tbl_choice::where('question_id', $id)->delete();
            if($DelQuestion->type != 'Matching type'){
                $DelAnswer = tbl_choice::where('question_id', $id)
                ->delete();
            }
            else{
                $DelAnswer = tbl_choice::where('question_id', $id)->delete();
                $DelAnswerSubQuestion = tbl_SubQuestion::where('mainQuestion_id', $id)->delete();
            }
            $UpdatePoints = tbl_classwork::find($DelQuestion->classwork_id);
            $UpdatePoints->points =  $UpdatePoints->points - $DelQuestion->points;
            $UpdatePoints->save();


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
        
        
        //return serialize($request->item);
        $userId = auth('sanctum')->id();
        $questionCount = tbl_Questions::where('tbl_questions.classwork_id', $id)->count();
        $Questions = tbl_Questions::where('tbl_questions.classwork_id', $id)
        ->Select('tbl_questions.id', 'tbl_questions.type','tbl_questions.answer','tbl_questions.points')
        ->get();

   
        $tempData = array();
        $score = 0;
    
        foreach($request->item as $cl){
           
                foreach($Questions as $ques){
                    if($ques['id'] == $cl['Question_id']){
                        if($cl['type'] == 'Multiple Choice' || $cl['type'] == 'Identification' || $cl['type'] == 'True or False' /* || $cl['type'] == 'Essay' */){
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
                        elseif($cl['type'] == 'Matching type'){
                            $Tempoints =  $ques['points'] / count($cl['Answer']);
                            foreach($cl['Answer'] as $item){
                                $CheckMatch = tbl_SubQuestion::find($item['subquestion_id']);
                                if($CheckMatch){
                                    if($CheckMatch->answer_id == $item['Ans_id']){
                                        $score += $Tempoints;
                                    }
                                   /*  $checkChoice = tbl_choice::find($CheckMatch->answer_id);
                                    if($checkChoice->Choice == $item['Ans_id']){
                                        
                                    } */
                                }
                                
                            }
                           
                        }
                }
            }
        }

        
        $UpdateStatus = tbl_Submission::where("tbl_submissions.user_id",$userId)
        ->where('tbl_submissions.classwork_id', $id)
        ->first();
        if($UpdateStatus){
            $UpdateStatus->status = 'Submitted';
            $UpdateStatus->points = $score;
            $UpdateStatus->timeSpent = $request->timeSpent;
            $UpdateStatus->Submitted_Answers = serialize($request->item);
            $UpdateStatus->update();


         /* 
            $tbl_classClassworks = tbl_classClassworks::where('classwork_id',$id)
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
            } */


          
            // ->updateOrInsert(
            //     [
            //     'course_id'=>  $tbl_classworks[0]->course_id ,
            //     'grade_category_id'=> $tbl_classClassworks->grading_criteria,
            //     'student_id'=>$userId 
            //     ],
            //     array(
            //         'grade' => $totalPercentage,
            //         'course_id'=>  $tbl_classworks[0]->course_id,
            //         'grade_category_id' => $tbl_classClassworks->grading_criteria_id,
            //         'student_id' => $userId,
            //     )
            // );
           
            // $gradingCategory = json_decode($gradingCategory, true);
            //return   $final_grade;
        }   
       
        
    }
 
}
