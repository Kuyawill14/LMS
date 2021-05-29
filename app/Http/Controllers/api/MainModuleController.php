<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_main_modules;
use Illuminate\Support\Facades\DB;
class MainModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
     
        $allMainModules = DB::table('tbl_main_modules')
        ->select('tbl_main_modules.*')
        ->leftJoin('tbl_subject_courses', 'tbl_main_modules.course_id', '=', 'tbl_subject_courses.id')
        ->where('tbl_main_modules.course_id', $id )
        ->get();
        return $allMainModules;
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
   
 
         $mainModule  = new tbl_main_modules;
         $mainModule->module_name = $request->moduleForm['module_name'];
         $mainModule->description = $request->moduleForm['description'];
         $mainModule->course_id = $request->moduleForm['course_id'];
         $mainModule->save();
         return $mainModule;

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
