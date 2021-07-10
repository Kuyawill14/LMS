<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_Submission;
use Illuminate\Support\Facades\Hash;

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
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateScoreObj(Request $request, $id)
    {   

        $updateObj = tbl_Submission::where('id', $id)->first();
        if($updateObj){
            $TempAnswers = array();
            
            $Tmp = unserialize($updateObj->Submitted_Answers);
            if($request->check != true){
                $updateObj->points = ($updateObj->points - $request->points);
                foreach($Tmp as $item){
                    if($item['Question_id'] == $request->question_id){
                        $item['Answer'] = "";
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
                    $item['Answer'] =  $request->answer;
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
                $ResetSubmission->save();
                return "Reset Success";
           }
           return "Submission Not found";
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
