<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\tbl_userDetails;

use App\Models\tbl_user_departments;
use App\Models\tbl_department;
use Illuminate\Support\Facades\Hash;
class bulkAddUser extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
   
            $this->batch1_Teachers();

            $this->batch1_Students();
            $this->batch2_Students();
       
    }
    public function batch1_Students() {
              
        DB::beginTransaction();
        $user_login_details = [];
        $user_records = [];
        $user_details_records = [];
        $i = 0;
        $user_id = [];
        $user_details_id = [];

        $csvFile = fopen(base_path("database/data/Students/Students Data - sacrias Export.csv"), "r");

        $last_id = DB::table('users')->select('id')->orderBy('id', 'desc')->first()->id;

        $firstline = true;
        while (($data = fgetcsv($csvFile, 10000, ",")) !== FALSE) {
            if (!$firstline) {
            
                $user_details_records[]=
                [
                    'user_id' => ++$last_id,
                    'student_id' => $data['0'],
                    'firstName' =>   $data['1'],
                    'lastName' =>   $data['2'],
                    'birthday' =>  $data['3'],
                ];

                $user_records[] =
                [
                    'password' => 'strong####$$$1111',
                    'role' =>  'Student',
                ];

            }
            $firstline = false;
        }
   
        fclose($csvFile);

            tbl_userDetails::insert($user_details_records);
            DB::table('users')->insert($user_records);
            DB::commit();


    }

    public function batch2_Students() {
        
        DB::beginTransaction();
        $user_login_details = [];
        $user_records = [];
        $user_details_records = [];
        $i = 0;
        $user_id = [];
        $user_details_id = [];

        $csvFile = fopen(base_path("database/data/Students/Students Data - SIAS Export.csv"), "r");
   
        $last_id = DB::table('users')->select('id')->orderBy('id', 'desc')->first()->id;

        $firstline = true;
        while (($data = fgetcsv($csvFile, 10000, ",")) !== FALSE) {
            if (!$firstline) {
            
                $user_details_records[]=
                [
                    'user_id' => ++$last_id,
                    'student_id' => $data['0'],
                    'firstName' =>   $data['1'],
                    'lastName' =>   $data['2'],
                    'birthday' =>  $data['3'],
                ];

                $user_records[] =
                [
                    'password' => 'strong####$$$1111',
                    'role' =>  'Student',
                ];

            }
            $firstline = false;
        }
   
        fclose($csvFile);

            tbl_userDetails::insert($user_details_records);
            DB::table('users')->insert($user_records);
            DB::commit();
            
           
    }



    public function batch1_Teachers() {
        DB::beginTransaction();
        $getDepartments = tbl_department::all();
    
        // $this->command->info($getDepartments);

        $csvFile = fopen(base_path("database/data/Teachers/teacherCSV.csv"), "r");
    
       
        $firstline = true;
        while (($data = fgetcsv($csvFile,10000, ",")) !== FALSE) {
            if (!$firstline) {
            


                
            $first_name = $data['0'];
            $middle_name = $data['1'];
            $last_name =  $data['2'];
            $email = preg_replace('/\s+/', '',$data['3']);
            $password =  $data['4'];
            $role =  $data['5'];
            $department_short = $data['6'];
       
          
            $userFind = User::where('email',$email)->exists();



                $New = new User;
                $New->email =  $email;
                $New->role = $role;
                $New->email_verified_at = date('Y-m-d H:i:s');
                $New->password =  $password;
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
            $firstline = false;
        }

            DB::commit();
            
           
    }
}
