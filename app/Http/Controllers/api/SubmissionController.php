<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_Submission;
use App\Models\tbl_userclass;
use App\Models\User;

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

        $SubmissionList = tbl_Submission::where('tbl_submissions.classwork_id', $id)
        ->select('tbl_submissions.id', 'tbl_submissions.status', 'tbl_submissions.points',
        DB::raw('CONCAT(users.firstname, " ", users.lastName) as name'), 'tbl_submissions.Submitted_Answers')
        ->leftjoin('users','users.id','=','tbl_submissions.user_id')
        ->get();
        
        if(count($SubmissionList) != 0){
            $TempAnswer = unserialize($SubmissionList[0]->Submitted_Answers);
            $SubmissionList[0]->Submitted_Answers = $TempAnswer; 
        }
  
      
        return $SubmissionList;
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
