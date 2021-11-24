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
        "tbl_subject_courses.semester_id","tbl_subject_courses.department","tbl_subject_courses.course_guide")
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
        //return $id;
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
}
