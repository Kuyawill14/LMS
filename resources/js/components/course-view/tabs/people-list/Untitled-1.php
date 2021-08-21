
    public function fetchStudentFinalGrades($class_id) {
        $userId = auth('sanctum')->id();

        $classworks = DB::table('tbl_classworks')
        ->select('grading_criteria')
        ->selectRaw('sum(tbl_classworks.points) as total_points ')
        ->leftJoin('tbl_class_classworks' , 'tbl_class_classworks.classwork_id' , '=' , 'tbl_classworks.id')
        ->where('tbl_class_classworks.class_id', $class_id )
        ->groupBy('grading_criteria')
        ->get();
        $classworks = json_decode($classworks, true);

        $gradingCategory = DB::table('tbl_main_grade_categories')
        ->select('id as grade_category_id','percentage')
        ->get();
        $gradingCategory = json_decode($gradingCategory, true);

        $submissions = DB::table('tbl_submissions')
        ->select('tbl_submissions.classwork_id','status' ,'points', 'user_id', 'tbl_class_classworks.grading_criteria as grading_criteria_id')
        ->leftJoin('tbl_class_classworks' , 'tbl_class_classworks.classwork_id' , '=' , 'tbl_submissions.classwork_id')
        ->where('tbl_submissions.user_id',$userId )
        ->where('tbl_class_classworks.class_id', $class_id )
        ->get();
        $submissions = json_decode($submissions, true);

        for($i=0; $i < count($gradingCategory); $i++) {
            $gradingCategory[$i]['points'] = 0 ;
            $gradingCategory[$i]['grade_percentage'] = 0 ;
            for($j=0; $j < count($submissions); $j++) {
                if($gradingCategory[$i]['grade_category_id'] == $submissions[$j]['grading_criteria_id']) {
                    $gradingCategory[$i]['points'] += $submissions[$j]['points'];
                }
               
            }
            for($x=0; $x < count($classworks); $x++)
            if(  $classworks[$x]['grading_criteria'] == $gradingCategory[$i]['grade_category_id']) {
                $gradingCategory[$i]['grade_percentage'] = ($gradingCategory[$i]['points'] / $classworks[$x]['total_points']) * $gradingCategory[$i]['percentage'];
                $gradingCategory[$i]['total_points'] =  $classworks[$x]['total_points'];
            }
          
        }


        return $gradingCategory;


    }

    public function fetchAllStudentFinalGrades($class_id) {
        $tbl_student_main_grades = new tbl_student_main_grades;
        $userId = auth('sanctum')->id();

        $studentList = DB::table('users')
        ->select('users.id as student_id',
        'course_id',
        'class_id'
        )
        ->leftJoin('tbl_userclasses' , 'tbl_userclasses.user_id' , '=' , 'users.id')
        ->where('tbl_userclasses.class_id', $class_id )
        ->where('role', 'Student')
        ->get();

        $studentList = json_decode($studentList, true);
        $classworks = DB::table('tbl_classworks')
        ->select('grading_criteria')
        ->selectRaw('sum(tbl_classworks.points) as total_points ')
        ->leftJoin('tbl_class_classworks' , 'tbl_class_classworks.classwork_id' , '=' , 'tbl_classworks.id')
        ->where('tbl_class_classworks.class_id', $class_id )
        ->groupBy('grading_criteria')
        ->get();
        $classworks = json_decode($classworks, true);

        $gradingCategory = DB::table('tbl_main_grade_categories')
        ->select('name','id as grade_category_id','percentage')
        ->get();
        $gradingCategory = json_decode($gradingCategory, true);

        $submissions = DB::table('tbl_submissions')
        ->select('tbl_submissions.classwork_id','status' ,'points', 'user_id', 'tbl_class_classworks.grading_criteria as grading_criteria_id')
        ->leftJoin('tbl_class_classworks' , 'tbl_class_classworks.classwork_id' , '=' , 'tbl_submissions.classwork_id')
        ->where('tbl_class_classworks.class_id', $class_id )
        ->get();
        $submissions = json_decode($submissions, true);
        for($x=0; $x < count($studentList); $x++) {

            for($i=0; $i < count($gradingCategory); $i++) {
                $gradingCategory[$i]['points'] = 0 ;
                $gradingCategory[$i]['grade_percentage'] = 0 ;
                for($j=0; $j < count($submissions); $j++) {
                    if($gradingCategory[$i]['grade_category_id'] == $submissions[$j]['grading_criteria_id'] && $submissions[$j]['user_id'] == $studentList[$x]['student_id']) {
                        $gradingCategory[$i]['points'] += $submissions[$j]['points'];
                    }
                }
             
                for($z=0; $z < count($classworks); $z++)
                if(  $classworks[$z]['grading_criteria'] == $gradingCategory[$i]['grade_category_id']) {
                    $gradingCategory[$i]['grade_percentage'] = ($gradingCategory[$i]['points'] / $classworks[$z]['total_points']) * $gradingCategory[$i]['percentage'];
                    $gradingCategory[$i]['total_points'] =  $classworks[$z]['total_points'];
                }
            
            
            }
            $studentList[$x]['grades'] =  $gradingCategory;
        }


        return $studentList;


    }