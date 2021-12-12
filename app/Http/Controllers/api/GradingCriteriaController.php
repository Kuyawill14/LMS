<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_main_gradeCategory;
use App\Models\tbl_classClassworks;


class GradingCriteriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($course_id)
    {
        //
        $gradingCriteria =  tbl_main_gradeCategory::select('*')
        ->where('course_id' , '=' ,$course_id)
        ->orderBy('id', 'asc')
        ->get();

        foreach($gradingCriteria as $item){
            $classwork_count = tbl_classClassworks::where('grading_criteria', $item->id)->count();
            $item->publish_count =  $classwork_count;
        }
        return  $gradingCriteria;
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
        $error_message = ['error'];
        $hasError = false;
        $criteriaCheck = false;
     
        $getPercentage = $request->grading_criteria['percentage'];
        $gradingCriteria = new tbl_main_gradeCategory;
        $criteriaCheck = $gradingCriteria ::
        where('name' , '=' ,$request->grading_criteria['name'])
        ->where('course_id' , '=' ,$request->grading_criteria['course_id'])
        ->exists();


        $pencentageSum = DB::table('tbl_main_grade_categories')
        ->where('course_id', '=', $request->grading_criteria['course_id'])
        ->sum('percentage');
        
       
        if(($pencentageSum + $getPercentage) > 100) {
            $hasError = true;
            array_push($error_message,'Total Percentage must not be greater than 100');
        }
        if($criteriaCheck == true) {
            $hasError = true;
            array_push($error_message,'Criteria name already exists');
        
        } 
         if($hasError == false){
            $newGradingCriteria = new tbl_main_gradeCategory;
            $newGradingCriteria->name = $request->grading_criteria['name'];
            $newGradingCriteria->percentage = $request->grading_criteria['percentage'];
            $newGradingCriteria->course_id = $request->grading_criteria['course_id'];
            $newGradingCriteria->save();
           
            return $newGradingCriteria;
        }
      
        return  response()->json($error_message);


    }

    public function deleteCriteria($id)
    {
        $critera = tbl_main_gradeCategory::find($id);
        if($critera){
            $critera->delete();
            return $critera;
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
         $newGradingCriteria =  tbl_main_gradeCategory::find($id);
          $error_message = ['error'];
          $hasError = false;
          $criteriaCheck = false;
       
          $getPercentage = $request->grading_criteria['percentage'];
          $gradingCriteria = new tbl_main_gradeCategory;
          $criteriaCheck = $gradingCriteria ::
          where('id' , '=' ,$id)
          ->get();
         
          
        //   $criteriaCheck = json_decode($criteriaCheck, true);

  
          $pencentageSum = DB::table('tbl_main_grade_categories')
          ->where('course_id', '=', $request->grading_criteria['course_id'])
          ->sum('percentage');
      
        //   if($criteriaCheck[0]->percentage ==$getPercentage) {
        //     $getPercentage = 0;
        //   }

        if($getPercentage  != $criteriaCheck[0]->percentage ) {
            if((($pencentageSum  - $criteriaCheck[0]->percentage) +  $getPercentage  ) > 100) {
                $hasError = true;
                array_push($error_message,'Total Percentage must not be greater than 100');
                $newGradingCriteria->percentage = 0;
                $newGradingCriteria->save();
           }
        }
        if( $criteriaCheck[0]->name == $request->grading_criteria['percentage']) {
            $hasError = true;
                  array_push($error_message,'Criteria name already exists');
         }

      
       
           if($hasError == false){
             

              $newGradingCriteria->name = $request->grading_criteria['name'];
              $newGradingCriteria->percentage = $request->grading_criteria['percentage'];
              $newGradingCriteria->course_id = $request->grading_criteria['course_id'];
              $newGradingCriteria->save();
            
              return $newGradingCriteria;
          }
        
          return  response()->json($error_message);
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
