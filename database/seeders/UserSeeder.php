<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = DB::table('users')->insert([
            'email' => 'isueorange@gmail.com',
            'role' => 'Admin',
            'email_verified_at' => date('Y-m-d H:i:s'),
            'password' => Hash::make("##super##Log1")
        ]);

        
        $users_id = DB::table('users')->where('email', 'isueorange@gmail.com')
        ->select('id')->first();
        DB::table('tbl_user_details')->insert([
            'user_id' =>  $users_id->id,
            'firstName' => 'Admin',
            'middleName' => 'A',
            'lastName' => 'Admin'
        ]);
    }
}
