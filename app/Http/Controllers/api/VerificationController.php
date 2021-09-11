<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Verified;
use App\Models\User;

class VerificationController extends Controller
{
    public function verify(Request $request){
 
        $user = User::findOrFail($request->id);

        //dd($user->getEmailForVerification(), $request->hash);
        /* if (! hash_equals((string) $request->id, (string) $request->user()->getKey())) {
            throw new AuthorizationException;
        } */


        if (! hash_equals((string) $request->hash, sha1($user->getEmailForVerification()))) {
            return response()->json([
                "message" => "Unauthorized!",
                "success" => false
            ]);
        }

        if ($user->hasVerifiedEmail()) {
            return response()->json([
                "message" => "User already verified!",
                "success" => false
            ]);
        }

        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

        return response()->json([
            "message" => "Email verified successfully!",
            "success" => true
        ]);
    }

    public function resendVerificationEmail(Request $request){

        $user = User::where('email',  $request->email)->first();

        if(!$user){
            return response()->json([
                "message" => "Verification Failed to Send!",
                "success" => false
            ]);
        }

        $user->sendEmailVerificationNotification();

        return response()->json([
            "message" => "Verification Send Successfully!",
            "success" => true
        ]);
    }

    public function UpdateAndResendEmail(Request $request){
        

        $user = User::where('id',  $request->id)->first();

        if(!$user){
            return response()->json([
                "message" => " Failed to update Email!",
                "success" => false
            ]);
        }
        if($request->email == $user->email ){
            return response()->json([
                "message" => "There is no changes in email!",
                "success" => false
            ]);
        }
        
        $validated = $request->validate([
            'email' => ['required', 'email', 'unique:users'],
        ]);

       
        $user->email = $request->email;
        $user->save();

        $user->sendEmailVerificationNotification();
        return response()->json([
            "message" => "Email successfully change, please check your for the email verification!",
            "success" => true
        ]);
    }

}
