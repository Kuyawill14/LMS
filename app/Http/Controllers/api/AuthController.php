<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\tbl_userDetails;
use App\Models\Tbl_class;
use App\Models\tbl_userclass;
use App\Models\tbl_notification;
use App\Events\NewNotification;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidatationException;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\ThrottlesLogins;



class AuthController extends Controller
{
    use ThrottlesLogins;

    protected $maxAttempts = 5;
    protected $decayMinutes = 2;

    public function UserLogin(Request $request){

        

        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

    
        if($request->email != "admin@gmail.com"){
            $user = User::where('email', $request->email)->whereNotNull('email_verified_at')->first();

            if(!$user){
                return response()->json([
                    "message" => "Your email address is not verified.",
                    "success" => false
                ]);
            }
        }


        if (method_exists($this, 'hasTooManyLoginAttempts') && $this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);
            return $this->sendLockoutResponse($request);
        }
        

        
        if(Auth::attempt($request->only('email', 'password'))){

            //$authToken = $user->createToken('auth-token')->plainTextToken;
            $request->session()->regenerate();
            //Auth::logoutOtherDevices($request->password);
            return response()->json([
                "message" => "Login Success",
                "success" => true
            ]);            
        }
        else{
            $this->incrementLoginAttempts($request);
            return response()->json([
                "message" => "The provided credentials do not match our records.",
                "success" => false
            ]);
        }
        
    }

   
    public function UserRegister(Request $request){
        
        $validated = $request->validate([
            'firstName' => ['required'],
            'middleName' => ['required'],
            'lastName' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'student_id' => ['required', 'unique:tbl_user_details'],
            'password' => ['required', 'min:6','max:15' ,'confirmed']
        ]);

      
        $New = User::create([
            'email' =>  $request->email,
            'password' => Hash::make($request->password),
            'role' =>  'Student',
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
        $New->sendEmailVerificationNotification();
        return response()->json([
            "message" => "Please check your email for Verification!",
            "success" => true
        ]);
        
    
    }


    public function ChangePassword(Request $request){
        
        $validated = $request->validate([
            'new_password' => ['required', 'min:6'],
        ]);

        if(Hash::check($request->current_password, auth()->user()->password)){
            //return $request;
            auth()->user()->password = Hash::make($request->new_password);
            auth()->user()->save();

            auth()->user();
        }
        else{
            return 'Change password failed!';
        } 
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request) {
        $session = DB::table('sessions')->where('id', \Session::getId())->delete();
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
    }
}   

