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

use App\Models\tbl_department;

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


        // return $request;
        $user_login_details = [];
        $usertype = $request->user_type;
        $users_data = $request->users_data;
        $department_id = $request->department_id;

    if($usertype == 'Student') {
       
        return $this->studentBulkAdd($users_data);
    } else {

        // DB::beginTransaction(); // <-- first line  
        DB::beginTransaction();
  
        array_pop($users_data);
        $getDepartments = tbl_department::all();

        foreach($users_data as $user) {

            $first_name = $user['firstName'] == null ? ' ' : $user['firstName'];
            $middle_name = !isset($user['middleName']) ? ' ' :  $user['middleName'];
            $last_name =  !isset($user['lastName']) ? ' ' :  $user['lastName'];
            $email =  !isset($user['email']) ? '' :  $user['email'];
            $department_short = !isset($user['department_short'] ) ? ' ' :  $user['department_short'];
       
            $email = preg_replace('/\s+/', '', $email); ;
          
            $userFind = User::where('email',$email)->exists();


            if(!$userFind) {
                // $New = User::create([
                //     'email' =>  $email,
                //     'password' => $user['password'],
                //     'role' =>  $user['role'],
                //     'email_verified_at' =>  date('Y-m-d H:i:s'),
                // ]);

                $New = new User;
                $New->email =  $email;
                $New->role = $user['role'];
                $New->email_verified_at = date('Y-m-d H:i:s');
                $New->save();
    
    
                $details = new tbl_userDetails;
                $details->user_id = $New->id;
                $details->firstName = $first_name;;
                $details->middleName = $middle_name;
                $details->lastName =$last_name;
                $details->save();
    
              

                foreach ($getDepartments as $item) {
                    
                    if($department_short == $item['short_name']) {
                        $departments = new tbl_user_departments;
                        $departments->user_id = $New->id;
                        $departments->department_id = $item['id'];
                        $departments->save();
        break;
                   
                    }
              

                }
                $user_login_details[]= $details;
            }
        
        
            $childModelSaved = true; 

        }
        DB::commit();

 


       return ['account'=>$user_login_details];


    }
    }


    public function studentBulkAdd($users_data) {
        $user_login_details = [];
        $user_records = [];
        $user_details_records = [];
        $i = 0;
        $user_id = [];
        $user_details_id = [];
        ini_set('max_execution_time', 1000);
        $last_id = DB::table('users')->select('id')->orderBy('id', 'desc')->first()->id;

        DB::beginTransaction();

            foreach($users_data as $user) {

            
                $user_records[] =
                    [
                        'password' => Hash::make('orange@2021'),
                        'role' =>  'Student',
                    ];

                $first_name = $user['first_name'] == null ? ' ' : $user['first_name'];
              
                $last_name = $user['last_name']  == null ? ' ' :  $user['last_name'];
               
    
                
                    $user_details_records[]=
                        [
                            'user_id' => $last_id++,
                            'student_id' => $user['student_id'],
                            'firstName' =>  $first_name,
                            'lastName' =>  $last_name,
                            'birthday' =>  $user['b_day'],
                        ];

            
            }

           

            users::insert($user_records);

            tbl_userDetails::insert($user_details_records);
            
           
            DB::commit();
            
            return $user_details_id;
    }
    
    public function adduser(Request $request, $usertype)
    {

        // return $request->email;
        // $validated = $request->validate([
        //     'firstName' => ['required'],
        //     'middleName' => ['required'],
        //     'lastName' => ['required'],
        //     'email' => ['required', 'email', 'unique:users'],
        //     'password' => ['required', 'min:6', 'confirmed']
        // ]);

        $email = $usertype == 'Student' ? null : $request->email;
        $isVerfied = $usertype == 'Student' ? null : date('Y-m-d H:i:s');
        $New = User::create([
            'email' =>  $email,
            'password' => Hash::make($request->password),
            'role' =>  $usertype,
            'email_verified_at' =>  $isVerfied,
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
        $details->birthday = $usertype == 'Student' ? date('Y-m-d', strtotime($request->birthDay)) : null;
        $details->save();


        if($usertype != 'CampusDirector' &&  $usertype != 'SecurityGuard') {
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
               $UpdateDetails->suffix = $request->suffix;
               $UpdateDetails->birthday = date('Y-m-d', strtotime($request->birthDay));
               $UpdateDetails->address = $request->address;
               $UpdateDetails->student_id = $request->student_id;
               $UpdateDetails->cp_no = $request->cp_no;
               $UpdateDetails->social_account =  $request->social_account;
               $UpdateDetails->save();

           
                if(isset( $request->department['id'])) {
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
