<?php

namespace App\Http\Controllers\api\bulkadd;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use App\Models\User;
use App\Models\tbl_userDetails;

class studentsBulkController extends Controller
{
    
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
}
