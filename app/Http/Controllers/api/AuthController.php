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
            //Auth::logoutOtherDevices($request->password);

          /*   DB::table('sessions')
            ->where('user_id', \Auth::user()->id)
            ->where('id', '!=', \Session::getId())->delete(); */
            return response()->json("Login Success",200);
            
           /*  return response()->json([
                'access_token' =>$authToken,
            ]); */
            
        }
        return response()->json("Login Failed",203);
    }

    public function UserRegister(Request $request){
        
        $validated = $request->validate([
            'firstName' => ['required'],
            'middleName' => ['required'],
            'lastName' => ['required'],
            'role' => ['required'],
            'class_code' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:6', 'confirmed']
        ]);

 
        if($request->role == 'Student'){

            $Class = Tbl_class::where('class_code', $request->class_code)->first();
            if($Class){
                $New = User::create([
                    'email' =>  $request->email,
                    'password' => Hash::make($request->password),
                    'role' =>  $request->role,
                ]);

              

                $details = new tbl_userDetails;
                $details->user_id = $New->id;
                $details->firstName = $request->firstName;
                $details->middleName = $request->middleName;
                $details->lastName = $request->lastName;
                $details->save();
                $this->JoinClassAfterRegister($New->id, $request->class_code);
                return $New;  
            }
            else{
                return response()->json(['message'=>"Class code is invalid!"],202);
            }
        }
        else{
            $New =  User::create([
                'email' =>  $request->email,
                'password' => Hash::make($request->password),
                'role' =>  $request->role,
            ]);

            $details = new tbl_userDetails;
            $details->user_id = $New->id;
            $details->firstName = $request->firstName;
            $details->middleName = $request->middleName;
            $details->lastName = $request->lastName;
            $details->save();
            return $New;  
        }
    
    }

    public function JoinClassAfterRegister($userId, $id){

        $Class = Tbl_class::where('class_code', $id)->first();
        
        if(!$Class){
            return response()->json("Class doest exist",203);
        }
        else{
            $Check = tbl_userclass::withTrashed()
            ->where('course_id','=', $Class->course_id)
            ->where('user_id','=',$userId)
            ->first();
           
            if($Check){
                if($Check->deleted_at == null){
                    return;
                }
                else{
                    $Check->restore();
                    return;
                }
                
            }
            
        }
           
        $JoinClass = new tbl_userclass;
        $JoinClass->class_id = $Class->id;
        $JoinClass->user_id = $userId;
        $JoinClass->course_id = $Class->course_id;
        $JoinClass->save();

        $userInClass = DB::table('tbl_userclasses')
        ->select('tbl_userclasses.id','tbl_userclasses.user_id', 'tbl_classes.class_name', 'users.role','tbl_subject_courses.course_name','tbl_subject_courses.id as course_id','tbl_subject_courses.completed as status')
        ->leftJoin('tbl_classes', 'tbl_classes.id', '=', 'tbl_userclasses.class_id')
        ->leftJoin('tbl_subject_courses', 'tbl_userclasses.course_id', '=', 'tbl_subject_courses.id')
        ->leftJoin('users', 'users.id', '=', 'tbl_userclasses.user_id')
        ->where('users.role', 'Teacher')
        ->where('tbl_userclasses.class_id', $JoinClass->class_id)
        ->first();

        $newNotification = new tbl_notification;
        $newNotification->course_id = $userInClass->course_id;
        $newNotification->class_id = $JoinClass->class_id;
        $newNotification->from_id =  $userId;
        $newNotification->message = "Join to your ".$userInClass->course_name." - " .$userInClass->class_name ." class";
        $newNotification->notification_type = 2;
        $newNotification->save();
        broadcast(new NewNotification($newNotification))->toOthers();
        return;
        
    }


    
    


    public function ChangePassword(Request $request){
        
        $validated = $request->validate([
            'new_password' => ['required', 'min:6'],
        ]);

        if(Hash::check($request->current_password, auth()->user()->password)){
            //return $request;

            $ChangePass = User::find(auth('sanctum')->id());
            if($ChangePass){
                $ChangePass->password = Hash::make($request->new_password);
                $ChangePass->update();
            }


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

