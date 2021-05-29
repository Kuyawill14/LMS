<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidatationException;

class LoginController extends Controller
{
    public function UserLogin(Request $request){
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);
        if(Auth::attempt($request->only('email', 'password'))){
            return response()->json(Auth::user(),200);
        }
        throw ValidatationException::withMessages([
            'email' => ['Credentials Invalid']
        ]);

        return "Invalid User credentials";
    }

    public function UserRegister(Request $request){
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);
        /* if(Auth::attempt($request->only('email', 'password'))){
            return response()->json(Auth::user(),200);
        } */

       $New =  User::create([
            'name' =>  $request->name,
            'email' =>  $request->email,
            'password' => Hash::make($request->password),
        ]);

        return $New;



        
    }
}
