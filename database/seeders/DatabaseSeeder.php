<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
       /*  $this->call([
            UserSeeder::class,
        ]);

        $this->call([
            departmentSeeder::class,
        ]);

        $this->call([
            SchoolYearSemesterSeeder::class,
        ]);

        $this->call([
            bulkAddUser::class,
        ]); */

        $this->call([
            fixStudentID::class,
        ]); 

    }
}
