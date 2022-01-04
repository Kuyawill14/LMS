<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Models\User;
use App\Models\tbl_userDetails;
use App\Models\Tbl_class;
use App\Models\tbl_userclass;
use App\Models\tbl_student_sub_module_progress;
use App\Models\tbl_sub_modules;
use App\Models\tbl_Submission;
use App\Models\tbl_classwork;
use App\Models\tbl_classClassworks;
use App\Models\tbl_teacher_course;
use Carbon\Carbon;
use Session;
use Image;

use Illuminate\Support\Str;
//use Image;

class UserProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
   
       
        $currentUser = auth('sanctum')->user();
        $userDetails  = auth('sanctum')->user()->tbl_userDetails;
        $department = auth('sanctum')->user()->tbl_user_departments;
        //$user_sessions = DB::table('sessions')->where('user_id', $currentUser->id)->get();

        $userDetails->email = $currentUser->email;
        $userDetails->role = $currentUser->role;
        $userDetails->profile_pic = str_replace('.cdn', '', $userDetails->profile_pic);
        // $userDetails->sessions =  $user_sessions;
        // $userDetails->current_sessions = Session::getId();
        $userDetails->department_id = $department != null ? $department->department_id : null;

        if($currentUser->email == 'admin@gmail.com'){
            $userDetails->verified = $userDetails->verified = true;
        }else{
            $userDetails->verified = $currentUser->email_verified_at != null ? true : false;
        }
        return $userDetails;
    
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
     * @return \Illuminate\Http\Response
     */
    public function getCourseAndClassesList()
    {
        $i = [];
        $totalProgress = 0;
        $userId = auth('sanctum')->id();
        if(auth('sanctum')->user()->role != "Student") {

            $allCourse = tbl_teacher_course::where('tbl_teacher_courses.user_id', $userId)
            ->select('tbl_subject_courses.course_name','tbl_subject_courses.course_code','tbl_subject_courses.id as course_id')
            ->selectRaw('count(tbl_classworks.course_id ) as classwork_count')
            ->leftJoin('tbl_classworks','tbl_classworks.course_id','=','tbl_teacher_courses.course_id')
            ->leftJoin('tbl_subject_courses', 'tbl_teacher_courses.course_id', '=', 'tbl_subject_courses.id')
            ->groupBy('tbl_subject_courses.course_name','tbl_subject_courses.course_code','tbl_subject_courses.id')
            ->get();
            foreach($allCourse as $key => $value) {
                $StudentCount = tbl_userclass::where('course_id', $value ->course_id)
                ->leftJoin('users','users.id','=','tbl_userclasses.user_id')
                ->where('users.role','Student')
                ->count();
                $value->student_count = $StudentCount;
            }
            return $allCourse;

        }
        else{

            $allClass = tbl_userclass::select('tbl_classes.class_name','tbl_subject_courses.course_name',
            'tbl_subject_courses.course_code','tbl_subject_courses.id as course_id',
            'tbl_classes.id as class_id','tbl_userclasses.progress')
            ->leftJoin('tbl_classes', 'tbl_userclasses.class_id', '=', 'tbl_classes.id')
            ->leftJoin('tbl_subject_courses', 'tbl_userclasses.course_id', '=', 'tbl_subject_courses.id')
            ->where('user_id',$userId)
            ->get();

            foreach($allClass as $key => $value) {
                $allSubModulesProgress = tbl_student_sub_module_progress::select('tbl_student_sub_module_progress.*')
                ->leftJoin('tbl_sub_modules', 'tbl_sub_modules.id', '=', 'tbl_student_sub_module_progress.sub_module_id')
                ->where('tbl_student_sub_module_progress.course_id', $value ->course_id )
                ->where('tbl_student_sub_module_progress.student_id',  $userId )
                ->get();
                $allSubModulesProgress = json_decode($allSubModulesProgress, true);
        
                $allSubModules = tbl_sub_modules::select('tbl_sub_modules.*', "course_id")
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
                
                tbl_userclass::where('user_id', $userId)
                ->where('course_id', $value ->course_id)
                ->update(['progress' => $totalProgress]);
            }
            return $allClass;
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updatePicture(Request $request)
    {
       
        $request->validate([
            'file' => ['required', 'image','mimes:jpeg,png,jpg', 'max:3072'],
        ]);

        $userId = auth('sanctum')->id();
        $UpdatePicture = tbl_userDetails::where("tbl_user_details.user_id",$userId)->first();
        if($UpdatePicture){
            $file = $request->file('file');

            if($file){


               /*  $image_resize = Image::make($file->getRealPath());
                $image_resize = $image_resize->resize(50, 50, function ($constraint) {
                    $constraint->aspectRatio();
                })->encode('jpg');
                Storage::disk('spaces')->put($thumb_uploads .'/'.$image->hashName(), (string) $image_resize); */
            
                if($UpdatePicture->profile_pic != null){
                    $path =  str_replace(\Config::get('app.do_url').'/', "", $UpdatePicture->profile_pic);
                   $deleted = Storage::disk('DO_spaces')->delete($path);
                }
                /* Storage::delete('public/'.$UpdatePicture->profile_pic);
                $newFile = $file->store('public/upload/profile_picture/'.$userId);
                $UpdatePicture->profile_pic = preg_replace('/\bpublic\/\b/', '', $newFile); */
                $upload_file = Storage::disk('DO_spaces')->putFile('ProfilePicture/'.$userId , $file, 'public');
                $UpdatePicture->profile_pic = \Config::get('app.do_url').'/'.$upload_file;  
            }
            
            $UpdatePicture->save();
            return "Profile Picture Updated";
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateDetails(Request $request)
    {
        //return $request;
        $userId = auth('sanctum')->id();
        $user = User::find($userId);
        if($user){
            $UpdateDetails = tbl_userDetails::where('tbl_user_details.user_id',$userId)->first();
            if($UpdateDetails){
                $UpdateDetails->firstName = $request->firstName;
                $UpdateDetails->middleName = $request->middleName;
                $UpdateDetails->lastName = $request->lastName;
                $UpdateDetails->address = $request->address;
                $UpdateDetails->cp_no = $request->cp_no;
                $UpdateDetails->social_account =  $request->social_account;
                $UpdateDetails->student_id =  $request->student_id;
                // $UpdateDetails->department =  $request->department;
                $UpdateDetails->save();

                $user->email = $request->email;
                $user->save();
                return "Details Successfully Updated";
            }
        }
    }

     /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function FetchCalendarSched()
    {

        $userId = auth('sanctum')->id();
        //$userId = 2;
        $SubmitSubj = tbl_userclass::where('tbl_userclasses.user_id', $userId)
        ->select('tbl_userclasses.class_id','tbl_userclasses.course_id'
        ,'tbl_classworks.title','tbl_class_classworks.availability','tbl_class_classworks.from_date','tbl_class_classworks.to_date'
        ,'tbl_class_classworks.classwork_id')
        ->leftJoin('tbl_class_classworks','tbl_class_classworks.class_id','=','tbl_userclasses.class_id')
        ->leftJoin('tbl_classworks','tbl_classworks.id','=','tbl_class_classworks.classwork_id')
        ->whereNull('tbl_class_classworks.deleted_at')
        ->get();
        foreach($SubmitSubj as $sj){
            $StatusCheck = tbl_Submission::where('tbl_submissions.classwork_id', $sj->classwork_id)
            ->where('tbl_submissions.user_id', $userId)
            ->first();
            
            if($StatusCheck){
                if($StatusCheck->status == "Submitted"){
                    $sj->status = $StatusCheck->status;
                }
                elseif($StatusCheck->status == "Submitting"){
                    $sj->status = $StatusCheck->status;
                }elseif($StatusCheck->status == "Taking"){
                    $sj->status = $StatusCheck->status;
                }
            }
            else{
                if($sj->status == '' || $sj->status == null){
                    $sj->status = null;
                }
            }
        }


        $user_class = tbl_userclass::where('tbl_userclasses.user_id', $userId)
        ->select('tbl_userclasses.class_id','tbl_userclasses.course_id','tbl_classes.schedule','tbl_classes.class_name','tbl_subject_courses.course_name', 'tbl_subject_courses.course_code')
        ->leftJoin('tbl_classes', 'tbl_classes.id','=','tbl_userclasses.class_id')
        ->leftJoin('tbl_subject_courses', 'tbl_subject_courses.id','=','tbl_userclasses.course_id')
        ->get();

        foreach($user_class as $class){
            $class->schedule = unserialize($class->schedule);
        }


        return ['Classwork_sched'=> $SubmitSubj , 'class_sched'=> $user_class];
    }

    
     /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function FetchTodayTask()
    {

        
        $userId = auth('sanctum')->id();
        $todayTask = tbl_userclass::whereNull('tbl_class_classworks.deleted_at')
        ->where('tbl_userclasses.user_id', $userId)
        ->select('tbl_userclasses.course_id','tbl_classworks.title','tbl_class_classworks.availability','tbl_class_classworks.from_date','tbl_class_classworks.to_date'
        ,'tbl_class_classworks.classwork_id','tbl_submissions.status')
        ->leftJoin('tbl_class_classworks','tbl_class_classworks.class_id','=','tbl_userclasses.class_id')
        ->leftJoin('tbl_classworks','tbl_classworks.id','=','tbl_class_classworks.classwork_id')
        ->leftJoin('tbl_submissions', function ($join) use ($userId) {
            $join->on('tbl_class_classworks.classwork_id', '=', 'tbl_submissions.classwork_id');
            $join->on('tbl_submissions.user_id','=',DB::raw("'".$userId."'"));
               
        })
       ->where('tbl_class_classworks.from_date', '<=', date('Y-m-d H:i:s'))
       ->where('tbl_submissions.status' , null)
       ->get();

      /*   foreach($todayTask as $sj){
            $StatusCheck = tbl_Submission::where('tbl_submissions.classwork_id', $sj->classwork_id)
            ->where('tbl_submissions.user_id', $userId)
            ->first();
            
            if($StatusCheck){
                if($StatusCheck->status == "Submitted"){
                    $sj->status = $StatusCheck->status;
                }
                elseif($StatusCheck->status == "Submitting"){
                    $sj->status = $StatusCheck->status;
                }elseif($StatusCheck->status == "Taking"){
                    $sj->status = $StatusCheck->status;
                }
            }
            else{
                if($sj->status == '' || $sj->status == null){
                    $sj->status = null;
                }
            }
        } */
    
        return $todayTask;
        
    }

    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function FetchDatetoday()
    {
     
        //$date_today = 
        return  Carbon::now('Asia/Manila')->timestamp * 1000;
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
