<?php

namespace App\Http\Controllers\api\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\tbl_userDetails;
use App\Models\tbl_user_departments;
use Illuminate\Support\Facades\Hash;
use App\Mail\SendNewPassword;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;
class ManageUserController extends Controller
{


    public function getAllusers($userType) {



      
        $isActive = '(SELECT COUNT(*) FROM sessions WHERE user_id =  tbl_user_details.user_id) AS isActive';
        $users = tbl_userDetails::where("role",$userType)
        ->select("users.role","users.email","users.email_verified_at as isVerified",
        "tbl_user_details.*","tbl_departments.short_name as department_short_name","tbl_departments.name as department_name","tbl_departments.id as department_id")
        ->selectRaw($isActive)
        ->leftJoin("users", "users.id", "=", "tbl_user_details.user_id")
        ->leftJoin("tbl_user_departments", "tbl_user_departments.user_id", "=", "users.id")
        ->leftJoin("tbl_departments", "tbl_departments.id", "=", "tbl_user_departments.department_id")
        ->orderBy('users.created_at', 'DESC')
        ->get();

       


            
        


        
        return $users;
    }
    



    public function bulkadduser(Request $request)
    {

        $user_login_details = [];
        $usertype = $request->user_type;
        $users_data = $request->users_data;
        $department_id = $request->department_id;
        DB::beginTransaction(); // <-- first line  

        try{
             
            foreach($users_data as $user) {

                $first_name = $user['first_name'] == null ? ' ' : $user['first_name'];
                $middle_name = $user['middle_name'] == null ? ' ' :  $user['middle_name'];
                $last_name = $user['last_name']  == null ? ' ' :  $user['last_name'];
           
                $email = preg_replace('/\s+/', '', $user['email']); ;

                $userFind = User::where('email',$email)->count();


                if($userFind == 0 ) {
                    $New = User::create([
                        'email' =>  $email,
                        'password' => Hash::make('orange@2021'),
                        'role' =>  $usertype,
                        'email_verified_at' =>  date('Y-m-d H:i:s'),
                    ]);
        
        
                    $details = new tbl_userDetails;
                    $details->user_id = $New->id;
                    $details->firstName = $first_name;;
                    $details->middleName =$middle_name;
                    $details->lastName =$last_name;
                    $details->save();
        
        


                    if($usertype != 'CampusDirector') {
                        $departments = new tbl_user_departments;
                        $departments->user_id = $New->id;
                        $departments->department_id = $request->department['id'];
                        $departments->save();
                    }
                
              

                    $user_login_details[]= $details;
                }
            
            
                $childModelSaved = true; 

            }

        } catch(Exception $e)
        {
            $childModelSaved = false;
            DB::rollBack();
        }

        if($childModelSaved) {
            DB::commit();
        }

    
           return ['account'=>$user_login_details];
    
    }
    
    public function adduser(Request $request, $usertype)
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
            'role' =>  $usertype,
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
        $details->student_id = $usertype == 'Student' ? $request->student_id : null;
        $details->save();


        if($usertype != 'CampusDirector') {
            $departments = new tbl_user_departments;
            $departments->user_id = $New->id;
            $departments->department_id = $request->department['id'];
            $departments->save();
        }
       



        return response()->json([
            "user_id"=> $New->id, 
            "firstName"=>$details->firstName, 
            "lastName"=>$details->lastName, 
            "middleName"=>$details->middleName, 
            "role"=> $usertype, 
            "email" => $New->email,
            "student_id" => $details->student_id,
            "isVerified" => true,
            "isActive" => 0,
            "department_short_name" => !isset($request->department['short_name'])  ? '' : $request->department['short_name'],
            "department_full_name" => !isset($request->department['name']) ? '' : $request->department['name'],
        ]);
    }

    public function updateUser(Request $request, $id)
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



               $departments = tbl_user_departments::where('user_id',$id)->first();
               if($departments) {
                $departments->department_id = $request->department['id'];
                $departments->save();
               } else {
                $departments = new tbl_user_departments;
                $departments->user_id = $id;
                $departments->department_id = $request->department['id'];
                $departments->save();
               }
             
       

               $user->email = $request->email;
               $user->save();
               return "Details Successfully Updated";
           }
       }
    
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

    public function resetUserPassword($id) {
        $userTeacher = User::find($id);

        if($userTeacher) {
            $newpassword = $this->generatePassword();
            $userTeacher->password =  Hash::make($newpassword);
            $userTeacher->save();
            Mail::to($userTeacher->email)->send(new SendNewPassword($newpassword));
            return "Users password successfully reset! Users' new password: " .$newpassword  ;
        }

    }

}
