<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class VerifyAllEmail extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $accounts = User::where("role","Student")
        ->whereNull('email_verified_at')
        ->get();
        
        foreach($accounts as $user){
            $user->email_verified_at = date('Y-m-d H:i:s');
            $user->save();
        }
    }
}
