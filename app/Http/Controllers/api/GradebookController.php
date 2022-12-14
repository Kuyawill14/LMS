<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_main_gradeCategory;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_sub_modules;
use App\Models\tbl_userclass;

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
        'grading_criteria as grading_criteria_id',
        'tbl_classworks.points as hp_points'
        )
        ->leftJoin('tbl_userclasses' , 'tbl_userclasses.user_id' , '=' , 'users.id')
        ->leftJoin('tbl_class_classworks' , 'tbl_class_classworks.class_id' , '=' , 'tbl_userclasses.class_id')
        ->leftJoin('tbl_main_grade_categories' , 'tbl_main_grade_categories.id' , '=' , 'tbl_class_classworks.grading_criteria')
        ->leftJoin('tbl_classworks' , 'tbl_classworks.id' , '=' , 'tbl_class_classworks.classwork_id')

        ->where('tbl_userclasses.class_id', $class_id )
        ->where('role', 'Student')
        ->where('tbl_userclasses.deleted_at', null)
        ->orderBy('tbl_class_classworks.classwork_id', 'asc')
        ->get();

        $studentList = json_decode($studentList, true);

        $submissions = DB::table('tbl_submissions')
        ->select('tbl_submissions.classwork_id','status' ,'points', 'user_id')
        ->leftJoin('tbl_class_classworks' , 'tbl_class_classworks.classwork_id' , '=' , 'tbl_submissions.classwork_id')
        ->where('tbl_class_classworks.class_id', $class_id )
        ->orderBy('tbl_class_classworks.classwork_id', 'asc')
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
    public function fetchStudentClassworkGrades($class_id) {
        $userId = auth('sanctum')->id();

        $studentList = DB::table('users')
        ->select('users.id as student_id',
        'tbl_class_classworks.classwork_id',
        'tbl_userclasses.class_id',
        'grading_criteria as grading_criteria_id'
        )
        ->leftJoin('tbl_userclasses' , 'tbl_userclasses.user_id' , '=' , 'users.id')
        ->leftJoin('tbl_class_classworks' , 'tbl_class_classworks.class_id' , '=' , 'tbl_userclasses.class_id')
        ->leftJoin('tbl_main_grade_categories' , 'tbl_main_grade_categories.id' , '=' , 'tbl_class_classworks.grading_criteria')
        ->where('users.id', $userId )
        ->where('tbl_userclasses.class_id', $class_id )
        ->where('role', 'Student')
        ->where('tbl_userclasses.deleted_at', null)
        ->orderBy('tbl_class_classworks.classwork_id', 'asc')
        ->get();

        $studentList = json_decode($studentList, true);

        $submissions = DB::table('tbl_submissions')
        ->select('tbl_submissions.classwork_id','status' ,'points', 'user_id')
        ->leftJoin('tbl_class_classworks' , 'tbl_class_classworks.classwork_id' , '=' , 'tbl_submissions.classwork_id')
        ->where('tbl_submissions.user_id',$userId )
        ->where('tbl_class_classworks.class_id', $class_id )
        ->orderBy('tbl_class_classworks.classwork_id', 'asc')
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
   
    public function fetchStudentFinalGrades($class_id, $course_id) {
        $userId = auth('sanctum')->id();

        $classworks = DB::table('tbl_classworks')
        ->select('grading_criteria')
        ->selectRaw('sum(tbl_classworks.points) as total_points ')
        ->leftJoin('tbl_class_classworks' , 'tbl_class_classworks.classwork_id' , '=' , 'tbl_classworks.id')
        ->where('tbl_class_classworks.class_id', $class_id )
   
        ->groupBy('grading_criteria')
        ->get();
        $classworks = json_decode($classworks, true);

        $gradingCategory = DB::table('tbl_main_grade_categories')
        ->select('id as grade_category_id','percentage')
        ->where('course_id', $course_id)
        ->get();
        $gradingCategory = json_decode($gradingCategory, true);

        $submissions = DB::table('tbl_submissions')
        ->select('tbl_submissions.classwork_id','status' ,'points', 'user_id', 'tbl_class_classworks.grading_criteria as grading_criteria_id')
        ->leftJoin('tbl_class_classworks' , 'tbl_class_classworks.classwork_id' , '=' , 'tbl_submissions.classwork_id')
        ->where('tbl_submissions.user_id',$userId )
        ->where('tbl_class_classworks.class_id', $class_id )
        ->get();
        $submissions = json_decode($submissions, true);

        for($i=0; $i < count($gradingCategory); $i++) {
            $gradingCategory[$i]['points'] = 0 ;
            $gradingCategory[$i]['grade_percentage'] = 0 ;
            $gradingCategory[$i]['transmuted_grade_percentage'] = 0 ;
            for($j=0; $j < count($submissions); $j++) {
                if($gradingCategory[$i]['grade_category_id'] == $submissions[$j]['grading_criteria_id']) {
                    $gradingCategory[$i]['points'] += $submissions[$j]['points'];
                }
               
            }
           
            for($z=0; $z < count($classworks); $z++)
            if(  $classworks[$z]['grading_criteria'] == $gradingCategory[$i]['grade_category_id']) {
                $gradingCategory[$i]['grade_percentage'] = ($gradingCategory[$i]['points'] / $classworks[$z]['total_points']) * $gradingCategory[$i]['percentage'];
                $gradingCategory[$i]['transmuted_grade_percentage'] = (((($gradingCategory[$i]['points'] /  $classworks[$z]['total_points'])*100) /2) +50 ) * ($gradingCategory[$i]['percentage'] / 100) ;
                $gradingCategory[$i]['total_points'] =  $classworks[$z]['total_points'];
            }
        
        
            }


        return $gradingCategory;


    }

    public function fetchAllStudentFinalGrades($course_id, $class_id) {
        // $tbl_student_main_grades = new tbl_student_main_grades;
      
      
        $studentList = DB::table('users')
        ->select('users.id as student_id',
        'course_id',
        'class_id'
        )
        ->leftJoin('tbl_userclasses' , 'tbl_userclasses.user_id' , '=' , 'users.id')
        ->where('tbl_userclasses.class_id', $class_id )
        ->where('role', 'Student')
        ->where('tbl_userclasses.deleted_at', null)
        ->get();

        $studentList = json_decode($studentList, true);
  
        
        $classworks = DB::table('tbl_classworks')
        ->select('grading_criteria')
        ->selectRaw('sum(tbl_classworks.points) as total_points ')
        ->leftJoin('tbl_class_classworks' , 'tbl_class_classworks.classwork_id' , '=' , 'tbl_classworks.id')
        ->where('tbl_class_classworks.class_id', $class_id )
        ->groupBy('grading_criteria')
        ->get();
        $classworks = json_decode($classworks, true);

        $gradingCategory = DB::table('tbl_main_grade_categories')
        ->select('name','id as grade_category_id','percentage')
        ->where('course_id', $course_id)
        ->get();
        $gradingCategory = json_decode($gradingCategory, true);
 
        $submissions = DB::table('tbl_submissions')
        ->select('tbl_submissions.classwork_id','status' ,'points', 'user_id', 'tbl_class_classworks.grading_criteria as grading_criteria_id')
        ->leftJoin('tbl_class_classworks' , 'tbl_class_classworks.classwork_id' , '=' , 'tbl_submissions.classwork_id')
        ->where('tbl_class_classworks.class_id', $class_id )
        ->get();
        $submissions = json_decode($submissions, true);
        for($x=0; $x < count($studentList); $x++) {

            for($i=0; $i < count($gradingCategory); $i++) {
                $gradingCategory[$i]['points'] = 0 ;
                $gradingCategory[$i]['grade_percentage'] = 0 ;
                $gradingCategory[$i]['transmuted_grade_percentage'] = 0 ;
                for($j=0; $j < count($submissions); $j++) {
                    if($gradingCategory[$i]['grade_category_id'] == $submissions[$j]['grading_criteria_id'] && $submissions[$j]['user_id'] == $studentList[$x]['student_id']) {
                        $gradingCategory[$i]['points'] += $submissions[$j]['points'];
                    }
                }
             
                for($z=0; $z < count($classworks); $z++)
                if(  $classworks[$z]['grading_criteria'] == $gradingCategory[$i]['grade_category_id']) {
                    $classworks[$z]['total_points'] = $classworks[$z]['total_points'] ==0 ? 1 : $classworks[$z]['total_points'];
                    $gradingCategory[$i]['grade_percentage'] = ($gradingCategory[$i]['points'] / $classworks[$z]['total_points']) * $gradingCategory[$i]['percentage'];
                    $gradingCategory[$i]['transmuted_grade_percentage'] = (((($gradingCategory[$i]['points'] /  $classworks[$z]['total_points'])*100) /2) +50 ) * ($gradingCategory[$i]['percentage'] / 100) ;
                    $gradingCategory[$i]['total_points'] =  $classworks[$z]['total_points'];
                }
            
            
            }
            $studentList[$x]['grades'] =  $gradingCategory;
        }


        return $studentList;


    }

    // public function fetchAllStudentFinalGrades($class_id) {
    //     // $tbl_student_main_grades = new tbl_student_main_grades;
    //     // $userId = auth('sanctum')->id();

    //     $studentList = DB::table('users')
    //     ->select('users.id as student_id',
    //     'course_id',
    //     'class_id'
    //     )
    //     ->leftJoin('tbl_userclasses' , 'tbl_userclasses.user_id' , '=' , 'users.id')
    //     ->where('tbl_userclasses.class_id', $class_id )
    //     ->where('role', 'Student')
    //     ->get();

    //     $studentList = json_decode($studentList, true);
      
    //     $gradingCategory = DB::table('tbl_main_grade_categories')
    //     ->select('name','id as grade_category_id','percentage')
    //     ->where('course_id', $studentList[0]['course_id'])
    //     ->get();
    //     $gradingCategory = json_decode($gradingCategory, true);

    //     $student_main_grades = DB::table('tbl_student_main_grades')
    //     ->select('grade_category_id','grade','student_id')
    //     ->where('course_id', $studentList[0]['course_id'] )
    //     ->get();
    //     $student_main_grades = json_decode($student_main_grades, true);

        
    //     for($x=0; $x < count($studentList); $x++) {
    //         for($i=0; $i < count($gradingCategory); $i++) {
    //             $gradingCategory[$i]['grade'] = 0 ;
    //             for($j=0; $j < count($student_main_grades); $j++) {
    //                 if($gradingCategory[$i]['grade_category_id'] == $student_main_grades[$j]['grade_category_id'] && $student_main_grades[$j]['student_id'] == $studentList[$x]['student_id']) {
    //                    $gradingCategory[$i]['grade'] = $student_main_grades[$j]['grade'];
    //                 }
    //             }
             
              
            
    //         }
    //         $studentList[$x]['grades'] =  $gradingCategory;
    //     }


    //     return $studentList;


    // }
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
