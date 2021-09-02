<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_subjective_rubrics;
class SubjectiveTypeRubrics extends Controller
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

    public function fetchRubrics($classwork_id) {
        $rubrics =  tbl_subjective_rubrics::where('classwork_id',$classwork_id)
                    ->get();
        
        return $rubrics;


    }


    public function saveRubrics(Request $request, $classwork_id) {


  
        $data = $request->rubrics;
        
        for($i = 0; $i < count( $data ); $i++) {
            $oldRubrics =  tbl_subjective_rubrics::find($data[$i]['id']);

            if( $oldRubrics) {
                $oldRubrics->criteria_name = $data[$i]['criteria_name'];
                $oldRubrics->points = $data[$i]['points'];
                $oldRubrics->description = $data[$i]['description'];
                $oldRubrics->save();
            } else {
                if($data[$i]['criteria_name'] != '' && $data[$i]['points'] != '') {
                    $rubrics = new tbl_subjective_rubrics;
                    $rubrics->criteria_name = $data[$i]['criteria_name'];
                    $rubrics->points = $data[$i]['points'];
                    $rubrics->description = $data[$i]['description'];
                    $rubrics->classwork_id =  $classwork_id;
                    $rubrics->save();
                }
             
            }



        }

        return $oldRubrics;

    }

    public function deleteRubrics($classwork_id, $rubrics_id) {
    
        $oldRubrics =  tbl_subjective_rubrics::where('classwork_id', $classwork_id)->where('id', $rubrics_id);
       
        if( $oldRubrics) {
            $oldRubrics->delete();
            return "successfully deleted";
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
