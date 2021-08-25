<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\tbl_userDetails;
use Illuminate\Support\Facades\Hash;
use App\Mail\SendNewPassword;
use Illuminate\Support\Facades\Mail;
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
        $teachers = tbl_userDetails::where("role","Teacher")
        ->select("users.role","users.email",
        "tbl_user_details.*")
        ->leftJoin("users", "users.id", "=", "tbl_user_details.user_id")
        ->get();

        return $teachers;
    }

    public function getAllStudent() {
        $teachers = tbl_userDetails::where("role","Student")
        ->select("users.role","users.email",
        "tbl_user_details.*")
        ->leftJoin("users", "users.id", "=", "tbl_user_details.user_id")
        ->get();

        return $teachers;
    }


    public function getAllTeacherProgress() {
        $teachers = tbl_userDetails::where("role","Teacher")
        ->select("users.role","users.email",
        "tbl_user_details.*")
        ->leftJoin("users", "users.id", "=", "tbl_user_details.user_id")
        ->get();

        return $teachers;
    }




    public function removeUser($id) {
        $user_details = tbl_userDetails::where("user_id",$id)->first();
        $user = User::where("id",$id)->first();
        if($user_details && $user){
            $user_details->delete();
            $user->delete();
            return $user_details;
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function AddStudent(Request $request)
    {
        $validated = $request->validate([
            'firstName' => ['required'],
            'middleName' => ['required'],
            'lastName' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'student_id' => ['required', 'unique:tbl_user_details'],
            'password' => ['required', 'min:6','max:15', 'confirmed']
        ]);

        $New = User::create([
            'email' =>  $request->email,
            'password' => Hash::make($request->password),
            'role' =>  'Student',
            'email_verified_at' =>  date('Y-m-d H:i:s'),
        ]);

        if(!$New){
            return response()->json([
                "message" => "The provided details is invalid!",
                "success" => false
            ]);
        }
        
        $details = new tbl_userDetails;
        $details->user_id = $New->id;
        $details->firstName = $request->firstName;
        $details->middleName = $request->middleName;
        $details->lastName = $request->lastName;
        $details->student_id = $request->student_id;
        $details->save();
        return response()->json([
            "user_id"=> $New->id, 
            "firstName"=>$details->firstName, 
            "lastName"=>$details->lastName, 
            "middleName"=>$details->middleName, 
            "role"=>$request->role, 
            "email" => $New->email
        ]);


    
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addTeacher(Request $request)
    {
        $validated = $request->validate([
            'firstName' => ['required'],
            'middleName' => ['required'],
            'lastName' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:6', 'confirmed']
        ]);

        $New = User::create([
            'email' =>  $request->email,
            'password' => Hash::make($request->password),
            'role' =>  'Teacher',
            'email_verified_at' =>  date('Y-m-d H:i:s'),
        ]);

        if(!$New){
            return response()->json([
                "message" => "The provided details is invalid!",
                "success" => false
            ]);
        }


        $details = new tbl_userDetails;
        $details->user_id = $New->id;
        $details->firstName = $request->firstName;
        $details->middleName = $request->middleName;
        $details->lastName = $request->lastName;
        $details->save();


        return response()->json([
            "user_id"=> $New->id, 
            "firstName"=>$details->firstName, 
            "lastName"=>$details->lastName, 
            "middleName"=>$details->middleName, 
            "role"=>$request->role, 
            "email" => $New->email
        ]);
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
       
        $userId = $id;
        $UpdateDetails = User::where("users.id",$userId)
        ->leftjoin("tbl_user_details", "tbl_user_details.user_id", "=", "users.id")
        ->first();
        //tbl_userDetails::where("tbl_user_details.user_id",$userId)->first();
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
        $append= "isu";
        $alphabet = "aeiouxyzBCDFGHIJKL1023456789#$%&@@";
        $pass = array(); //remember to declare $pass as an array
        $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
        for ($i = 0; $i < 5; $i++) {
            $n = rand(0, $alphaLength);
            $pass[] = $alphabet[$n];
        }
        return $append . "-". implode($pass); //turn the array into a string
    }

    public function resetTeacherPassword($id) {
        $userTeacher = User::find($id);

        if($userTeacher) {
            $newpassword = $this->generatePassword();
            $userTeacher->password =  Hash::make($newpassword);
            $userTeacher->save();
            Mail::to($userTeacher->email)->send(new SendNewPassword($newpassword));
            return "Users password successfully reset!";
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
