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
            'email' => 'admin@gmail.com',
            'role' => 'Admin',
            'password' => Hash::make("##super##Log1")
        ]);

        
        $users_id = DB::table('users')->where('email', 'admin@gmail.com')
        ->select('id')->first();
        DB::table('tbl_user_details')->insert([
            'user_id' =>  $users_id->id,
            'firstName' => 'Admin',
            'middleName' => 'A',
            'lastName' => 'Admin'
        ]);
    }
}
