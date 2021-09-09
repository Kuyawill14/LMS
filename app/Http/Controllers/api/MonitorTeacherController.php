<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\tbl_userDetails;
use Illuminate\Support\Facades\DB;
class MonitorTeacherController extends Controller
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
    public function teacherData() {
        $teachers = tbl_userDetails::where('role','Teacher')
        ->select('users.role','users.email',
        'tbl_user_details.*')
        ->leftJoin('users', 'users.id', '=', 'tbl_user_details.user_id')
        ->leftjoin('tbl_teacher_courses', 'tbl_teacher_courses.id' , '=', 'users.id')
        ->get();

        return $teachers;
    }


    public function getAllTeacherSummarryData() {

        $course_count = '(SELECT COUNT(*) FROM tbl_teacher_courses WHERE user_id = users.id AND tbl_teacher_courses.deleted_at IS NULL) AS course_count ';
        $class_count = '(SELECT COUNT(*) FROM tbl_userclasses WHERE user_id = users.id  AND tbl_userclasses.deleted_at IS NULL) AS class_count';
        $classwork_count = '(SELECT COUNT(*) FROM tbl_classworks WHERE user_id = users.id) AS classwork_count';
        $sub_module_count = '(SELECT COUNT(*) FROM tbl_main_modules 
        LEFT JOIN tbl_sub_modules ON  tbl_main_modules.id = tbl_sub_modules.main_module_id WHERE tbl_main_modules.created_by = users.id) AS sub_modules_count';
     
     
        $teachers = DB::table('users')
        ->select('users.id as user_id','users.role','tbl_user_details.firstName','tbl_user_details.middleName','tbl_user_details.lastName','users.email')
        ->leftjoin('tbl_user_details', 'tbl_user_details.user_id','=','users.id')
        ->selectRaw( $course_count)
        ->selectRaw( $class_count)
        ->selectRaw( $classwork_count)
        ->selectRaw( $sub_module_count)
        ->where('role','Teacher')
        // ->whereNull("tbl_teacher_courses.deleted_at")
        ->get();

    //     $teachers = DB::table('users')
    //     ->select('users.role','users.firstName','users.middleName','users.lastName','users.email',
    //    $course_count, $class_count,  $classwork_count, $sub_module_count)
    //    ->where('role','Teacher')
    //     ->get();

        return $teachers;
    }




    public function removeUser($id) {
        $user_details = tbl_userDetails::where('user_id',$id)->first();
        $user = User::where('id',$id)->first();
        if($user_details && $user){
            $user_details->delete();
            $user->delete();
            return $user_details;
        }
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
       
        $userId =$id;
        $UpdateDetails = User::where('users.id',$userId)
        ->leftjoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id')
        ->first();
        if($UpdateDetails){
            $UpdateDetails->firstName = $request->firstName;
            $UpdateDetails->middleName = $request->middleName;
            $UpdateDetails->lastName = $request->lastName;
            $UpdateDetails->email = $request->email;
            $UpdateDetails->cp_no = $request->cp_no;
            $UpdateDetails->save();
            return "Details Successfully Updated";
        }
    }

    public function generatePassword() {
        $append= 'isu';
        $alphabet = "aeiouxyzBCDFGHIJKL1023456789#$%&@@";
        $pass = array(); //remember to declare $pass as an array
        $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
        for ($i = 0; $i < 5; $i++) {
            $n = rand(0, $alphaLength);
            $pass[] = $alphabet[$n];
        }
        return $append . '-'. implode($pass); //turn the array into a string
    }

    public function resetTeacherPassword($id) {
        $userTeacher = User::find($id);

        if($userTeacher) {
            $newpassword = $this->generatePassword();
            $userTeacher->password =  Hash::make($newpassword);
            $userTeacher->save();
            Mail::to($userTeacher->email)->send(new SendNewPassword($newpassword));
 
            return "User's password successfully reset!";
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
