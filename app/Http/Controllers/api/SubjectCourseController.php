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
use App\Models\tbl_userDetails;
use App\Models\tbl_join_request;
use Carbon\Carbon;
use Validator,Redirect,Response,File;
use Illuminate\Support\Facades\Storage;
use App\Models\tbl_main_modules;
use App\Models\tbl_sub_modules;
use App\Models\tbl_Questions;
use App\Models\tbl_SubQuestion;
use App\Models\tbl_choice;
use App\Models\tbl_main_gradeCategory;
class SubjectCourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $totalProgress = 0;
        $userId = auth("sanctum")->id();
        //$userId = 1;
        $allCourseSubject = tbl_teacher_course::whereNull("tbl_teacher_courses.deleted_at")
        ->where("tbl_teacher_courses.user_id", $userId)
       
        ->select("tbl_teacher_courses.id as useClass_id","tbl_subject_courses.id","tbl_subject_courses.course_code",
        "tbl_subject_courses.course_name","tbl_subject_courses.course_description","tbl_subject_courses.id as course_id",
        "tbl_subject_courses.course_picture","tbl_subject_courses.completed","tbl_subject_courses.created_at", "tbl_subject_courses.school_year_id",
        "tbl_subject_courses.semester_id","tbl_subject_courses.department","tbl_subject_courses.course_guide","tbl_subject_courses.v_classroom_link")
        ->selectRaw("count(tbl_userclasses.course_id ) as student_count")
        ->leftJoin("tbl_subject_courses", "tbl_teacher_courses.course_id", "=", "tbl_subject_courses.id")
        ->leftJoin("tbl_userclasses", "tbl_userclasses.course_id","=","tbl_subject_courses.id")
        ->leftJoin("users", "users.id","=","tbl_userclasses.user_id" )
        ->groupBy("tbl_teacher_courses.id","tbl_subject_courses.id","tbl_subject_courses.course_code",
        "tbl_subject_courses.course_name","tbl_subject_courses.course_description","tbl_subject_courses.id",
        "tbl_subject_courses.course_picture","tbl_subject_courses.completed","tbl_subject_courses.created_at")
        ->orderBy("created_at", "ASC")
        ->get();


        foreach($allCourseSubject as $item){
            $countClass = tbl_userclass::where("tbl_userclasses.course_id", $item->id)
            ->where("tbl_userclasses.user_id", $userId )
            ->count();
            $item->class_count = $countClass;

            $StudentCount = tbl_userclass::where("tbl_userclasses.course_id", $item->id)
            ->where("tbl_userclasses.user_id","!=" ,$userId )
            ->count();

            $item->student_count =  $StudentCount;

            $item->join_request_count = tbl_join_request::where("tbl_join_requests.course_id", $item->id)->count();



        }
        return $allCourseSubject;
    }
    public function CourseDetails($id)
    {
        $userId = auth("sanctum")->id();
    
        
        if(auth("sanctum")->user()->role == "Student"){
            $ShowCourseDetails = tbl_subject_course::where("tbl_subject_courses.id", $id)
            ->select("tbl_subject_courses.id", 
            "tbl_subject_courses.course_code",
            "tbl_subject_courses.course_name",
            "tbl_subject_courses.course_description",
            "tbl_subject_courses.course_picture",
            "tbl_subject_courses.v_classroom_link",
            "tbl_subject_courses.course_guide",
            DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),
            "school_year_id",
            "semester_id",
            "completed")
            ->leftjoin("tbl_userclasses", "tbl_userclasses.course_id","=","tbl_subject_courses.id")
            ->leftjoin("users", "users.id","=","tbl_userclasses.user_id")
            ->leftjoin("tbl_user_details", "tbl_user_details.user_id","=","users.id")
            ->where("users.role", "Teacher")
            ->first();

            $class = tbl_userclass::where('tbl_userclasses.course_id',$id)
            ->select('tbl_classes.meeting_link')
            ->leftJoin('tbl_classes', 'tbl_classes.id','=','tbl_userclasses.class_id')
            ->where('tbl_userclasses.user_id',  $userId)
            ->first();
            
            $ShowCourseDetails->class_v_link = $class->meeting_link;
            return $ShowCourseDetails;
        }
        else{
            $ShowCourseDetails = tbl_subject_course::where("tbl_subject_courses.id", $id)
            ->select("tbl_subject_courses.id",
             "tbl_subject_courses.course_code",
            "tbl_subject_courses.course_name",
            "tbl_subject_courses.course_description",
            "tbl_subject_courses.course_picture",
            "tbl_subject_courses.v_classroom_link",
            "school_year_id",
            "semester_id",
            "tbl_subject_courses.department",
            "tbl_subject_courses.course_guide",
            "completed")
            ->first();

            $join_request = tbl_join_request::where('tbl_join_requests.course_id',$id)->count();
            $ShowCourseDetails->join_request_count = $join_request;

            $name = tbl_userDetails::where("user_id",  $userId)->first();
            $UserFullName = $name->firstName." ". $name ->lastName;
            $ShowCourseDetails->name = $UserFullName;
            return $ShowCourseDetails;
        } 
    }

     /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function CheckCourseStatus()
    {
        $userId = auth("sanctum")->id();
        //$userId = 3;
        $courseStatus;
        if(auth("sanctum")->user()->role == "Student"){
            $courseStatus = tbl_userclass::whereNull("tbl_userclasses.deleted_at")
            ->select("tbl_subject_courses.id", "tbl_subject_courses.completed as status")
            ->leftjoin("tbl_subject_courses", "tbl_subject_courses.id","=","tbl_userclasses.course_id")
            ->where("tbl_userclasses.user_id", $userId)
            ->get();

        }else{
            $courseStatus = tbl_teacher_course::whereNull("tbl_teacher_courses.deleted_at")
            ->select("tbl_subject_courses.id", "tbl_subject_courses.completed as status")
            ->leftjoin("tbl_subject_courses", "tbl_subject_courses.id","=","tbl_teacher_courses.course_id")
            ->where("tbl_teacher_courses.user_id", $userId)
            ->get();
        }
        return $courseStatus;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $userId = auth("sanctum")->id();


        $Newcourse = new tbl_subject_course;
        $coursePic = ["theme1.jpg","theme2.jpg","theme3.jpg","theme4.jpg","theme5.jpg","theme6.jpg","theme7.jpg","theme8.jpg"];
        shuffle($coursePic);
        $Newcourse->course_name =  $request->courseItem["course_name"];
        $Newcourse->course_code =  $request->courseItem["course_code"];
        $Newcourse->course_description ="";
        $Newcourse->course_picture = $coursePic[0];
        $Newcourse->save();
        $teacherSubjectCourse  = new tbl_teacher_course;
        $teacherSubjectCourse->course_id = $Newcourse->id;
        $teacherSubjectCourse->user_id = $userId;
        $teacherSubjectCourse->save();

        return $Newcourse;
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
    public function ArchiveCourse($id)
    {
        $CheckCourse = tbl_teacher_course::where("course_id", $id)->first();
        if($CheckCourse){
            $CheckClass = tbl_userclass::where("course_id", $id)
            ->delete();
            $CheckCourse->delete();
            return "Course Archive";
        }
        return "Course not found!";
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function DeleteCourse($id){

        $userId = auth("sanctum")->id();
        $CheckClass = tbl_userclass::where("course_id", $id)
        ->where('user_id','!=', $userId)
        ->count();
        if($CheckClass == 0){
            $CheckCourse = tbl_teacher_course::where("course_id", $id)->first();
            if($CheckCourse){
                $class = tbl_userclass::where("course_id", $id)->forceDelete();
                $course = tbl_subject_course::find($id);
                $course->forceDelete();
                $CheckCourse->forceDelete();
                return response()->json([
                    "success"=>true,
                    "message"=> 'Course Deleted'
                ]);
            }
            return "Course not found!";
        }else{
            return response()->json([
                "success"=>false,
                "message"=> 'This course already have student!'
            ]);
        }
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
      
        $currentTime = Carbon::now()->format('YmdHs');
        $existingCourse = tbl_subject_course::find($id);
        $courseItem  = json_decode($request->courseItem, true);

        if($existingCourse) {
            if($request->file != 'null' && $request->file != 'undefined') {
                $file_extension = $request->file->extension();
                $file_mime_type = $request->file->getClientMimeType();
                $original_file_name = $request->file->getClientOriginalName();

                //name_time.extension
                $name=preg_replace('/\\.[^.\\s]{3,4}$/', '', $original_file_name);
                $filename =  $name. '_' . $currentTime . '.' .  $file_extension ;

                $file = $request->file->storeAs('public/upload/courses/' .$id,$filename );
                $existingCourse->course_guide = preg_replace('/\bpublic\/\b/', '', $file);;
            }
          
            $existingCourse->course_name = $courseItem["course_name"];
            $existingCourse->course_code = $courseItem["course_code"];
            $existingCourse->course_description =$courseItem["course_description"];
            $existingCourse->v_classroom_link = $courseItem["v_classroom_link"];
            $existingCourse->school_year_id =$courseItem["school_year_id"];
            $existingCourse->semester_id = $courseItem["semester_id"];
            $existingCourse->department = $courseItem["department"];
            $existingCourse->save();
            return $existingCourse;
        }
        return $request->courseItem;
    }
    public function courseCompleted($id) {
        $userId = auth("sanctum")->id();
        $existingCourse = tbl_subject_course::find($id);

        if($existingCourse) {
            $existingCourse->completed = 1;
            $existingCourse->save();
            return $existingCourse;
        }

        return 1;
    }

    
    public function RemoveUploadedFile(Request $request, $id)
    {

        // return $request;
        $removeUpload =  tbl_subject_course::find($id);
        if($removeUpload){
        
            unlink(storage_path('app/public/'.$request->course_guide));

                $removeUpload->course_guide =null;
                $removeUpload->save();
                return 'File Successfully Deleted';
        }
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



    public function duplicateCourse(Request $request) {
        DB::beginTransaction();
        $coursePic = ["theme1.jpg","theme2.jpg","theme3.jpg","theme4.jpg","theme5.jpg","theme6.jpg","theme7.jpg","theme8.jpg"];
        shuffle($coursePic);
        $userId = auth('sanctum')->id();
        $course_data = $request->course_data;

        $new_course = new tbl_subject_course;

        $new_course->course_name = $course_data['course_name'];
        $new_course->course_code = $course_data['course_code'];
        $new_course->course_guide = $course_data['course_guide'];
        $new_course->v_classroom_link = $course_data['v_classroom_link'];
        $new_course->course_picture = $coursePic[0];
        $new_course->completed = 0;
        $new_course->save();

        $teacherSubjectCourse  = new tbl_teacher_course;
        $teacherSubjectCourse->course_id = $new_course->id;
        $teacherSubjectCourse->user_id = $userId;
        $teacherSubjectCourse->save();
        
        $this->duplicateModule($course_data['id'],$new_course->id);
        // $this->duplicateClass($course_data['id'],$new_course->id);
        $this->DuplicateClasswork($course_data['id'],$new_course->id);
        $this->duplicateGradingCriteria($course_data['id'],$new_course->id);

        DB::commit();

        return 1;
    }

    public function duplicateGradingCriteria($course_id,$new_course_id) {
        DB::beginTransaction();

        $grading_criterias =  tbl_main_gradeCategory::where('course_id', $course_id)->get();
   
        foreach($grading_criterias as $grading_criteria) {
            $newGradingCriteria = new tbl_main_gradeCategory;
            $newGradingCriteria->name = $grading_criteria['name'];
            $newGradingCriteria->percentage = $grading_criteria['percentage'];
            $newGradingCriteria->course_id =$new_course_id;
            $newGradingCriteria->save();
        }
      
        DB::commit();
    }


    public function duplicateModule($course_id,$new_course_id) {
       
        $allModules  = tbl_main_modules::where('course_id',$course_id)->get();
 
        $userId = auth('sanctum')->id();

        foreach($allModules as $module) {

           
            $mainModule  = new tbl_main_modules;
            $mainModule->module_name =  $module['module_name'];
            $mainModule->description = $module['description'];
            $mainModule->course_id =  $new_course_id;
            $mainModule->position =   $new_course_id + 1;
            $mainModule->created_by = $userId;
            $mainModule->save();


            $this->duplicateSubModule($module['id'],$mainModule['id']);

        }



    }

    public function duplicateSubModule($module_id,$main_module_id) {
        $all_sub_modules = tbl_sub_modules::where('main_module_id', $module_id)->get();

      
        $userId = auth('sanctum')->id();
        $currentTime = Carbon::now()->format('YmdHs');

        foreach($all_sub_modules as $sub_module) {
             $itemType = $sub_module['type'] == 'Video' || $sub_module['type'] == 'Document';
                if( $itemType) { 
                  
                    $NewsubModule = new tbl_sub_modules;
                    $NewsubModule->sub_module_name = $sub_module['sub_module_name'];
                    $NewsubModule->type = $sub_module['type'];
                    $NewsubModule->main_module_id = $main_module_id;
                    $NewsubModule->description = $sub_module['description'];
                    $NewsubModule->required_time = $sub_module['required_time'];
                    //insert link below
                    $NewsubModule->file_attachment =  $sub_module['file_attachment'];
                    $NewsubModule->save();
                         
                } else {

                    $NewsubModule  = new tbl_sub_modules;
                    $NewsubModule->sub_module_name = $sub_module['sub_module_name'];
                    $NewsubModule->type = $sub_module['type'];
                    $NewsubModule->main_module_id = $main_module_id;
                    $NewsubModule->description = $sub_module['description'];
                    $NewsubModule->required_time = $sub_module['required_time'] ;
                    $NewsubModule->link =  $this->checkLink( $sub_module['link']);
                    $NewsubModule->save();
                 
                }
        }
    }
    public function checkLink($link) {
        if (strpos($link, 'youtube') > 0 || strpos($link, 'youtu.be') > 0) {
            preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $link, $match);
            $youtube_id = $match[1];
            return "https://www.youtube.com/watch?v=" . $youtube_id;
        }

            return $link;
    }



    public function gen_uid($l)
    {
        $str = "";
        for ($x=0;$x<$l;$x++) {
            $str .= substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyz"), 0, 1);
        }
        return $str;
    }
    public function duplicateClass($course_id,$new_course_id) {
        

        $all_class = tbl_class::where('course_id',$course_id)->get();;



        foreach($all_class as $class) {
            $userId = auth('sanctum')->id();

            $isExist = '';
            $gen_class_code ='';
            $code_length = 6;
    
            while(!$isExist) {
                $str = "";
                for ($x=0;$x<$code_length;$x++) {
                    $str .= substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyz"), 0, 1);
                }
    
                $gen_class_code =   $str;
                $isExist = Tbl_class::select('class_code')->where('class_code', $gen_class_code)->Exists();
            }
            
            $NewClass = new Tbl_class;
            $NewClass->class_name = $class['class_name'];
            $NewClass->course_id =  $new_course_id;
            $NewClass->class_code =  $gen_class_code;
            $NewClass->meeting_link =  $class['meet_link'];
            $NewClass->schedule =  serialize($class['schedule']);
            $NewClass->is_auto_accept =  $class['auto_accept'];
            $NewClass->save();

            //users class
            $UserClass  = new tbl_userclass;
            $UserClass->class_id = $NewClass->id;
            $UserClass->course_id = $new_course_id;
            $UserClass->user_id = $userId;
            $UserClass->progress = 0;
            $UserClass->save();


        }



    }



    public function DuplicateClasswork($course_id, $new_course_id){
        $userId = auth('sanctum')->id();
      

        $DuplicateClasswork = [];


        $checkClasswork = tbl_classwork::where('tbl_classworks.course_id', $course_id)->get();

        DB::beginTransaction();

        foreach($checkClasswork as $classwork) {
            $DuplicateClasswork = new tbl_classwork;
            $DuplicateClasswork->course_id = $new_course_id;
            $DuplicateClasswork->user_id = $userId;
            $DuplicateClasswork->type =  $classwork->type;
            $DuplicateClasswork->title =  $classwork->title;
            $DuplicateClasswork->instruction =  $classwork->instruction;
            $DuplicateClasswork->duration =  $classwork->duration;
            $DuplicateClasswork->points =  $classwork->points;
            $DuplicateClasswork->attachment = $classwork->attachment;
            $DuplicateClasswork->save();
    
    
            if($classwork->type == 'Objective Type'){
                $QuestionList =  tbl_Questions::where('tbl_questions.classwork_id', $classwork->id)->get();
    
                foreach($QuestionList as $item){
    
                    $newQuestion = new tbl_Questions;
                    $newQuestion->classwork_id = $DuplicateClasswork->id;
                    $newQuestion->question = $item['question'];
                    $newQuestion->answer = $item['answer'];
                    $newQuestion->type = $item['type'];
                    $newQuestion->points = $item['points'];
                    $newQuestion->sensitivity = $item['sensitivity'];
                    $newQuestion->required = $item['required'];
                    $newQuestion->save();
    
                    $QuestionChoiceList = tbl_choice::where('tbl_choices.question_id', $item['id'])->get();
                    foreach($QuestionChoiceList as $ques_choice){
                        $newChoice = new tbl_choice;
                        $newChoice->question_id = $newQuestion->id;
                        $newChoice->Choice = $ques_choice['Choice'];
                        $newChoice->isDestructor = $ques_choice['isDestructor'];
                        $newChoice->save();
    
                        $checkSubQuestion = tbl_SubQuestion::where('answer_id', $ques_choice['id'])
                        ->where('mainQuestion_id', $item['id'])
                        ->first();
                        if($checkSubQuestion){
                            $newSubques = new tbl_SubQuestion;
                            $newSubques->mainQuestion_id = $newQuestion->id;
                            $newSubques->answer_id = $ques_choice['id'];
                            $newSubques->sub_question = $checkSubQuestion->sub_question;
                            $newSubques->save();
                        }
    
                    }
                }
            }
        }

       

        DB::commit();
        return $DuplicateClasswork;

      
     }
     



















}
