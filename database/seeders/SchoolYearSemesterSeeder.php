<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class SchoolYearSemesterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $school_years = [
            [
                'schoolyear'=> '2020-2021',
            ],
            [
                'schoolyear'=> '2021-2022',
            ],
            [
                'schoolyear'=> '2022-2023',
            ],
            ];

            $semesters = [
                [
                    'semester'=> 'Mid Year',
                ],
                [
                    'semester'=> '2nd Semester',
                ],
                [
                    'semester'=> '1st Semester',
                ],
                ];

        DB::table('tbl_schoolyears')->insert($school_years);
        DB::table('tbl_semesters')->insert($semesters);
    }
}
