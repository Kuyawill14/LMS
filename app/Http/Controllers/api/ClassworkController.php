<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_classwork;
use App\Models\tbl_classClassworks;
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
            ->select('tbl_class_classworks.*', 'tbl_classworks.type', 'tbl_classworks.title', 'tbl_classworks.description', 'tbl_classworks.due_date')
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
        $newClasswork->description =  $request->instruction;
        $newClasswork->due_date =  $request->due_date;
        $newClasswork->status =  0;
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
        $classworkDetails = tbl_classwork::where('tbl_classworks.course_id','=', $id)
        ->get();
        return $classworkDetails; 
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
