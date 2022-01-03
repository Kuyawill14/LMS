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
use App\Models\tbl_teacher_course;
use App\Models\tbl_subject_course;
use App\Models\tbl_Submission;

class ArchiveController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $userId = auth("sanctum")->id();
        //$userId = 1;
        if(auth("sanctum")->user()->role != "Student"){
            $allArchiveCourse = tbl_teacher_course::onlyTrashed()
            ->where("tbl_teacher_courses.user_id", $userId)
            ->select("tbl_teacher_courses.id as useClass_id","tbl_subject_courses.id","tbl_subject_courses.course_code",
            "tbl_subject_courses.course_name","tbl_subject_courses.course_description","tbl_subject_courses.id as course_id",
            "tbl_subject_courses.course_picture","tbl_subject_courses.completed","tbl_subject_courses.created_at")
            ->selectRaw("count(tbl_userclasses.course_id ) as student_count")
            ->leftJoin("tbl_subject_courses", "tbl_teacher_courses.course_id", "=", "tbl_subject_courses.id")
            ->leftJoin("tbl_userclasses", "tbl_userclasses.course_id","=","tbl_subject_courses.id")
            ->leftJoin("users", "users.id","=","tbl_userclasses.user_id")
            ->groupBy("tbl_teacher_courses.id","tbl_subject_courses.id","tbl_subject_courses.course_code",
            "tbl_subject_courses.course_name","tbl_subject_courses.course_description","tbl_subject_courses.id",
            "tbl_subject_courses.course_picture","tbl_subject_courses.completed","tbl_subject_courses.created_at")
            ->orderBy("created_at", "ASC")
            ->get();

            foreach($allArchiveCourse as $item){
                $countClass = tbl_userclass::onlyTrashed()
                ->where("tbl_userclasses.course_id", $item->id)
                ->where("tbl_userclasses.user_id", $userId )
                ->count();
                $item->class_count = $countClass;

                $StudentCount = tbl_userclass::onlyTrashed()
                ->where("tbl_userclasses.course_id", $item->id)
                ->where("tbl_userclasses.user_id","!=" ,$userId )
                ->count();

                $item->student_count =  $StudentCount;
            }
        return $allArchiveCourse;

        }
    }

    /**
     * Show the form for creating a new resource.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restoreArchive($id)
    {
        $CheckCourse = tbl_teacher_course::withTrashed()->where("course_id", $id)->first();
        if($CheckCourse){
            $CheckClass = tbl_userclass::withTrashed()->where("course_id", $id)->restore();
            $CheckCourse->restore();
            return "Course Restored";
        }
        return "Course not found!";
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

   
    public function showArchiveClasses()
    {
        $totalProgress = 0;
        $userId = auth("sanctum")->id();

        if(auth("sanctum")->user()->role != "Student") {

            $allClass = tbl_userclass::onlyTrashed()
            ->where("tbl_userclasses.user_id", $userId)
            ->select("tbl_classes.class_name",
            "tbl_classes.class_code",
            "tbl_subject_courses.course_name",
            "tbl_subject_courses.course_code",
            "tbl_subject_courses.completed as status",
            "tbl_classes.id as class_id",
            )
            ->selectRaw("count(tbl_userclasses.course_id ) as student_count")
            ->leftJoin("tbl_classes", "tbl_userclasses.class_id", "=", "tbl_classes.id")
            ->leftJoin("tbl_subject_courses", "tbl_userclasses.course_id", "=", "tbl_subject_courses.id")
            ->groupBy("tbl_classes.class_name","tbl_classes.class_code", "tbl_subject_courses.course_name"
            ,"tbl_subject_courses.course_code", "tbl_subject_courses.completed", "tbl_classes.id")
            ->get();

            foreach($allClass as $key => $value) {
                $StudentCount = tbl_userclass::withTrashed()
                ->where("class_id", $value ->class_id)
                ->leftJoin("users","users.id","=","tbl_userclasses.user_id")
                ->where("users.role","Student")
                ->count();
                $value->student_count = $StudentCount;
            }
        }
        else{
           
            $allClass = tbl_userclass::onlyTrashed()
            ->select("tbl_userclasses.id as useClass_id",
            "tbl_classes.class_name",
            "tbl_classes.class_code",
            "tbl_subject_courses.course_picture",
            "tbl_subject_courses.course_name",
            "tbl_subject_courses.course_code",
            "tbl_subject_courses.course_picture",
            "tbl_subject_courses.id as course_id",
            "tbl_subject_courses.completed as status",
            "tbl_classes.id as class_id",
            "tbl_userclasses.progress"
            )
            ->leftJoin("tbl_classes", "tbl_userclasses.class_id", "=", "tbl_classes.id")
            ->leftJoin("tbl_subject_courses", "tbl_userclasses.course_id", "=", "tbl_subject_courses.id")
            ->where("user_id",$userId)
            ->get();
            foreach($allClass as $key => $value) {
                $allSubModulesProgress = DB::table("tbl_student_sub_module_progress")
                ->select("tbl_student_sub_module_progress.*")
                ->leftJoin("tbl_sub_modules", "tbl_sub_modules.id", "=", "tbl_student_sub_module_progress.sub_module_id")
                ->where("tbl_student_sub_module_progress.course_id", $value ->course_id )
                ->where("tbl_student_sub_module_progress.student_id",  $userId )
                ->get();

                $allSubModulesProgress = json_decode($allSubModulesProgress, true);
                $allSubModules = DB::table("tbl_sub_modules")
                ->select("tbl_sub_modules.*", "course_id")
                ->leftJoin("tbl_main_modules", "tbl_main_modules.id", "=", "tbl_sub_modules.main_module_id")
                ->where("tbl_main_modules.course_id", $value ->course_id)
                ->get();
                $allSubModules = json_decode($allSubModules, true);
                $completed = 0;
                for($i = 0 ; $i < count($allSubModules) ; $i++) {
                    for($j = 0; $j < count($allSubModulesProgress); $j++) {
                        if($allSubModulesProgress[$j]["sub_module_id"] == $allSubModules[$i]["id"] ){
                            if($allSubModulesProgress[$j]["time_spent"] >= $allSubModules[$i]["required_time"] ){
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
                
                DB::table("tbl_userclasses")
                ->where("user_id", $userId)
                ->where("course_id", $value ->course_id)
                ->update(["progress" =>   $totalProgress]);
            }

            //return $allClass;
        }
        
        return $allClass;
    }

    /**
     * Show the form for creating a new resource.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restoreClass($id)
    {
     
        $CheckClass = tbl_userclass::withTrashed()->where("class_id", $id)->restore();
         if($CheckClass){
            return "Class Restored";
         }
        
        return "Class not found!";
    }

    /**
     * Show the form for creating a new resource.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function StudentRestoreClass($id)
    {
     
        $CheckClass = tbl_userclass::withTrashed()->where("id", $id)->restore();
         if($CheckClass){
            return "Class Restored";
         }
        
        return "Class not found!";
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function ShowArchiveClasswork($id)
    {
        $userId = auth("sanctum")->id();

        if(auth("sanctum")->user()->role != "Student"){
            $classworks = tbl_classwork::where("user_id", $userId)->onlyTrashed()
            ->get();

            foreach($classworks as $item){
                $submissionCount = tbl_Submission::where('tbl_submissions.classwork_id', $item->id)
                ->where('tbl_submissions.status', 'Submitted')->count();
                $item->submittion_count =  $submissionCount;
            }
            return $classworks;
        }
       
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restoreClasswork($id)
    {
        $userId = auth('sanctum')->id();
        $RestoreClasswork = tbl_classwork::withTrashed()->where('tbl_classworks.id', $id)->first();

        if($RestoreClasswork){
            $class_classwork = tbl_classClassworks::withTrashed()->where('classwork_id', $RestoreClasswork->id)->restore();
            $RestoreClasswork->restore();

            return response()->json([
                "message" => "Classword Restored!",
                "success" => true
            ]);
        }

        return response()->json([
            "message" => "Classword not found!",
            "success" => false
        ]);
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
