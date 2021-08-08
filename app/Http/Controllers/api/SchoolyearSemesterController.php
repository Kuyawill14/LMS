<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_semester;
use App\Models\tbl_schoolyear;
class SchoolyearSemesterController extends Controller
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
    public function fetchAllSchoolyear_Semester() {
        $schoolyears = tbl_schoolyear::select('id', 'schoolyear')
        ->orderBy('id', 'desc')
        ->get();

        $semesters = tbl_semester::select('id', 'semester')
        ->orderBy('id', 'desc')
        ->get();

        $result = [
            'school_year' => $schoolyears,
            'semester' => $semesters
        ];
        return $result;
    }

    public function addUpdateSchoolyear_semester(Request $request) {
    
        $id = $request->id;


        $type = $request->type;

        if($type == 'school_year') {
            $schoolyears =  tbl_schoolyear::find($id);
            if($schoolyears) {
                $schoolyears->schoolyear = $request->name;
                $schoolyears->save();
            } else {
                $schoolyears = new tbl_schoolyear;
                $schoolyears->schoolyear = $request->name;
                $schoolyears->save();
            }
        
            return $schoolyears;
        } 

        if($type == 'semester') {
        
            $semesters =  tbl_semester::find($id);
            
            if($semesters) {
                $semesters->semester = $request->name;
                $semesters->save();
            } else {
                $semesters = new tbl_semester;
                $semesters->semester = $request->name;
                $semesters->save();
            }
        

            return $semesters;
        } 
    }


    public function deleteSchoolyear_semester(Request $request) {

        $id = $request->id;


        $type = $request->type;

        if($type == 'school_year') {
            $schoolyears =  tbl_schoolyear::find($id);
            if($schoolyears) {
                $schoolyears->delete();
            } 
        
            return 'Succesfully Deleted';
        } 

        if($type == 'semester') {
        
            $semesters =  tbl_semester::find($id);
            
            if($semesters) {
                $semesters->semester = $request->name;
                $semesters->delete();
            } 
        

            return 'Succesfully Deleted';
        } 
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
