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
        $allSubModules = DB::table('tbl_sub_modules')
        ->select('tbl_sub_modules.id as sub_module_id',
        'tbl_classworks.title as name',
        'tbl_classworks.point as points',
        'tbl_classworks.id as classwork_id',
        'tbl_class_classworks.class_id as class_id'
        )
        
        ->leftJoin('tbl_classworks', 'tbl_sub_modules.classwork_id', '=', 'tbl_classworks.id')
        ->leftJoin('tbl_class_classworks', 'tbl_classworks.id', '=', 'tbl_class_classworks.classwork_id')
        ->where('tbl_class_classworks.class_id', $class_id )
        ->where('tbl_sub_modules.type', 'classwork' )
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
