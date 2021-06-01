<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_student_sub_module_progress;
use App\Models\tbl_userclass;
class StudentSubModuleProgressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
      
          $userId = auth('sanctum')->id();
          $allSubModules = DB::table('tbl_student_sub_module_progress')
          ->select('tbl_student_sub_module_progress.*')
          ->leftJoin('tbl_sub_modules', 'tbl_sub_modules.id', '=', 'tbl_student_sub_module_progress.sub_module_id')
          ->where('tbl_student_sub_module_progress.course_id', $id )
          ->where('tbl_student_sub_module_progress.student_id',  $userId )
          ->get();
          return $allSubModules;
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
        $studentSubModuleProgress =  new tbl_student_sub_module_progress;
        $studentClass = new tbl_userclass;
        $userId = auth('sanctum')->id();
        $CheckProgress = $studentSubModuleProgress::
        where('main_module_id','=', $request->studentProgress['main_module_id'])
        ->where('sub_module_id','=',$request->studentProgress['sub_module_id'])
        ->where('student_id','=',$userId)
        ->exists();

        if($CheckProgress == false){
            
            $getClassId = $studentClass::
            select('class_id')
            ->where('course_id', '=' , $request->studentProgress['course_id'])
            ->where('user_id', '=' , $userId)
            ->get();

       
            $studentSubModuleProgress->sub_module_id = $request->studentProgress['sub_module_id'];
            $studentSubModuleProgress->main_module_id = $request->studentProgress['main_module_id'];
            $studentSubModuleProgress->student_id = $userId;
            $studentSubModuleProgress->class_id = $getClassId[0]->class_id;
            $studentSubModuleProgress->course_id = $request->studentProgress['course_id'];
            $studentSubModuleProgress->type = $request->studentProgress['type'];
            $studentSubModuleProgress->completed = 0;
            $studentSubModuleProgress->save();

            return $studentSubModuleProgress;


        } else {
            $remove =  $studentSubModuleProgress::
            where('main_module_id','=', $request->studentProgress['main_module_id'])
            ->where('sub_module_id','=',$request->studentProgress['sub_module_id'])
            ->where('student_id','=',$userId)
            ->delete();

        }
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
