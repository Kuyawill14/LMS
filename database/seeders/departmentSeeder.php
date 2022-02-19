<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\tbl_department;

class departmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::beginTransaction();

        $csvFile = fopen(base_path("database/data/colleges/Colleges.csv"), "r");
    
     
        
        $firstline = true;
        while (($data = fgetcsv($csvFile, 10000, ",")) !== FALSE) {
            if (!$firstline) {
            
                $departments[]=
                [
                    'short_name'=> $data['0'],
                    'name'=>  $data['1'],
                ];

             

            }
            $firstline = false;
        }
   
        fclose($csvFile);
        tbl_department::insert($departments);
            DB::commit();
            

 
    }
}
