<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\tbl_userDetails;
use Illuminate\Support\Facades\Hash;
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
    public function getAllTeacher() {
        $teachers = tbl_userDetails::where('role','Teacher')
        ->select('users.role','users.firstName','users.middleName','users.lastName','users.email',
        'tbl_user_details.*')
        ->leftJoin('users', 'users.id', '=', 'tbl_user_details.user_id')
        ->get();

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
        $UpdateDetails = User::find($userId);
    
        //tbl_userDetails::where("tbl_user_details.user_id",$userId)->first();
        if($UpdateDetails){
            $UpdateDetails->firstName = $request->firstName;
            $UpdateDetails->middleName = $request->middleName;
            $UpdateDetails->lastName = $request->lastName;
            $UpdateDetails->email = $request->email;
            
            $Info = tbl_userDetails::where("tbl_user_details.user_id",$userId)->first();
            if($Info){
                $Info->cp_no = $request->cp_no;
                $Info->save();
                $UpdateDetails->save();
            }
            return "Details Successfully Updated";
        }
    }
    public function resetTeacherPassword($id) {
        $userTeacher = User::find($id);
        $pass_pattern = 'ccsictlms-' . strtolower($userTeacher->lastName);
        if($userTeacher) {
            $userTeacher->password =  Hash::make($pass_pattern);
            $userTeacher->save();
            return "User's password successfully reset!" . $pass_pattern;
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
