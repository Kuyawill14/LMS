<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Notification;
use App\Notifications\SendPasswordResetNotification;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use App\Models\User;
use Illuminate\Support\Str;
use Carbon\Carbon;


class ForgotPasswordController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function SendResetPassword(Request $request)
    {
       $request->validate([
            'email' => ['required', 'email'],
        ]);
        $user = User::where('users.email', $request->only('email'))->first();

        if(!$user){
            return response()->json([
                "message" => "Email is not found!",
                "success" => false
            ]); 
        }
        
        //Create Password Reset Token
        DB::table('password_resets')->insert([
            'email' => $request->email,
            'token' => str_random(60),
            'created_at' => Carbon::now()
        ]);

        //Get the token just created above
        $tokenData = DB::table('password_resets')
        ->where('email', $request->email)->first();

       $status = Notification::send($user, new SendPasswordResetNotification($tokenData->token,  $user->id));

       if($tokenData){
            return response()->json([
                "message" => "Please check your email for confirmation",
                "success" => true
            ]); 
       }
        return response()->json([
            "message" => "Password rest failed",
            "success" => false
        ]);

    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function ConfirmResetPassword(Request $request){

        $request->validate([
            'token' => 'required',
            'id' => 'required',
            'password' => 'required|min:6|confirmed',
        ]);

        $user = User::find($request->id);
        if(!$user){
            return response()->json([
                "message" => "User not found",
                "success" => false
            ]);
        }

        $user->password = Hash::make($request->password);
        $user->remember_token = Str::random(60);
        $user->save();

       $PassReset =  DB::table('password_resets')->where('email', $user->email)
        ->delete();
        
     
        if($PassReset ){
            return response([
                'message'=> 'Password reset successfully',
                'success'=> true
            ]);
        }
      
        return response([
            'message'=> 'Password reset failed',
            'success'=>false
        ]);

    }
}
