<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_Questions;

class AnalyticsController extends Controller
{
    /**
     * Display a listing of the resource.
     *@param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $analytics = tbl_Questions::where('tbl_questions.classwork_id','=',$id)
        ->select('tbl_questions.id','tbl_questions.question', 
        'tbl_question_analytics.correct_count','tbl_question_analytics.wrong_count','tbl_question_analytics.average_time')
        ->leftJoin('tbl_question_analytics', 'tbl_question_analytics.question_id', '=', 'tbl_questions.id')
        ->orderBy('tbl_questions.created_at','DESC')
        ->get();
        return $analytics;

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
