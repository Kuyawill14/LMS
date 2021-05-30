<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\tbl_userDetails;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidatationException;

class AuthController extends Controller
{
    public function UserLogin(Request $request){

        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);
        
        if(Auth::attempt($request->only('email', 'password'))){
            $user = auth('sanctum')->user();
            //if($user['role'] == "Teacher")
                return response()->json("Login Success",200);
            
         
           
        }
       /*  throw ValidatationException::withMessages([
            'email' => ['Credentials Invalid']
        ]); */

        return response()->json("Login Failed",203);
    }

    public function UserRegister(Request $request){
        return $request;
        $validated = $request->validate([
            'firstName' => ['required'],
            'middlename' => ['required'],
            'lastName' => ['required'],
            'role' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:6', 'confirmed']
        ]);
        /* if(Auth::attempt($request->only('email', 'password'))){
            return response()->json(Auth::user(),200);
        } */
     
       $New =  User::create([
            'firstName' =>  $request->firstName,
            'middleName' =>  $request->middlename,
            'lastName' =>  $request->lastName,
            'email' =>  $request->email,
            'password' => Hash::make($request->password),
            'role' =>  $request->role,
        ]);

        $details = new tbl_userDetails;
        $details->user_id = $New->id;
        $details->save();
        
        return $New;        
    }

    public function logout() {
        Auth::logout();
    }

    //GetUserDetails
    public function GetDetails() {
        $userId = auth('sanctum')->id();
        $userDetails = tbl_userDetails::where('user_id',$userId)
        ->select('users.firstName','users.middleName','users.lastName','users.email','tbl_user_details.*')
        ->leftJoin('users', 'users.id', '=', 'tbl_user_details.user_id')
        ->get();
        return $userDetails;

       /*  ->select('users.firstName','users.lastName',
        'tbl_user_details.student_id', 'tbl_user_details.address', 'tbl_user_details.cp_no', 
        'tbl_user_details.profile_pic','tbl_user_details.social_account','tbl_user_details.info',
        'tbl_user_details.created_at')
        ->leftJoin('users', 'users.id', '=', 'tbl_user_details.user_id') */

        
    }
}   

