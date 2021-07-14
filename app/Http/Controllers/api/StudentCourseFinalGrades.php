<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_student_course_subject_grades;
use App\Models\tbl_userclass;


class StudentCourseFinalGrades extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $userId = auth('sanctum')->id();
        //$userId = 1;
        $GradeList = tbl_userclass::where('tbl_userclasses.user_id', $userId)
        ->select('tbl_userclasses.course_id','tbl_userclasses.class_id','tbl_subject_courses.course_code',
        'tbl_student_course_subject_grades.final_grade')
        ->leftJoin('tbl_subject_courses','tbl_subject_courses.id', '=','tbl_userclasses.course_id')
        ->leftJoin('tbl_student_course_subject_grades','tbl_student_course_subject_grades.course_id', '=','tbl_userclasses.course_id')
        ->get();
        return $GradeList;
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
