<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_classwork;
use App\Models\tbl_classClassworks;
use App\Models\tbl_Questions;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class ClassworkController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $userId = auth('sanctum')->id();
        if(auth('sanctum')->user()->role != 'Student'){
            
            $classwork = tbl_classwork::where('course_id',  $id)
            ->orderBy('created_at', 'DESC')
            ->get();
            return $classwork;
        }
        else{
            $classworkAll = tbl_classClassworks::where('tbl_userclasses.course_id','=', $id)
            ->where('tbl_userclasses.user_id','=', $userId)
            ->select('tbl_class_classworks.*', 'tbl_classworks.type', 'tbl_classworks.title', 'tbl_classworks.points'
            ,'tbl_classworks.instruction', 'tbl_submissions.status', 'tbl_submissions.points as score', 'tbl_submissions.created_at as Sub_date')
            ->leftJoin('tbl_classworks', 'tbl_classworks.id', '=', 'tbl_class_classworks.classwork_id')
            ->leftJoin('tbl_userclasses', 'tbl_class_classworks.class_id', '=', 'tbl_userclasses.class_id')
            ->leftJoin('tbl_submissions', 'tbl_submissions.classwork_id', '=', 'tbl_class_classworks.classwork_id')
            ->orderBy('created_at', 'DESC')
            ->get();
            return $classworkAll;  
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
        $userId = auth('sanctum')->id();
        $newClasswork = new tbl_classwork;
        $newClasswork->course_id = $request->course_id;
        $newClasswork->module_id = 1;
        $newClasswork->user_id = $userId;
        $newClasswork->type =  $request->type;
        $newClasswork->title =  $request->title;
        $newClasswork->instruction =  $request->instruction;
        if($request->type == "Subjective Type"){
            $newClasswork->attachment_name =  $request->attachment_name;
            $newClasswork->attachment_size =  $request->attachment_size;
    
            $file = $request->file('file');
            if($file != ""){
                $newFile = $file->store('public/upload/classworkAttachments/'.$userId);
                $newClasswork->attachment = preg_replace('/\bpublic\/\b/', '', $newFile);
            }
        }
        $newClasswork->duration =  $request->duration;
        $newClasswork->points =  $request->points;
        $newClasswork->save();
        return $newClasswork;
    }

    /**
     * Display the specified resource.
     *
     *  @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function ShareClasswork(Request $request)
    {
        //return $request;
       
        $userId = auth('sanctum')->id();
        $Check = tbl_classClassworks::where('class_id','=', $request->get('class_id'))
        ->where('classwork_id','=',$request->get('classwork_id'))
        ->exists();

        if($Check){
            $Unshare = tbl_classClassworks::where('class_id','=', $request->get('class_id'))
            ->where('classwork_id','=',$request->get('classwork_id'))
            ->delete();
            return "Unshare";
        }

        $shareClasswork = new tbl_classClassworks;
        $shareClasswork->class_id = $request->get('class_id');
        $shareClasswork->classwork_id = $request->get('classwork_id');
        $shareClasswork->enable_due =  $request->get('EnableDue') == 'true' ? 1 : 0;
      
        $request->get('EnableDue') == 'true' ? $shareClasswork->due_date = $request->get('due_date') : '';
        $shareClasswork->showAnswer =  $request->get('showAnswer') == 'true' ? 1 : 0;
        if($request->get('showAnswer') == 'true'){
            $request->get('showAnswerType') == 'Set Date' ? $shareClasswork->showDate = $request->get('showAnswerDate') : '';
        }
        //$request->get('showAnswer') == 'true' ? $shareClasswork->showDate = $request->get('showAnswerDate') : '';
        $shareClasswork->response_late = $request->get('response_late') == 'true'  ? 1 : 0;
        $shareClasswork->grading_criteria = $request->get('grading_id');
        $shareClasswork->save();
        return $shareClasswork;
  
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $userId = auth('sanctum')->id();
        $classworkDetails;
        if(auth('sanctum')->user()->role != 'Student'){
            $classworkDetails = tbl_classwork::where('tbl_classworks.id','=', $id)
            ->get();
        }
        else{
            $classworkDetails = tbl_classwork::where('tbl_classworks.id','=', $id)
            ->select('tbl_classworks.*', 
            'tbl_class_classworks.enable_due','tbl_class_classworks.due_date','tbl_class_classworks.showAnswer','tbl_class_classworks.showDate',
            'tbl_class_classworks.response_late',
            'tbl_userclasses.user_id')
            ->leftJoin('tbl_class_classworks', 'tbl_class_classworks.classwork_id','=','tbl_classworks.id')
            ->leftJoin('tbl_userclasses', 'tbl_userclasses.user_id','=', 'tbl_classworks.user_id')
            ->get();
        }

        $Items = tbl_Questions::where('classwork_id','=', $id)
        ->select('tbl_questions.points')
        ->get();
        $count = 0;
        $points = 0;
        foreach($Items as $i){
            $count++;
            $points+= $i->points;
        }
        return ['Details'=>$classworkDetails,'ItemsCount'=>$count,'totalpoints'=>$points];
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
        $UpdateClasswork = tbl_classwork::find($id);
        if($UpdateClasswork){
            $UpdateClasswork->type =  $request->type;
            $UpdateClasswork->title =  $request->title;
            $UpdateClasswork->instruction =  $request->instruction;
            $UpdateClasswork->type == "Subjective Type" ? $UpdateClasswork->points =  $request->points : '';
            $UpdateClasswork->duration =  $request->duration;
            $UpdateClasswork->save();
            return $UpdateClasswork;
        }
        return "Classwork not found";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $userId = auth('sanctum')->id();
        $DelCLasswork = tbl_classwork::find($id);
        if($DelCLasswork){
            if($DelCLasswork->type == "Objective Type"){
                $DelClass_Classwork = tbl_classClassworks::where('tbl_class_classworks.classwork_id', $id)
                ->leftJoin('tbl_questions', 'tbl_questions.classwork_id','=','tbl_class_classworks.classwork_id')
                ->LeftJoin('tbl_choices', 'tbl_choices.question_id','=', 'tbl_questions.id')
                ->LeftJoin('tbl_sub_questions', 'tbl_sub_questions.mainQuestion_id','=', 'tbl_questions.id')
                ->LeftJoin('tbl_question_analytics', 'tbl_question_analytics.question_id','=', 'tbl_questions.id')
                ->delete();
            }
            elseif($DelCLasswork->type == "Subjective Type"){
                $DelClass_Classwork = tbl_classClassworks::where('tbl_class_classworks.classwork_id', $id)
                ->delete();
                Storage::delete('public/'.$DelCLasswork->attachment);

            }
            $DelCLasswork->delete();
            return "Successfully Remove";
        }
    }
}
