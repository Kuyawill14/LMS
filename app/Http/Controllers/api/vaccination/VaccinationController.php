<?php

namespace App\Http\Controllers\api\vaccination;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_vaccination;
use Carbon\Carbon;
class VaccinationController extends Controller
{
    //

    public function fetchStudent($data, $type) {


            if($type == 'By_student_id'){
                $student = tbl_vaccination::where('student_id', $data)->first();

            } else {
                $student = tbl_vaccination::where('name', $data)->first();

            }
            return $student;

    }

    
    public function bulkAddVaccineStatus(Request $request) {

    
            // Submitted books
            $users = $request->users;
    
            // Book records to be saved
            $users_record = [];
    
            // Add needed information to book records
            foreach($users as $user)
            {
                if(! empty($user))
                {
                    // Get the current time
                    $now = Carbon::now();
                    $found_user = tbl_vaccination::where('student_id',$user['student_id'])->count();
                    // return $found_user;
                    if($found_user == 0) {
                        // Formulate record that will be saved
                    $users_record[] = [
                        'name' => $user['name'],
                        'student_id' =>$user['student_id'],
                        'program' =>$user['program'],
                        'year_level' => $user['year_level'],  
                        'vaccine_status' => $user['vaccine_status'],  
                        'vaccine_brand' => $user['vaccine_brand'],
                        'first_dose' => $user['first_dose'],
                        'second_dose' => $user['second_dose']
                    ];
                    }
    
                    
                }
            }
    
            // Insert book records
            if(tbl_vaccination::insert($users_record)) {
                return 'Successfully Inserted';
            } else {
                return 'Something Went wrong!';
            }
        


    }
}
