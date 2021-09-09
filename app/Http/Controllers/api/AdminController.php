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
    public function getAllTeacher() {

        $isActive = '(SELECT COUNT(*) FROM sessions WHERE user_id =  tbl_user_details.user_id) AS isActive';
        $teachers = tbl_userDetails::where("role","Teacher")
        ->select("users.role","users.email","users.email_verified_at as isVerified",
        "tbl_user_details.*")
        ->selectRaw($isActive)
        ->leftJoin("users", "users.id", "=", "tbl_user_details.user_id")
        ->get();
        
        return $teachers;
    }

    public function getAllStudent() {
        $isActive = '(SELECT COUNT(*) FROM sessions WHERE user_id =  tbl_user_details.user_id) AS isActive';
        $student = tbl_userDetails::where("role","Student")
        ->select("users.role","users.email","users.email_verified_at as isVerified",
        "tbl_user_details.*")
        ->selectRaw($isActive)
        ->leftJoin("users", "users.id", "=", "tbl_user_details.user_id")
        ->get();
        
        return $student;
    }

    public function getAllStudentAndTeacherCount() {
        $teacher = User::where("role","Teacher")->count();
        $student = User::where("role","Student")->count();
        return ['teacher'=> $teacher,'student'=> $student];
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
            "email" => $New->email,
            "student_id" => $details->student_id,
            "isVerified" => true,
            "isActive" => 0,
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
            "email" => $New->email,
            "isVerified" => true,
            "isActive" => 0,
        ]);
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

       $user = User::find($id);
       if($user){
           $UpdateDetails = tbl_userDetails::where('tbl_user_details.user_id',$id)->first();
           if($UpdateDetails){
               $UpdateDetails->firstName = $request->firstName;
               $UpdateDetails->middleName = $request->middleName;
               $UpdateDetails->lastName = $request->lastName;
               $UpdateDetails->address = $request->address;
               $UpdateDetails->student_id = $request->student_id;
               $UpdateDetails->cp_no = $request->cp_no;
               $UpdateDetails->social_account =  $request->social_account;
               $UpdateDetails->save();

               $user->email = $request->email;
               $user->save();
               return "Details Successfully Updated";
           }
       }
    
    }

    public function generatePassword() {
        $append= "ORANGE";
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
            return "Users password successfully reset! " .$newpassword  ;
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
