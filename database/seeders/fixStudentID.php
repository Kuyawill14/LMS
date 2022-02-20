<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\tbl_userDetails;

use App\Models\tbl_user_departments;
use App\Models\tbl_department;
use Illuminate\Support\Facades\Hash;

class fixStudentID extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
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

        $csvFile = fopen(base_path("database/data/Students/Students Data - FIX_ID sacrias Export.csv"), "r");
        DB::statement("set session sql_mode='ALLOW_INVALID_DATES'");
        $last_id = DB::table('users')->select('id')->orderBy('id', 'desc')->first()->id;

        $firstline = true;
        while (($data = fgetcsv($csvFile, 10000, ",")) !== FALSE) {
            if (!$firstline) {
                $date = trim($data['3']) == '' ? 0 : $data['3'];
         
                $tmp_student_id =  str_replace("-","",str_replace("SHS","",$data['0']));
             
               $test =  tbl_userDetails::
                  where('student_id',$tmp_student_id)
                ->where('birthday', $date)
                    ->update(
                    [
                    'student_id'=>$data['0'],
                    ]
                );
          
            }
            $firstline = false;
        }
   
        fclose($csvFile);

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

        $csvFile = fopen(base_path("database/data/Students/Students Data - FIX_ID SIAS Export.csv"), "r");

        $last_id = DB::table('users')->select('id')->orderBy('id', 'desc')->first()->id;
        DB::statement("set session sql_mode='ALLOW_INVALID_DATES'");
        $firstline = true;
        while (($data = fgetcsv($csvFile, 10000, ",")) !== FALSE) {
            if (!$firstline) {
                $date = trim($data['3']) == '' ? 0 : $data['3'];
           
                $tmp_student_id =  str_replace("-","",str_replace("SHS","",$data['0']));
           
               $test =  tbl_userDetails::
                  where('student_id',$tmp_student_id)
                ->where('birthday',$date)
                    ->update(
                    [
                    'student_id'=>$data['0'],
                    ]
                );
              
            }
            $firstline = false;
        }
   
        fclose($csvFile);

            DB::commit();
    }



}
