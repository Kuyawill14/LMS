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
use Illuminate\Support\Str;


class UserProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
   
        //return \Config::get('app.do_url');
        $userId = auth('sanctum')->id();
        
        $userDetails = User::where('users.id' ,$userId)
        ->select('users.role','users.email','users.email_verified_at as verified',
        'tbl_user_details.*')
        ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id')
        ->first();
        
        $userDetails->verified =  $userDetails->verified != null ? true : false;
       /*  $userDetails->profile_pic =  str_replace(return \Config::get('app.do_url');.'/', "",$userDetails->profile_pic);
        return $userDetails->profile_pic; */
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
     * @return \Illuminate\Http\Response
     */
    public function getCourseAndClassesList()
    {
        $i = [];
        $totalProgress = 0;
        $userId = auth('sanctum')->id();
        if(auth('sanctum')->user()->role != "Student") {
            $allClass = tbl_userclass::select('tbl_subject_courses.course_name',
            'tbl_subject_courses.course_code',
            'tbl_subject_courses.id as course_id',
            )
            ->selectRaw('count(tbl_userclasses.course_id ) as student_count')
            ->selectRaw('count(tbl_class_classworks.class_id ) as classwork_count')
            

            ->leftJoin('tbl_classes', 'tbl_userclasses.class_id', '=', 'tbl_classes.id')
            ->leftJoin('tbl_subject_courses', 'tbl_userclasses.course_id', '=', 'tbl_subject_courses.id')
            ->leftJoin('tbl_class_classworks','tbl_class_classworks.class_id','=','tbl_classes.id')
            ->groupBy('tbl_subject_courses.course_name','tbl_subject_courses.course_code','tbl_subject_courses.id')
            ->where('user_id',$userId)
            ->get();

            foreach($allClass as $key => $value) {
                
                $StudentCount = tbl_userclass::where('course_id', $value ->course_id)
                ->leftJoin('users','users.id','=','tbl_userclasses.user_id')
                ->where('users.role','Student')
                ->count();
                $value->student_count = $StudentCount;
            }
            return $allClass;

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
       
       
        $userId = auth('sanctum')->id();
        $UpdatePicture = tbl_userDetails::where("tbl_user_details.user_id",$userId)->first();
        if($UpdatePicture){
            $file = $request->file('file');
            if($file != ""){
                
                $path =  str_replace(\Config::get('app.do_url').'/', "", $UpdatePicture->profile_pic);
                if($UpdatePicture->profile_pic != null){
                    Storage::disk('DO_spaces')->delete($path);
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
                if($sj->status == ''){
                    $sj->status = null;
                }
            }
        }
        return $SubmitSubj;
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
