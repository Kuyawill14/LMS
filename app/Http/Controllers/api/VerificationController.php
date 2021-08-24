<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class VerificationController extends Controller
{
    public function verify(Request $request){
        //dd($request->all());

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
           /*  return $request->wantsJson()
                        ? new JsonResponse([], 204)
                        : redirect($this->redirectPath()); */

                return response()->json([
                    "message" => "User already verified!",
                    "success" => false
                ]);

                //return redirect($this->redirectPath());
        }

        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

        /* if ($response = $this->verified($request)) {
            return $response;
        } */

       /*  return $request->wantsJson()
                    ? new JsonResponse([], 204)
                    : redirect($this->redirectPath())->with('verified', true); */

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
}
