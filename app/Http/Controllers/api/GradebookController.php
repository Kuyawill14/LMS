<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_main_gradeCategory;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_sub_modules;
class GradebookController extends Controller
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

    public function fetchClassworks($class_id) {
        // $allSubModules = DB::table('tbl_sub_modules')
        // ->select(
        // 'tbl_classworks.title as name',
        // 'tbl_classworks.points as points',
        // 'tbl_classworks.id as classwork_id',
        // 'tbl_class_classworks.class_id as class_id'
        // )
        // ->leftJoin('tbl_class_classworks', 'tbl_classworks.id', '=', 'tbl_class_classworks.classwork_id')
        // ->leftJoin('tbl_classworks', 'tbl_classworks.id', '=', 'tbl_class_classworks.classwork_id')
        // ->where('tbl_class_classworks.class_id', $class_id )
        // ->get();
        // return $allSubModules;

        $classworks = DB::table('tbl_classworks')
        ->select('tbl_classworks.id as classwork_id','title','points','tbl_class_classworks.class_id as class_id', 'grading_criteria as grading_criteria_id')
        ->leftJoin('tbl_class_classworks', 'tbl_classworks.id', '=', 'tbl_class_classworks.classwork_id')
        ->leftJoin('tbl_main_grade_categories' , 'tbl_main_grade_categories.id' , '=' , 'tbl_class_classworks.grading_criteria')
        ->where('tbl_class_classworks.class_id', $class_id )
        ->get();

        return $classworks;
    }

    public function fetchClassworkGrades($class_id) {
        
        $studentList = DB::table('users')
        ->select('users.id as student_id',
        'tbl_class_classworks.classwork_id',
        'tbl_userclasses.class_id',
        'grading_criteria as grading_criteria_id'
        )
        ->leftJoin('tbl_userclasses' , 'tbl_userclasses.user_id' , '=' , 'users.id')
        ->leftJoin('tbl_class_classworks' , 'tbl_class_classworks.class_id' , '=' , 'tbl_userclasses.class_id')
        ->leftJoin('tbl_main_grade_categories' , 'tbl_main_grade_categories.id' , '=' , 'tbl_class_classworks.grading_criteria')
        ->where('tbl_userclasses.class_id', $class_id )
        ->where('role', 'Student')
        ->get();

        $studentList = json_decode($studentList, true);

        $submissions = DB::table('tbl_submissions')
        ->select('tbl_submissions.classwork_id','status' ,'points', 'user_id')
        ->leftJoin('tbl_class_classworks' , 'tbl_class_classworks.classwork_id' , '=' , 'tbl_submissions.classwork_id')
        ->where('tbl_class_classworks.class_id', $class_id )
        ->get();
        $submissions = json_decode($submissions, true);

        for($i=0; $i < count($studentList); $i++) {
            $studentList[$i]['points'] = null ;
            for($j=0; $j < count($submissions); $j++) {
                if($studentList[$i]['classwork_id'] == $submissions[$j]['classwork_id']  && $studentList[$i]['student_id'] == $submissions[$j]['user_id']){
                    $studentList[$i]['points'] =  $submissions[$j]['points'];
                }
            }

        }


        return $studentList;


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
