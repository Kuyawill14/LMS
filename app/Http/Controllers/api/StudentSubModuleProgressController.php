<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_student_sub_module_progress;
use App\Models\tbl_userclass;
use App\Models\User;
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

    public function fetchSubmoduleProgress($id) {
        $userId = auth('sanctum')->id();

        $allSubModulesProgress = DB::table('tbl_student_sub_module_progress')
        ->select('tbl_student_sub_module_progress.*')
        ->leftJoin('tbl_sub_modules', 'tbl_sub_modules.id', '=', 'tbl_student_sub_module_progress.sub_module_id')
        ->where('tbl_student_sub_module_progress.course_id', $id )
        ->where('tbl_student_sub_module_progress.student_id',  $userId )
        ->get();
        $allSubModulesProgress = json_decode($allSubModulesProgress, true);

        $allSubModules = DB::table('tbl_sub_modules')
        ->select('tbl_sub_modules.*', "course_id")
        ->leftJoin('tbl_main_modules', 'tbl_main_modules.id', '=', 'tbl_sub_modules.main_module_id')
        ->where('tbl_main_modules.course_id', $id )
        ->get();
        $allSubModules = json_decode($allSubModules, true);
        $completed = 0;
        for($i = 0 ; $i < count($allSubModules) ; $i++) {
            for($j = 0; $j < count($allSubModulesProgress); $j++) {
                if($allSubModulesProgress[$j]['sub_module_id'] == $allSubModules[$i]['id'] ){
                    if($allSubModulesProgress[$j]['time_spent'] >= $allSubModules[$i]['required_time'] ){
                    $completed++;
                    DB::table('tbl_student_sub_module_progress')
                    ->where('student_id', $userId)
                    ->where('sub_module_id',$allSubModulesProgress[$j]['sub_module_id'])
                    ->update(['completed' =>   1]);
                    } else {
                        DB::table('tbl_student_sub_module_progress')
                        ->where('student_id', $userId)
                        ->where('sub_module_id',$allSubModulesProgress[$j]['sub_module_id'])
                        ->update(['completed' =>   0]);
                    }
                }
            }
           
        }


        if(count($allSubModules) ) {
                      
            $totalProgress = round(($completed / count($allSubModules)) * 100);
        } else {
            $totalProgress = 0;
        }

        return response()->json(
            [
            'percentage' => $totalProgress , 
            'completed' => $completed, 
            'submodules_count' => count($allSubModules),
            ]);
    }

    public function studentMainProgress($id) {
        // $userId = auth('sanctum')->id();
        $allSubModulesProgress = DB::table('tbl_student_sub_module_progress')
        
        ->select(
        'tbl_student_sub_module_progress.id', 
        'tbl_student_sub_module_progress.student_id', 
        'tbl_student_sub_module_progress.sub_module_id', 
        'tbl_student_sub_module_progress.main_module_id', 
        'tbl_main_modules.module_name',
        'users.firstName',
        'users.middleName',
        'users.lastName',
        'tbl_sub_modules.sub_module_name',
        'tbl_sub_modules.sub_module_name',
        DB::raw('SUM(tbl_student_sub_module_progress.time_spent) AS total_time_spent'),
        DB::raw('SUM(tbl_sub_modules.required_time) AS total_required_time'),
        DB::raw('COUNT(case when tbl_student_sub_module_progress.completed = 1 then 1 else 0 end ) AS completed'))
        ->leftJoin('users', 'users.id', '=', 'tbl_student_sub_module_progress.student_id')
        ->leftJoin('tbl_main_modules', 'tbl_main_modules.id', '=', 'tbl_student_sub_module_progress.main_module_id')
        ->leftJoin('tbl_sub_modules', 'tbl_sub_modules.id', '=', 'tbl_student_sub_module_progress.sub_module_id')
        ->where('tbl_student_sub_module_progress.course_id', $id )
        // ->where('tbl_student_sub_module_progress.student_id',1 )
        ->groupBy( 'tbl_student_sub_module_progress.student_id')

        ->get();

        // $allSubModules = DB::table('tbl_sub_modules')
        // ->select('tbl_sub_modules.*','tbl_main_modules.module_name')
        // ->leftJoin('tbl_main_modules', 'tbl_main_modules.id', '=', 'tbl_sub_modules.main_module_id')
        // ->where('tbl_main_modules.course_id', $id )
        // ->get();


        return $allSubModulesProgress;
    }

    public function studentSubProgress($id) {
          // $userId = auth('sanctum')->id();

          $allSubModulesProgress = DB::table('tbl_userclasses')
          ->select('tbl_userclasses.id as uc_id', 'users.firstName','users.middleName','users.lastName',
          'tbl_main_modules.module_name',
          'tbl_main_modules.id as main_module_id',
          'tbl_sub_modules.sub_module_name',
          'tbl_student_sub_module_progress.time_spent',
          'tbl_sub_modules.required_time',
          'tbl_student_sub_module_progress.id as subProgress_id', 
          'tbl_userclasses.user_id as student_id', 
          )

          ->leftJoin('users', 'users.id','=','tbl_userclasses.user_id')
          ->leftJoin('tbl_main_modules', 'tbl_main_modules.course_id','=','tbl_userclasses.course_id')
          ->leftJoin('tbl_sub_modules', 'tbl_sub_modules.main_module_id','=','tbl_main_modules.id')
          ->leftJoin('tbl_student_sub_module_progress', 'tbl_student_sub_module_progress.sub_module_id','=','tbl_sub_modules.id' ,'AND' , 'tbl_student_sub_module_progress.student_id','=','users.id' )
          ->where('users.role', 'Student')
          ->where('tbl_userclasses.course_id', $id)
    
          ->get();

        /*   $allSubModulesProgress = DB::table('tbl_sub_modules')
        
          ->select(
          'tbl_student_sub_module_progress.id', 
          'tbl_student_sub_module_progress.student_id', 
          'tbl_student_sub_module_progress.sub_module_id', 
          'tbl_student_sub_module_progress.main_module_id', 
          'tbl_main_modules.module_name',
          'users.firstName',
          'users.middleName',
          'users.lastName',
          'tbl_sub_modules.sub_module_name',
          'tbl_sub_modules.sub_module_name',
          'tbl_student_sub_module_progress.time_spent',
          'tbl_sub_modules.required_time',
          )
          ->leftJoin('tbl_student_sub_module_progress', 'tbl_student_sub_module_progress.sub_module_id', '=', 'tbl_sub_modules.id')
          ->leftJoin('users', 'users.id', '=', 'tbl_student_sub_module_progress.student_id')
          ->leftJoin('tbl_main_modules', 'tbl_main_modules.id', '=', 'tbl_student_sub_module_progress.main_module_id')
         
  
          ->get(); */
  
          // $allSubModules = DB::table('tbl_sub_modules')
          // ->select('tbl_sub_modules.*','tbl_main_modules.module_name')
          // ->leftJoin('tbl_main_modules', 'tbl_main_modules.id', '=', 'tbl_sub_modules.main_module_id')
          // ->where('tbl_main_modules.course_id', $id )
          // ->get();
  
  
          return $allSubModulesProgress;


        return $allSubModulesProgress;
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


        } 
    }

    public function updateTimespent(Request $request) {
        $userId = auth('sanctum')->id();
    
    
        
        DB::table('tbl_student_sub_module_progress')
        ->where('main_module_id', $request->studentProgress['main_module_id'])
        ->where('sub_module_id', $request->studentProgress['sub_module_id'])
        ->where('student_id', $userId)
        ->update(['time_spent' =>  $request->studentProgress['time_spent']]);
    
    
        
   return  $request;
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
