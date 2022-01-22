<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\tbl_userDetails;
use Illuminate\Support\Facades\Hash;
use App\Mail\SendNewPassword;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;
class AdminController extends Controller
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


    public function getAllStudentAndTeacherCount() {
        $teacher = User::where("role","Teacher")->count();
        $student = User::where("role","Student")->count();

    
        $ActiveStudent = User::where("role","Student")
        ->leftJoin('sessions', 'sessions.user_id', '=','users.id')
        ->whereNotNull('sessions.user_id')
        ->count();

        $OfflineStudent = User::where("role","Student")
        ->leftJoin('sessions', 'sessions.user_id', '=','users.id')
        ->whereNull('sessions.user_id')
        ->count();

        $ActiveTeacher = User::where("role","Teacher")
        ->leftJoin('sessions', 'sessions.user_id', '=','users.id')
        ->whereNotNull('sessions.user_id')
        ->count();

        $OfflineTeacher = User::where("role","Teacher")
        ->leftJoin('sessions', 'sessions.user_id', '=','users.id')
        ->whereNull('sessions.user_id')
        ->count();

        return ['teacher'=> $teacher,'student'=> $student, 'ActiveStudent'=> $ActiveStudent, 'ActiveTeacher'=> $ActiveTeacher, 
                'OfflineStudent'=> $OfflineStudent, 'OfflineTeacher'=> $OfflineTeacher];
    }




    public function getAllTeacherProgress() {
        $teachers = tbl_userDetails::where("role","Teacher")
        ->select("users.role","users.email",
        "tbl_user_details.*")
        ->leftJoin("users", "users.id", "=", "tbl_user_details.user_id")
        ->get();

        return $teachers;
    }




    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function ManualVerifyUser($id)
    {
        $verifyUser = User::find($id);
        if($verifyUser){
            $verifyUser->email_verified_at = date('Y-m-d H:i:s');
            $verifyUser->save();

            return response()->json([
                'message'=> 'User Verified',
                "success" => true
            ]);
        }

        return response()->json([
            'message'=> 'User id is invalid!',
            "success" => false
        ]);
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
