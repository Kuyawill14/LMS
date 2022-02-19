<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\tbl_userDetails;
use App\Models\tbl_user_departments;
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
   
            $this->batch1();
            $this->batch2();
       
    }
    public function batch1() {
        $user_login_details = [];
        $user_records = [];
        $user_details_records = [];
        $i = 0;
        $user_id = [];
        $user_details_id = [];

        $csvFile = fopen(base_path("database/data/Students/Students Data - sacrias Export.csv"), "r");
        ini_set('max_execution_time', 1000);
        DB::beginTransaction();
        $last_id = DB::table('users')->select('id')->orderBy('id', 'desc')->first()->id;

        $firstline = true;
        while (($data = fgetcsv($csvFile, 100, ",")) !== FALSE) {
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

    public function batch2() {
        $user_login_details = [];
        $user_records = [];
        $user_details_records = [];
        $i = 0;
        $user_id = [];
        $user_details_id = [];

        $csvFile = fopen(base_path("database/data/Students/Students Data - SIAS Export.csv"), "r");
        ini_set('max_execution_time', 1000);
        DB::beginTransaction();
        $last_id = DB::table('users')->select('id')->orderBy('id', 'desc')->first()->id;

        $firstline = true;
        while (($data = fgetcsv($csvFile, 100, ",")) !== FALSE) {
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
}
