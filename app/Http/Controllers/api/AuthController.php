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
            //$authToken = $user->createToken('auth-token')->plainTextToken;
            $request->session()->regenerate();
            return response()->json("Login Success",200);
            
           /*  return response()->json([
                'access_token' =>$authToken,
            ]); */
            
        }
       /*  throw ValidatationException::withMessages([
            'email' => ['Credentials Invalid']
        ]); */

        return response()->json("Login Failed",203);
    }

    public function UserRegister(Request $request){
   
        $validated = $request->validate([
            'firstName' => ['required'],
            'middleName' => ['required'],
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
            'middleName' =>  $request->middleName,
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

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
    }
}   

