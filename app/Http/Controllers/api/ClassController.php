<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Tbl_class;
use App\Models\tbl_userclass;
use App\Models\tbl_classwork;
use App\Models\tbl_classClassworks;

class ClassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $i = [];
        $totalProgress = 0;
        $userId = auth('sanctum')->id();
        $allClass = tbl_userclass::where('user_id',$userId)
        ->select('tbl_userclasses.id as useClass_id',
        'tbl_classes.class_name',
        'tbl_classes.class_code',
        'tbl_subject_courses.course_picture',
        'tbl_subject_courses.course_name',
        'tbl_subject_courses.course_code',
        'tbl_subject_courses.course_picture',
        'tbl_subject_courses.id as course_id',
        'tbl_classes.id as class_id',
        'tbl_userclasses.progress'

        )
        ->leftJoin('tbl_classes', 'tbl_userclasses.class_id', '=', 'tbl_classes.id')
        ->leftJoin('tbl_subject_courses', 'tbl_userclasses.course_id', '=', 'tbl_subject_courses.id')
        ->get();
        
        if(auth('sanctum')->user()->role == "Student") {
            $allClass = tbl_userclass::whereNull('tbl_userclasses.deleted_at')
            ->select('tbl_userclasses.id as useClass_id',
            'tbl_classes.class_name',
            'tbl_classes.class_code',
            'tbl_subject_courses.course_picture',
            'tbl_subject_courses.completed as status',
            'tbl_subject_courses.course_name',
            'tbl_subject_courses.course_code',
            'tbl_subject_courses.course_picture',
            'tbl_subject_courses.id as course_id',
            'tbl_classes.id as class_id',
            'tbl_userclasses.progress',
            'school_year_id',
            'semester_id',
            )
            ->leftJoin('tbl_classes', 'tbl_userclasses.class_id', '=', 'tbl_classes.id')
            ->leftJoin('tbl_subject_courses', 'tbl_userclasses.course_id', '=', 'tbl_subject_courses.id')
            ->where('user_id',$userId)
            ->get();
            foreach($allClass as $key => $value) {
                $allSubModulesProgress = DB::table('tbl_student_sub_module_progress')
                ->select('tbl_student_sub_module_progress.*')
                ->leftJoin('tbl_sub_modules', 'tbl_sub_modules.id', '=', 'tbl_student_sub_module_progress.sub_module_id')
                ->where('tbl_student_sub_module_progress.course_id', $value ->course_id )
                ->where('tbl_student_sub_module_progress.student_id',  $userId )
                ->get();
                $allSubModulesProgress = json_decode($allSubModulesProgress, true);
        
                $allSubModules = DB::table('tbl_sub_modules')
                ->select('tbl_sub_modules.*', "course_id")
                ->leftJoin('tbl_main_modules', 'tbl_main_modules.id', '=', 'tbl_sub_modules.main_module_id')
                ->where('tbl_main_modules.course_id', $value ->course_id)
                ->get();
                $allSubModules = json_decode($allSubModules, true);
                $completed = 0;
                for($i = 0 ; $i < count($allSubModules) ; $i++) {
                    for($j = 0; $j < count($allSubModulesProgress); $j++) {
                        if($allSubModulesProgress[$j]['sub_module_id'] == $allSubModules[$i]['id'] ){
                            if($allSubModulesProgress[$j]['time_spent'] >= $allSubModules[$i]['required_time'] ){
                            $completed++;
                            }
                        }
                    }
                   
                }
                if(count($allSubModules) ) {
                      
                    $totalProgress = ($completed / count($allSubModules)) * 100;;
                } else {
                    $totalProgress = 0;
                }
                
                DB::table('tbl_userclasses')
                ->where('user_id', $userId)
                ->where('course_id', $value ->course_id)
                ->update(['progress' =>   $totalProgress]);
            }
        }
        
        return $allClass;
    }

    public function subjectCourseClassList($course_id) {
        $userId = auth('sanctum')->id();
        $allClass = tbl_userclass::where('tbl_userclasses.course_id',$course_id)
        ->select('tbl_classes.class_name',
        'tbl_classes.class_code',
        'tbl_subject_courses.course_name',
        'tbl_subject_courses.course_code',
        'tbl_classes.id as class_id',
        )
        ->selectRaw('count(tbl_userclasses.course_id ) as student_count')
        ->leftJoin('tbl_classes', 'tbl_userclasses.class_id', '=', 'tbl_classes.id')
        ->leftJoin('tbl_subject_courses', 'tbl_userclasses.course_id', '=', 'tbl_subject_courses.id')
        ->groupBy('tbl_classes.class_name','tbl_classes.class_code', 'tbl_subject_courses.course_name'
        ,'tbl_subject_courses.course_code', 'tbl_classes.id')
        ->where('user_id', $userId)
        ->get();

        foreach($allClass as $key => $value) {
            $StudentCount = tbl_userclass::where('class_id', $value ->class_id)
            ->leftJoin('users','users.id','=','tbl_userclasses.user_id')
            ->where('users.role','Student')
            ->count();
            $value->student_count = $StudentCount;
        }

        return $allClass;
    }

    public function ArchiveClass($id){
        $Findclass = tbl_userclass::where('class_id', $id)->delete();
        if($Findclass){
            return 'Class put in archive!';
        }
        return 'Class not found!';
    }

    public function ClassDetails($id)
    {
        $ShowClassDetails = DB::table('tbl_classes')
        ->where('id', $id)
        ->first();
        return $ShowClassDetails;
    }
    public function fetchSelectedclass($course_id){
        $userId = auth('sanctum')->id();
        $selectedClass = DB::table('tbl_userclasses')
        ->select('tbl_userclasses.id as useClass_id',
        'tbl_classes.class_name',
        'tbl_classes.class_code',
        'tbl_subject_courses.course_picture',
        'tbl_subject_courses.course_name',
        'tbl_subject_courses.course_code',
        'tbl_subject_courses.course_picture',
        'tbl_subject_courses.id as course_id',
        'tbl_classes.id as class_id',
        'tbl_userclasses.progress'
        )
        ->leftJoin('tbl_classes', 'tbl_userclasses.class_id', '=', 'tbl_classes.id')
        ->leftJoin('tbl_subject_courses', 'tbl_userclasses.course_id', '=', 'tbl_subject_courses.id')
        ->where('tbl_userclasses.course_id',$course_id)
        ->where('user_id',$userId)
        ->get();
        return $selectedClass;
    }


     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function fecthClassNames($id, $clwk){
        $userId = auth('sanctum')->id();
        //$userId = 1;
        //getAllClass
        $allClass = tbl_userclass::where('tbl_userclasses.course_id', $id)
        ->select('tbl_userclasses.id','tbl_classes.id as class_id','tbl_classes.class_name','tbl_classes.class_code')
        ->leftJoin('tbl_classes', 'tbl_userclasses.class_id', '=', 'tbl_classes.id')
        ->where('tbl_userclasses.user_id', $userId)
        ->orderBy('tbl_classes.created_at', 'ASC')
        ->get();
        //getAllClasswork
       $classwork = tbl_classwork::where('user_id', $userId)
        ->orderBy('created_at', 'DESC')
        ->get();
       
        foreach($allClass as $cl){
            foreach($classwork as $cw){
                $Check = tbl_classClassworks::where('classwork_id', $clwk)
                ->where('class_id','=', $cl->class_id)
                ->first();
                if($Check){
                    $cl->status = 1;
                    $cl->Class_classwork_id = $Check->id;
                }
                else{
                    if($cl->status == ''){
                        $cl->status = 0;
                        $cl->Class_classwork_id = '';
                    }
                }
            }
        }
        return $allClass;
    }

    public function classCount() {
        $userId = auth('sanctum')->id();
        $classCount = tbl_userclass::
        select('tbl_userclasses.id','tbl_classes.id as class_id','tbl_classes.class_name','tbl_classes.class_name')
        ->leftJoin('tbl_classes', 'tbl_userclasses.class_id', '=', 'tbl_classes.id')
        ->where('tbl_userclasses.user_id', $userId)
        ->orderBy('tbl_classes.created_at', 'ASC')
        ->count();

        return $classCount;
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

    public function gen_uid($l)
    {
        $str = "";
        for ($x=0;$x<$l;$x++) {
            $str .= substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyz"), 0, 1);
        }
        return $str;
    }

    public function store(Request $request)
    {
  
        $isExist = '';
        $gen_class_code ='';
        $code_length = 6;
        while($isExist != 0) {
            $gen_class_code = $this->gen_uid($code_length);
            $isExist = Tbl_class::select('class_code')->where('class_code', $gen_class_code)->count();
        }
        

        $NewClass = new Tbl_class;
        $NewClass->class_name = $request->class['class_name'];
        $NewClass->course_id =  $request->class['course_id'];
        $NewClass->class_code =  $gen_class_code;
        $NewClass->save();


        //users class
        $UserClass  = new tbl_userclass;
        $userId = auth('sanctum')->id();
        $UserClass->class_id = $NewClass->id;
        $UserClass->course_id = $request->class['course_id'];
        $UserClass->user_id = $userId;
        $UserClass->progress = 0;
        $UserClass->save();

        return $NewClass;
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
        $existingClass = Tbl_class::find($id);
        if($existingClass) {
            $existingClass->class_name = $request->class['class_name'];
        
            $existingClass->save();
            return $existingClass;
        }
        return "item not found";
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
