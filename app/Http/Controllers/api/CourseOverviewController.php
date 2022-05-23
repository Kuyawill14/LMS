<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_classwork;
use App\Models\tbl_teacher_course;
use App\Models\Tbl_class;
use App\Models\tbl_userclass;
use App\Models\tbl_classClassworks;
use App\Models\tbl_subject_course;
use App\Models\tbl_main_modules;
use App\Models\tbl_Submission;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\api\tbl_classes;
class CourseOverviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function overview($id)
    {
        //return '1222'
        $overview = [];
        $userId = auth('sanctum')->id();

            $overview['classworks_list'] = $this->classworkList($id);
            $overview['course_summary'] = $this->courseSummary($id);
            $overview['modules_list'] = $this->moduleList($id);
            
            return $overview;
        
       
        
    }
    public function courseSummary($course_id) {

        $i = [];
        $totalProgress = 0;
        // $userId = $id;
     
        $userId = auth('sanctum')->id();
                    
            $course_count = '(SELECT COUNT(*) FROM tbl_teacher_courses WHERE user_id = users.id) AS course_count';
            $class_count = '(SELECT COUNT(*) FROM tbl_userclasses WHERE user_id = '.$userId.' AND course_id = tbl_teacher_courses.course_id) AS total_classes';
            $classwork_count = '(SELECT COUNT(*) FROM tbl_classworks WHERE user_id = '.$userId.' 
            AND course_id = tbl_teacher_courses.course_id
            AND ISNULL(tbl_classworks.deleted_at)
            ) AS total_classworks';
            $sub_module_count = '(SELECT COUNT(*) FROM tbl_main_modules 
            LEFT JOIN tbl_sub_modules ON  tbl_main_modules.id = tbl_sub_modules.main_module_id WHERE tbl_main_modules.created_by = '.$userId.' AND course_id = tbl_teacher_courses.course_id ) AS sub_modules_count';
            $student_count = '(SELECT COUNT(*) FROM tbl_userclasses 
            LEFT JOIN users on users.id = tbl_userclasses.user_id 
             LEFT JOIN tbl_classes ON tbl_classes.id = tbl_userclasses.class_id
              WHERE users.role = "Student" 
              AND tbl_classes.course_id = tbl_teacher_courses.course_id   
              AND  ISNULL(tbl_classes.deleted_at)
              AND ISNULL(tbl_userclasses.deleted_at)  )as total_students'; 

           
     
            $courseSumarry = tbl_subject_course::select('tbl_subject_courses.course_name',
            'tbl_subject_courses.course_code',
            'tbl_subject_courses.id as course_id',
            'tbl_subject_courses.school_year_id',
            'tbl_subject_courses.semester_id'
            )


            ->selectRaw($class_count)
            ->selectRaw($classwork_count)
            ->selectRaw($sub_module_count)
            ->selectRaw($student_count) 
            ->leftJoin('tbl_teacher_courses','tbl_teacher_courses.course_id','=','tbl_subject_courses.id')
            ->where('tbl_teacher_courses.user_id',$userId)
            ->where('tbl_teacher_courses.course_id', $course_id)
            ->get();

                    $StudentCount = tbl_userclass::where('tbl_userclasses.course_id', $course_id)
                    ->leftJoin('users','users.id','=','tbl_userclasses.user_id')
                    ->whereNull("tbl_userclasses.deleted_at")
                    ->where('users.role','Student')
                    ->count();
                    
                    $courseSumarry->total_students = $StudentCount;
         

            return $courseSumarry[0];      
    }
    public function classworkList($id) {
     
        $overview = [];
        $userId = auth('sanctum')->id($id);
   
  
            $CheckCourse = tbl_teacher_course::where('tbl_teacher_courses.course_id',$id)
            
            ->where('tbl_teacher_courses.user_id',   $userId)
            ->first();

            if(!$CheckCourse ){
                return response()->json([
                    "message" => "Access Denied!",
                    "success" => false
                ]); 
            }

            $classwork = tbl_classwork::whereNull('tbl_classworks.deleted_at')
            ->where('tbl_classworks.course_id',  $id)
            ->select('tbl_classworks.id', 'tbl_classworks.course_id','tbl_classworks.module_id','tbl_classworks.type',
            'tbl_classworks.title','tbl_classworks.instruction','tbl_classworks.duration','tbl_classworks.points','tbl_classworks.created_at')
            ->selectRaw('count(tbl_submissions.classwork_id ) as submittion_count')
            ->leftJoin('tbl_submissions', 'tbl_submissions.classwork_id', '=','tbl_classworks.id')
            ->orderBy('created_at', 'DESC')
            ->groupBy('tbl_classworks.id','tbl_classworks.course_id','tbl_classworks.module_id','tbl_classworks.type',
            'tbl_classworks.title','tbl_classworks.duration','tbl_classworks.points','tbl_classworks.created_at')
            ->where('tbl_classworks.user_id',  $userId)
            ->orderBy('tbl_classworks.created_at', 'DESC')
            ->get();


           


            $ClassworksListObjective = array();
            $ClassworksListSubjective = array();
            $classworkList = array();
            foreach($classwork as $item){
              /*   $submissionCount = tbl_Submission::where('tbl_submissions.classwork_id', $item->id)
                ->where('tbl_submissions.status', 'Submitted')->count();
                $item->submittion_count =  $submissionCount; */

                $publishIn = tbl_classClassworks::withTrashed()
                ->where('tbl_class_classworks.classwork_id', $item->id)
                ->select('tbl_class_classworks.id','tbl_class_classworks.class_id','tbl_classes.class_name','tbl_class_classworks.from_date', 'tbl_class_classworks.to_date','tbl_class_classworks.availability')
                ->leftJoin('tbl_classes', 'tbl_classes.id','=','tbl_class_classworks.class_id')
                ->get();
                //return $publishIn;
                $item->publish_in = $publishIn;
                $totalSubmission = 0;
                $total_student = 0;
                foreach($publishIn as $pub){
                    $submissionCount = tbl_Submission::where('tbl_submissions.class_classwork_id', $pub->id)
                    ->where('tbl_submissions.status', 'Submitted')->count();
                    $student_count = tbl_userclass::leftJoin('users', 'users.id', '=','tbl_userclasses.user_id')
                                    ->where('tbl_userclasses.class_id', $pub->class_id)
                                    ->where('users.role', 'Student')
                                    ->count();
                    $pub->student_count =  $student_count;
                    $total_student +=  $student_count;
                    $pub->submission =  $submissionCount;
                    $totalSubmission += $submissionCount;
                
                }
                $item->submittion_count =  $totalSubmission;
                $item->total_student =  $total_student;
                $item->publish_in = $publishIn;
                if($item->type == 'Objective Type'){
                    $ClassworksListObjective[] = $item;
                }
                else{
                    $ClassworksListSubjective[] = $item;
                }
            }
           
            // $classworkList = [ 0 => $ClassworksListObjective, 1 => $ClassworksListSubjective];

            $mergeClasswork = array_merge($ClassworksListObjective,$ClassworksListSubjective);

     
            $sortedArr = collect($mergeClasswork)->sortByDesc('created_at')->values();



            $classworkList = array_slice($mergeClasswork, 0, 10, true);
            return  $sortedArr;
            
    }

    public function cb($a, $b) {
        return strtotime($a->date) - strtotime($b->date);
    }

    public function moduleList($course_id) {
      

            $allModuleList = [];

            $class_list = tbl_class::select('id','class_name')->where('course_id', $course_id)->get();
            $class_list = json_decode($class_list, true);
            $allSubModules = DB::table('tbl_sub_modules')
            ->select('tbl_sub_modules.id as sub_module_id',
            'tbl_main_modules.module_name',
            'tbl_sub_modules.sub_module_name',
            'tbl_sub_modules.type',
            'tbl_sub_modules.file_attachment',
            'tbl_sub_modules.link',
            'tbl_sub_modules.created_at',
          
            "course_id")
            ->leftJoin('tbl_main_modules', 'tbl_main_modules.id', '=', 'tbl_sub_modules.main_module_id')
            ->where('tbl_main_modules.course_id', $course_id )
            ->orderBy('tbl_sub_modules.id', 'ASC')
            ->limit(10)
            ->get();
            $allSubModules = json_decode($allSubModules, true);
        

            $total_student_count = 0;
            $total_student_completed = 0;
            $ctr = 0;
            $class = [];


       
            for($i = 0; $i < count($allSubModules) ; $i++ ){
                $total_student_completed  = 0;
                $total_student_count = 0;

                for($j = 0; $j < count($class_list) ; $j++) {
                    
                    
                    $student_count = tbl_userclass::leftJoin('users', 'users.id', '=','tbl_userclasses.user_id')
                    ->where('class_id', $class_list[$j]['id']) 
                    ->where('users.role', 'Student')
                    ->count();
                    // $submodule['total_student'] = $student_count;
             

                    $total_completed_student = DB::table('tbl_student_sub_module_progress')
                    ->leftJoin('tbl_classes', 'tbl_classes.id', '=', 'tbl_student_sub_module_progress.class_id')
                     ->where('tbl_student_sub_module_progress.sub_module_id', $allSubModules[$i]['sub_module_id'] )
                     ->where('tbl_student_sub_module_progress.class_id', $class_list[$j]['id'] )
                     ->where('tbl_student_sub_module_progress.completed', 1 )
                     // ->where('tbl_student_sub_module_progress.student_id',1 )
                     ->count();
                  


                     $total_student_completed +=  $total_completed_student;
                     $total_student_count += $student_count;
                     $allSubModules[$i]['total_student_completed'] = $total_student_completed;
                     $allSubModules[$i]['total_student_count'] = $total_student_count;


                     $class['class_name'] = $class_list[$j]['class_name'];
                     $class['class_id'] = $class_list[$j]['id'];
                     $class['student_completed'] =  $total_completed_student;
                     $class['student_count'] =  $student_count;
                     $allSubModules[$i]['classes'][] =  $class;
                }



              


            }

        
           


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
