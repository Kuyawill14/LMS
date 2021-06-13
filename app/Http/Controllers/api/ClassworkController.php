<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_classwork;
use App\Models\tbl_classClassworks;
use App\Models\tbl_Questions;
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
            ->select('tbl_class_classworks.*', 'tbl_classworks.type', 'tbl_classworks.title', 'tbl_classworks.instruction')
            ->leftJoin('tbl_classworks', 'tbl_classworks.id', '=', 'tbl_class_classworks.classwork_id')
            ->leftJoin('tbl_userclasses', 'tbl_class_classworks.class_id', '=', 'tbl_userclasses.class_id')
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
        $newClasswork->user_id = $userId;
        $newClasswork->type =  $request->type;
        $newClasswork->title =  $request->title;
        $newClasswork->instruction =  $request->instruction;
        $newClasswork->duration =  $request->duration;
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
        $shareClasswork->due_date = $request->get('due_date');
        //$shareClasswork->showAnswer = $request->get('showAnswer');
        if($request->get('showAnswer') == 'false'){
            $shareClasswork->showAnswer = 0;
        }else{
            $shareClasswork->showAnswer = 1;
        }
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
        /* $classworkDetails = tbl_classwork::where('tbl_classworks.id','=', $id)
        ->get();
        return $classworkDetails;  */
        $userId = auth('sanctum')->id();
        $classworkDetails;
        if(auth('sanctum')->user()->role != 'Student'){
            $classworkDetails = tbl_classwork::where('tbl_classworks.id','=', $id)
            ->get();
        }
        else{
   
            $classworkDetails = tbl_classwork::where('tbl_classworks.id','=', $id)
            ->select('tbl_classworks.*', 'tbl_class_classworks.due_date','tbl_userclasses.user_id')
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
            //$UpdateClasswork->due_date =  $request->due_date;
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
        //
    }
}
