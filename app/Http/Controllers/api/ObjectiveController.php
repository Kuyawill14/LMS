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
use App\Models\tbl_notification;
use App\Models\UserNotification;
use App\Models\tbl_questionAnalytic;
use App\Models\tbl_student_main_grades;
use App\Models\tbl_Submitted_Answer;
use App\Models\tbl_student_course_subject_grades;
use App\Models\tbl_userDetails;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;

class ObjectiveController extends Controller
{
   /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function fetctQuestions($id)
    {
        $temQuest;
        if(auth('sanctum')->user()->role == 'Student'){

            $Questions = tbl_Questions::where('tbl_questions.classwork_id', $id)
            ->Select('tbl_questions.id', 'tbl_questions.question', 'tbl_questions.type','tbl_questions.points')
            ->orderBy('created_at','ASC')
            ->whereNotNull('tbl_questions.question')
            ->get();
            $temQuest = $Questions->shuffle();
        }
        else{
            $Questions = tbl_Questions::where('tbl_questions.classwork_id', $id)
            ->Select('tbl_questions.id', 'tbl_questions.question', 'tbl_questions.type',
            'tbl_questions.answer','tbl_questions.points','tbl_questions.sensitivity')
            ->orderBy('created_at','ASC')
            ->get();
            $temQuest = $Questions;
        }
        
        $FinalAnswer = array();
        $tempQuestion = new Collection();
        $tempAnswer = new Collection();
        foreach($temQuest as $cl){
           
            $tempData1;
            $tempSubQuestion = tbl_SubQuestion::where('tbl_sub_questions.mainQuestion_id',$cl->id)
            ->select('tbl_sub_questions.id','tbl_sub_questions.sub_question','tbl_sub_questions.answer_id')
            ->get();

            if($cl->type != 'Matching type'){
                $tempData1 = tbl_choice::where('tbl_choices.question_id',$cl->id)
                ->select('tbl_choices.id','tbl_choices.question_id','tbl_choices.Choice')
                ->get();
                $tempData2;
                if(auth('sanctum')->user()->role == 'Student'){

                    if($cl->type == 'Multiple Choice'){
                        $tempData2  = $tempData1->shuffle();
                        $FinalAnswer[] =  $tempData2;
                    }
                    else{
                        $tempData2 = [];
                        $FinalAnswer[] =  $tempData2;
                    }
               
                   
                }
                else{
                    $tempData2 = $tempData1;
                    $FinalAnswer[] =  ['options'=> $tempData2, 'SubQuestion'=> [], 'SubAnswer'=> []];
                }
                

            }
            else{
                $tempData1 = [];
                foreach($tempSubQuestion as $item){
                    $tempData1[] = $data = tbl_choice::where('tbl_choices.id',$item->answer_id)
                    ->select('tbl_choices.id','tbl_choices.question_id','tbl_choices.Choice')
                    ->first();
                    if(auth('sanctum')->user()->role == 'Student'){
                        $item->answer_id = null;
                    }
                }
        
                if(auth('sanctum')->user()->role == 'Student'){
                    $tempAns =  Arr::shuffle($tempData1);
                    $temQues = $tempSubQuestion->shuffle();
                }
                else{
                    $tempAns =  $tempData1;
                    $temQues = $tempSubQuestion;  
                }
                $tmp =  ['options'=> [], "SubQuestion"=>$temQues , "SubAnswer"=>$tempAns];
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
        $checkShowAnswer = tbl_classClassworks::withTrashed()
        ->where('id', $class_clwk_Id)
        ->first();
        if($checkShowAnswer->showAnswer == true && $checkShowAnswer->showAnswerType == 0){
            $Questions = tbl_Questions::where('tbl_questions.classwork_id', $id)
            ->Select('tbl_questions.id', 'tbl_questions.question', 'tbl_questions.type','tbl_questions.sensitivity',
            'tbl_questions.answer','tbl_questions.points')
            ->orderBy('created_at','DESC')
            ->get();

            $temQuest = $Questions;

            $tempQuestion = new Collection();
            $tempAnswer = new Collection();
    
            foreach($temQuest as $cl){
               
                $tempData1;
                $tempData1;
                $tempSubQuestion = tbl_SubQuestion::where('tbl_sub_questions.mainQuestion_id',$cl->id)
                ->select('tbl_sub_questions.id','tbl_sub_questions.sub_question','tbl_sub_questions.answer_id')
                ->get();
    
                if($cl->type != 'Matching type'){

                   
                    $tempData1 = tbl_choice::where('tbl_choices.question_id',$cl->id)
                    ->select('tbl_choices.id','tbl_choices.question_id','tbl_choices.Choice')
                    ->get();
                
                    $FinalAnswer[] =  $tempData1;
                }
                else{
                    $tempData1 = [];
                    $tmp = array();
                    foreach($tempSubQuestion as $item){
                        $tempData1[] = $data = tbl_choice::where('tbl_choices.id',$item->answer_id)
                        ->select('tbl_choices.id','tbl_choices.question_id','tbl_choices.Choice')
                        ->first();
                        if(auth('sanctum')->user()->role == 'Student'){
                            $item->answer_id = null;
                        }
                    }
                    $tmp =  ["SubQuestion"=>$tempSubQuestion , "SubAnswer"=>$tempData1];
                    $FinalAnswer[] = $tmp;
                }
            }
            
        }
        else{
            $Questions = tbl_Questions::where('tbl_questions.classwork_id', $id)
            ->Select('tbl_questions.id', 'tbl_questions.question', 'tbl_questions.type','tbl_questions.points','tbl_questions.sensitivity')
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

        return response()->json([
            "message" => "Question Succesfully Added!",
            "success" => true
        ]);
      
    }

    

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function AddNewQuestion(Request $request)
    {
        $newQuestion  = new tbl_Questions;
        $newQuestion->classwork_id = $request->classwork_id;
        $newQuestion->question = '<p>'.'New Question '.$request->new_number.'</p>';
        $newQuestion->answer = '<p>Option 1</p>';
        $newQuestion->points = 1;
        $newQuestion->type = "Multiple Choice";
        $newQuestion->save();

        if(!$newQuestion){
            return response()->json([
                "message" => "Something went wrong while adding question!",
                "success" => false
            ]);
        }


        $choices_id = [];
        for ($i=0; $i < 4; $i++) { 
            $QuestionChoice  = new tbl_choice;
            $QuestionChoice->question_id = $newQuestion->id;
            $QuestionChoice->Choice = '';
            $QuestionChoice->save();
            $choices_id[$i] = $QuestionChoice->id;
        }

       

        return response()->json([
            "message" => "Question Succesfully Added!",
            "question_id"=> $newQuestion->id,
            "choices_id"=> $choices_id,
            "success" => true
        ]);
      
    }

    

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function AddNewOption(Request $request)
    {

        $NewChoice  = new tbl_choice;
        $NewChoice->question_id = $request->question_id;
        $NewChoice->save();
        return response()->json([
            "message" => "New Option Added!",
            "newChoice_id"=> $NewChoice->id,
            "success" => true
        ]);
      
    }

    /**
     * Remove the specified resource from storage.
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function removeQuestionOption(Request $request, $id)
    {
        $RemoveOption = tbl_choice::find($id);
        if($RemoveOption){
            $RemoveOption->delete();
            return "Option Successfully Remove.";
        }
        return "Option not found";
    }

    /**
     * Remove the specified resource from storage.
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function removeQuestionMatch(Request $request, $id){
        $DelAnswerSubQuestion = tbl_SubQuestion::find($request->sub_question_id);
        if($DelAnswerSubQuestion){
            $DelAnswer = tbl_choice::find($request->answer_id);
            if($DelAnswer){
                $DelAnswer->delete();
            }
            $DelAnswerSubQuestion->delete();
            return "Match Successfully Remove.";
        }
        return "Match not found";
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function StoreDuplicateQuestion(Request $request, $id)
    {

        //return   $request;

        $counter = 0;
        $question_id = array();
        $answer_id = array();
        $totalPoints = 0;
        foreach($request->question as $mainItem){
            $newQuestion  = new tbl_Questions;
            $newQuestion->classwork_id = $id;
            $newQuestion->question = $mainItem['question'];
            $newQuestion->answer =  $mainItem['answer'];
            $newQuestion->points = $mainItem['points'];
            $newQuestion->type =  $mainItem['type'];
            $newQuestion->sensitivity = $mainItem['sensitivity'];
            $newQuestion->save();
            $question_id[] =   $newQuestion->id;
     
           
            if($mainItem['type'] != 'Matching type'){
                $choices_id = array();
                foreach($request->answer[$counter]['options'] as $choices_Item){
                    $NewChoice  = new tbl_choice;
                    $NewChoice->question_id = $newQuestion->id;
                    $NewChoice->Choice = $choices_Item['Choice'];
                    $NewChoice->save();
                    $choices_id[] = $NewChoice->id;
                    
                }
                $answer_id[] = ['options_id' =>  $choices_id, 'SubQuestion_id' =>[], 'SubAnswer_id'=>[]];
            }
            else{
                $sub_counter = 0;
                $sub_question_id = array();
                $sub_answer_id = array();
                foreach($request->answer[$counter]['SubAnswer'] as $sub_question){
                    $QuestionChoice  = new tbl_choice;
                    $QuestionChoice->question_id = $newQuestion->id;
                    $QuestionChoice->Choice = $sub_question['Choice'];
                    $QuestionChoice->save();
                    $sub_answer_id[] = $QuestionChoice->id;

                    $SubQuestion = new tbl_SubQuestion;
                    $SubQuestion->mainQuestion_id = $newQuestion->id;
                    $SubQuestion->answer_id = $QuestionChoice->id;
                    $SubQuestion->sub_question = $request->answer[$counter]['SubQuestion'][$sub_counter]['sub_question'];
                    $SubQuestion->save();
                    $sub_question_id[] = $SubQuestion->id;
                    $sub_counter++;
                }
                $answer_id[] = ['options_id' =>[], 'SubQuestion_id' => $sub_question_id, 'SubAnswer_id'=> $sub_answer_id];
            }

            $totalPoints += $mainItem['points'];
            $counter++;
            
        }

        $NewPoints = tbl_classwork::find($id);
        $tmp_points = ($NewPoints->points + $totalPoints);
        $NewPoints->points = $tmp_points;
        $NewPoints->save();
    
        return ["answer_id"=> $answer_id , "question_id"=>$question_id];      
    }
        
    

    

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function UpdateQuestion(Request $request, $id)
    {

       
      return $request;
        $updateQuestion = tbl_Questions::find($id);
        if($updateQuestion){
            $oldType = $updateQuestion->type;
            $updateQuestion->question = $request->question['question'];
            $updateQuestion->answer = $request->question['answer'];
            $updateQuestion->points = $request->question['points'] == '' || $request->question['points'] == null ? 0 : $request->question['points'];
            $updateQuestion->sensitivity = $request->question['sensitivity'];
            $updateQuestion->type = $request->question['type'];
            $updateQuestion->save();

            if($request->question['type'] == "Multiple Choice" || $request->question['type'] == 'Identification'){ 
                foreach($request->answer as $item){
                    $checkChoice = tbl_choice::find($item['id']);
                    if($checkChoice){
                        $checkChoice->Choice = $item['Choice'];
                        $checkChoice->save();
                    }
                    else{
                        $updateChoice  = new tbl_choice;
                        $QuestionChoice->question_id = $id;
                        $updateChoice->Choice = $item['Choice'];
                        $updateChoice->save();
                    }
                }
            }
            elseif ($request->question['type'] == 'Matching type'){
                $currentIndex = 0;
                foreach($request->answer['SubQuestion'] as $item){    
                    $checkSubQuestion = tbl_SubQuestion::find($item['id']);
                    if($checkSubQuestion){
                        $checkSubQuestion->sub_question = $item['sub_question'];
                        $checkSubQuestion->save();

                        $checkSubQuestionAnswer = tbl_choice::find($request->answer['SubAnswer'][$currentIndex]['id']);
                        if($checkSubQuestionAnswer){
                            $checkSubQuestionAnswer->Choice = $request->answer['SubAnswer'][$currentIndex]['Choice'];
                            $checkSubQuestionAnswer->save();
                        }
                        else{
                            $NewSubQuestionAnswer  = new tbl_choice;
                            $NewSubQuestionAnswer->question_id = $updateQuestion->id;
                            $NewSubQuestionAnswer->Choice = $request->answer['SubAnswer'][$currentIndex]['Choice'];
                            $NewSubQuestionAnswer->save();

                            $checkSubQuestion->answer_id = $NewSubQuestionAnswer->id;
                            $checkSubQuestion->save();
                        }
                        
                    }
                    else{

                        $checkSubQuestionAnswer = tbl_choice::find($request->answer['SubAnswer'][$currentIndex]['id']);
                        if($checkSubQuestionAnswer){
                            $checkSubQuestionAnswer->Choice = $request->answer['SubAnswer'][$currentIndex]['Choice'];
                            $checkSubQuestionAnswer->save();

                            $NewSubQuestion  = new tbl_SubQuestion;
                            $NewSubQuestion->mainQuestion_id = $updateQuestion->id;
                            $NewSubQuestion->sub_question = $item['sub_question'];
                            $NewSubQuestion->answer_id = $checkSubQuestionAnswer->id;
                            $NewSubQuestion->save(); 
                        }
                        else{
                            $NewSubQuestionAnswer  = new tbl_choice;
                            $NewSubQuestionAnswer->question_id = $updateQuestion->id;
                            $NewSubQuestionAnswer->Choice = $request->answer['SubAnswer'][$currentIndex]['Choice'];
                            $NewSubQuestionAnswer->save();

                            $NewSubQuestion  = new tbl_SubQuestion;
                            $NewSubQuestion->mainQuestion_id = $updateQuestion->id;
                            $NewSubQuestion->sub_question = $item['sub_question'];
                            $NewSubQuestion->answer_id = $NewSubQuestionAnswer->id;
                            $NewSubQuestion->save(); 
                        }
                    } 
                    $currentIndex++;  
                }
            }



           /*  elseif($oldType != $request->question['type']){
                if($oldType == 'Multiple Choice'){
                    $RemoveOptions = tbl_choice::where('question_id', $id)->delete();
                }
                else{
                    if($request->question['type'] == 'Multiple Choice'){
                        foreach($request->answer as $item){
                            $checkChoice = tbl_choice::find($item['id']);
                            if($checkChoice){
                                $checkChoice->Choice = $item['Choice'];
                                $checkChoice->save();
                            }
                            else{
                                $updateChoice  = new tbl_choice;
                                $updateChoice->question_id = $id;
                                $updateChoice->Choice = $item['Choice'];
                                $updateChoice->save();
                            }
                        }
                    }
                }  
            } */

            return response()->json([
                "message" => "Question Succefully Updated!",
                "success" => true
            ]);
        }
      
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function SaveAllQuestion(Request $request, $id)
    {
        //return $request;
        //return $request->Answer[3];
        //return $request;
        //return $request->Answer[3]['SubQuestion'];
        $currentIndex = 0;
        $totalPoints = 0;
        foreach($request->Question as $mainItem){
            $checkQuestion = tbl_Questions::find($mainItem['id']);
            if($checkQuestion){
                $checkQuestion->question = $mainItem['question'];
                $checkQuestion->answer = $mainItem['answer'];
                $checkQuestion->points = $mainItem['points'] == '' || $mainItem['points'] == null ? 0 : $mainItem['points'];
                $checkQuestion->sensitivity = $mainItem['sensitivity'];
                $checkQuestion->type = $mainItem['type'];
                $checkQuestion->save();

                if($mainItem['type'] == 'Multiple Choice' || $mainItem['type'] == 'Identification'){
                    foreach($request->Answer[$currentIndex]['options'] as $Ans){
                        $checkOption = tbl_choice::find($Ans['id']);
                        if($checkOption){
                            $checkOption->Choice = $Ans['Choice'];
                            $checkOption->save();
                        }
                        else{
                            $newOption  = new tbl_choice;
                            $newOption->question_id = $checkQuestion->id;
                            $newOption->Choice = $Ans['Choice'];
                            $newOption->save();
                        }
                    }
                }
                elseif($mainItem['type'] == 'Matching type'){
                    $matchIndex = 0;
                    foreach($request->Answer[$currentIndex]['SubQuestion'] as $SubQues){
                        $checkSubQuestion = tbl_SubQuestion::find($SubQues['id']);
                        if($checkSubQuestion){
                            $checkSubQuestion->sub_question = $SubQues['sub_question'];
                            $checkSubQuestion->save();

                            $checkOption = tbl_choice::find($request->Answer[$currentIndex]['SubAnswer'][$matchIndex]['id']);
                            if($checkOption){
                                $checkOption->Choice = $request->Answer[$currentIndex]['SubAnswer'][$matchIndex]['Choice'];
                                $checkOption->save();
                            }
                            else{
                                $NewSubQuestionAnswer  = new tbl_choice;
                                $NewSubQuestionAnswer->question_id =  $checkQuestion->id;
                                $NewSubQuestionAnswer->Choice = $request->Answer[$currentIndex]['SubAnswer'][$matchIndex]['Choice'];
                                $NewSubQuestionAnswer->save();
                            }
                        }
                        else{
                            $SubQuestion = new tbl_SubQuestion;
                            $SubQuestion->mainQuestion_id = $checkQuestion->id;
                            $SubQuestion->sub_question = $SubQues['sub_question'];
                            $SubQuestion->save(); 

                            if($SubQuestion){
                                $SubQuestionAnswer  = new tbl_choice;
                                $SubQuestionAnswer->question_id = $checkQuestion->id;
                                $SubQuestionAnswer->Choice = $request->Answer[$currentIndex]['SubAnswer'][$matchIndex]['Choice'];
                                $SubQuestionAnswer->save();
                                $SubQuestion->answer_id = $SubQuestionAnswer->id;
                                $SubQuestion->save(); 
                            }
                        }

                        $matchIndex++;
                    }
                }
            }
            $currentIndex++;
            $totalPoints += $checkQuestion->points;
            


        }

        $UpdatePoints = tbl_classwork::find($id);
        $UpdatePoints->points = $totalPoints;
        $UpdatePoints->save();


        return response()->json([
            "message" => "All Questions Succesfully Added!",
            "success" => true
        ]);
      
    }


    

     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function DeleteSelectedQuestion(Request $request, $id)
    {
       
        $totalPoints = 0;
        $UpdatePoints = tbl_classwork::find($id);
        foreach($request->question as $item){
            $DelQuestion = tbl_Questions::find($item['question_id']);
            if($DelQuestion){
                $DelAnswer = tbl_choice::where('question_id', $DelQuestion->id)->delete();
                $DelAnswerSubQuestion = tbl_SubQuestion::where('mainQuestion_id', $DelQuestion->id)->delete();
                $totalPoints += $DelQuestion->points;
                $DelQuestion->delete();
            }
        }

       
        $UpdatePoints->points = $UpdatePoints->points - $totalPoints;
        $UpdatePoints->save();
       
        return response()->json([
            "message" => "Questions Succesfully remove!",
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
            //return  $request;
            $userId = auth('sanctum')->id();
            $StoreAnwers = tbl_Submission::find($id);
            if($StoreAnwers){
                $checkClasswork = tbl_classwork::find($StoreAnwers->classwork_id);
                if($checkClasswork->isNew == null){
                    $StoreAnwers->Submitted_Answers = serialize($request->data);
                    $StoreAnwers->save();
                }
                else{
                    
                    //return $request->data;
                    foreach($request->data as $item){
                        if($item['type'] == 'Multiple Choice' || $item['type'] == 'Identification' || $item['type'] == 'True or False' || $item['type'] == 'Essay' ){

                            $checkSubmitted = tbl_Submitted_Answer::where('classwork_id', $checkClasswork->id)
                            ->where('question_id', $item['Question_id'])
                            ->where('user_id', $userId)
                            ->first();

                            if($checkSubmitted){
                                $checkSubmitted->answer = $item['Answer'];
                                $checkSubmitted->save();
                            }
                            else{
                                $SubmittedAnswer  = new tbl_Submitted_Answer;
                                $SubmittedAnswer->question_id = $item['Question_id'];
                                $SubmittedAnswer->user_id = $userId;
                                $SubmittedAnswer->classwork_id = $checkClasswork->id;
                                $SubmittedAnswer->type = $item['type'];
                                $SubmittedAnswer->answer = $item['Answer'];
                                $SubmittedAnswer->save();
                            }

                        }
                        else{
                          
                                $checkSubmitted = tbl_Submitted_Answer::where('classwork_id', $checkClasswork->id)
                                ->where('question_id', $item['Question_id'])
                                ->where('user_id', $userId)
                                ->first();

                                if($checkSubmitted){
                                    $checkSubmitted->answer = serialize($item['Answer']);
                                    $checkSubmitted->Choices_id = serialize($item['Choices_id']);
                                    $checkSubmitted->save();
                                }
                                else{
                                    $SubmittedAnswer  = new tbl_Submitted_Answer;
                                    $SubmittedAnswer->question_id = $item['Question_id'];
                                    $SubmittedAnswer->user_id = $userId;
                                    $SubmittedAnswer->classwork_id = $checkClasswork->id;
                                    $SubmittedAnswer->type = $item['type'];
                                    $SubmittedAnswer->answer = serialize($item['Answer']);
                                    $SubmittedAnswer->Choices_id = serialize($item['Choices_id']) ;
                                    $SubmittedAnswer->save();
                                }
                             
                        }
                        
                    }
                }
               
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
            $DelAnswer = tbl_choice::where('question_id', $id)->delete();
            $DelAnswerSubQuestion = tbl_SubQuestion::where('mainQuestion_id', $id)->delete();
            $UpdatePoints = tbl_classwork::find($DelQuestion->classwork_id);
            $UpdatePoints->points = $UpdatePoints->points - $DelQuestion->points;
            $UpdatePoints->save();
            $DelQuestion->delete();
            return response()->json([
                "message" => "Questions Succesfully remove!",
                "success" => true
            ]);

        }
        return response()->json([
            "message" => "Questions does not exist!",
            "success" => false
        ]);
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
        
        $userId = auth('sanctum')->id();
        $classwordDetails = tbl_classwork::find($id);
        $Questions = tbl_Questions::where('tbl_questions.classwork_id', $id)
        ->Select('tbl_questions.id', 'tbl_questions.type','tbl_questions.answer','tbl_questions.points' ,'tbl_questions.sensitivity')
        ->get();

        $score = 0;
        foreach($request->item as $cl){
                foreach($Questions as $ques){
                if($ques['id'] == $cl['Question_id']){
                    if($cl['type'] == 'Multiple Choice' || $cl['type'] == 'Identification' || $cl['type'] == 'True or False'){
                        $userAns = $ques['sensitivity'] ? $cl['Answer'] : strtolower($cl['Answer']);
                        $questionAns = $ques['sensitivity'] ? $ques['answer'] : strtolower($ques['answer']);

                        if($cl['type'] == 'Identification'){
                            if($questionAns == $userAns){
                                $score += $ques['points'];
                            }
                            else{
                                $answer_list = tbl_choice::where('question_id', $ques['id'])->get();
                                $check = false;
                                foreach($answer_list as $answer){
                                    $other_answer =  $ques['sensitivity'] ? $answer->Choice : strtolower($answer->Choice);
                                    if($other_answer == $userAns){
                                        $check = true;
                                    }
                                }

                                if($check == true){
                                    $score += $ques['points'];
                                }
                            }
                        }
                        else{
                            $score = $questionAns == $userAns ? ($score + $ques['points']) : $score;  
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
        }   
        
        $this->sendSubmitNotification($classwordDetails->id,$userId);
    }

   public function sendSubmitNotification($classwork_id,$userId){
        $courseAndClassId = tbl_classClassworks::where('tbl_class_classworks.classwork_id', $classwork_id)
        ->select('tbl_classes.id', 'tbl_classes.course_id')
        ->leftJoin('tbl_classes','tbl_classes.id','=','tbl_class_classworks.class_id')
        ->first();
 
    
         $submissionCount = tbl_Submission::where('classwork_id', $classwork_id)->count();
         $submissionCount =  $submissionCount -1;
         $user = tbl_userDetails::where('user_id', $userId)->select('firstName', 'lastName')->first();
 
         $CheckNotif = tbl_notification::where('notification_attachments', $classwork_id)->where('notification_type', 6)->first();
         $classwork_details = tbl_classwork::find($classwork_id);
     
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

             $newNotification->notification_attachments = $classwork_id;
             $newNotification->notification_type = 6;
             $newNotification->save();
         }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function CheckStudentScore($id)
    {
        $userId = auth('sanctum')->id();
        $Submission = tbl_Submission::find($id);

        if($Submission){
            $SubmittedAnswer = unserialize($Submission->Submitted_Answers);
        
            $Questions = tbl_Questions::where('tbl_questions.classwork_id', $Submission->classwork_id)
            ->Select('tbl_questions.id', 'tbl_questions.type','tbl_questions.answer','tbl_questions.points' ,'tbl_questions.sensitivity')
            ->get();

            $score = 0;
            foreach($SubmittedAnswer as $cl){
                    foreach($Questions as $ques){
                    if($ques['id'] == $cl['Question_id']){
                        if($cl['type'] == 'Multiple Choice' || $cl['type'] == 'Identification' || $cl['type'] == 'True or False'){
                            $userAns = $ques['sensitivity'] ? $cl['Answer'] : strtolower($cl['Answer']);
                            $questionAns = $ques['sensitivity'] ? $ques['answer'] : strtolower($ques['answer']);

                            if($cl['type'] == 'Identification'){
                                if($questionAns == $userAns){
                                    $score += $ques['points'];
                                }
                                else{
                                    $answer_list = tbl_choice::where('question_id', $ques['id'])->get();
                                    $check = false;
                                    foreach($answer_list as $answer){
                                        $other_answer =  $ques['sensitivity'] ? $answer->Choice : strtolower($answer->Choice);
                                        if($other_answer == $userAns){
                                            $check = true;
                                        }
                                    }

                                    if($check == true){
                                        $score += $ques['points'];
                                    }
                                }
                            }
                            else{
                                $score = $questionAns == $userAns ? ($score + $ques['points']) : $score;  
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
                                }
                            }
                        }
                    }
                }
            }

            $Submission->points = $score;
            $Submission->save();
            return $Submission->points;

        }
        return;

       
    }
 
}
