<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\tbl_userDetails;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidatationException;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendEmailVerification;
use Illuminate\Support\Str;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Carbon\Carbon;


class AuthController extends Controller
{
    use ThrottlesLogins;

    protected $maxAttempts = 5;
    protected $decayMinutes = 1;

    public function UserLogin(Request $request){

    
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

    
        /* if($request->email != "admin@gmail.com"){
            $user = User::where('email', $request->email)->whereNotNull('email_verified_at')->first();

            if(!$user){
                return response()->json([
                    "message" => "Your email address is not verified.",
                    "success" => false
                ]);
            }
        } */


        if (method_exists($this, 'hasTooManyLoginAttempts') && $this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);
            return $this->sendLockoutResponse($request);
        }
        

        
        if(Auth::attempt($request->only('email', 'password'))){
            //$authToken = $user->createToken('auth-token')->plainTextToken;
            //$token = $request->user()->createToken('auth-token');          
            //$request->session()->regenerate();
            Auth::logoutOtherDevices($request->password);
            if($request->email != "isueorange@gmail.com"){
                return response()->json([
                    "message" => "Login Success",
                    "verified" => auth("sanctum")->user()->email_verified_at != null ? true : false,
                    "success" => true,
                ]); 
            }
            else{
                return response()->json([
                    "message" => "Login Success",
                    "verified" => true,
                    "success" => true,
                ]); 
            }
                      
        }
        else{
            $this->incrementLoginAttempts($request);
            return response()->json([
                "message" => "Incorrect Email or Password. Please try again",
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
            'student_id' => ['required', 'min:6','max:10','unique:tbl_user_details'],
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

        //return $request->email;
        return response()->json([
            "message" => "Please check your email for Verification!",
            "success" => true,

        ]);
        
    
    }

// '$2y$10$cRl5lx14qOBXEh5tzJZZn.ajz5YzZCWE1si3ao7g7aCiIexktqlRG'
    public function ChangePassword(Request $request){
        
        $validated = $request->validate([
            'new_password' => ['required', 'min:6'],
        ]);
        if(Hash::check(strval($request->current_password), auth()->user()->password)){
            auth()->user()->password = Hash::make($request->new_password);
            auth()->user()->update();
            
            $request->session()->forget('password_hash_web');

            Auth::guard('web')->login(auth()->user());

            // auth()->user();
            
            return 1;
        }
        else{
            return 0;
        } 
    }

    public function ConfirmPassword(Request $request){
        
        $validated = $request->validate([
            'password' => ['required']
        ]);

        if(Hash::check(strval($request->password), auth()->user()->password)){
            return response()->json([
                "message" => "Password confirmed!",
                "success" => true
            ]);
        
    
        }
        else{
            return response()->json([
                "message" => "Password Invalid!",
                "success" => false
            ]);
        } 
    }

    public function CheckStudentId($id){

        if($id == null ||  $id == ''){
            return response()->json([
                "message" => "Please Enter a Student ID!",
                "success" => false
            ]);
        }
      


        $check_student_id = tbl_userDetails::where('student_id', $id)->first();
        if(!$check_student_id){
            return response()->json([
                "message" => "Student ID Number is Invalid!",
                "type"=>"Not_Valid",
                "success" => false
            ]);

        }

        $check_student_email = User::find($check_student_id->user_id);
        if($check_student_email->email == null || $check_student_email->email == ''){
            return response()->json([
                "message" => "Student ID Number is Valid!",
                "success" => true
            ]);

        }else{
            return response()->json([
                "message" => "This Student ID Number is already in use!",
                "type"=>"Already_Account",
                "success" => false
            ]);
        }



       

    }


    public function CheckStudentDetails(Request $request, $id){

        $validated = $request->validate([
            'firstName' => ['required'],
            'middleName' => ['required'],
            'lastName' => ['required'],
            'birthday' => ['required']
        ]);

        $check_student_id = tbl_userDetails::where('student_id', $id)->first();

        if($check_student_id){
            $storeddate = date('Y-m-d', strtotime($check_student_id->birthday));   
            $inputeddate = date('Y-m-d', strtotime($request->birthday));   
            if($storeddate == $inputeddate){
                return response()->json([
                    "message" => "Student Details is Valid!",
                    "success" => true
                ]);
            }else{
                return response()->json([
                    "message" => "Your birthday does not match on our records",
                    "success" => false
                ]);
            }

        }
        return response()->json([
            "message" => "Student Details is Invalid!",
            "success" => false
        ]);
        

    }

    public function ResgisterAccount(Request $request, $id){

        $validated = $request->validate([
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:6','max:20' ,'confirmed']
        ]);

        $check_student_id = tbl_userDetails::where('student_id', $id)->first();
        if($check_student_id){
            $check_student_id->firstName = $request->firstName;
            $check_student_id->middleName = $request->middleName;
            $check_student_id->lastName = $request->lastName;
            $check_student_id->suffix = $request->suffix;
            $check_student_id->save();

            $check_user = User::find($check_student_id->user_id);
            $check_user->email = $request->email;
            $check_user->password = Hash::make($request->password);
            $check_user->save();

            $isverified = $check_user->email_verified_at != null ? true : false;

            return response()->json([
                "message" => "Your Account has been Registered!",
                "isVerified"=>$isverified,
                "success" => true
            ]);
        }
        return response()->json([
            "message" => "Student Details is Invalid!",
            "success" => false
        ]);
        

    }

 

    
    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request) {
        auth()->user()->update(['device_key'=>null]);
        $session = DB::table('sessions')->where('id', \Session::getId())->delete();
        request()->user()->tokens()->delete();
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
    }
}   

