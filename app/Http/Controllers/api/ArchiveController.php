<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Tbl_class;
use App\Models\tbl_userclass;
use App\Models\tbl_classwork;
use App\Models\tbl_classClassworks;
use App\Models\tbl_teacher_course;
use App\Models\tbl_subject_course;

class ArchiveController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $userId = auth('sanctum')->id();
        //$userId = 1;
        if(auth('sanctum')->user()->role != 'Student'){
            $allArchiveCourse = tbl_teacher_course::onlyTrashed()
            ->where('tbl_teacher_courses.user_id', $userId)
            ->select('tbl_teacher_courses.id as useClass_id','tbl_subject_courses.id','tbl_subject_courses.course_code',
            'tbl_subject_courses.course_name','tbl_subject_courses.course_description','tbl_subject_courses.id as course_id',
            'tbl_subject_courses.course_picture','tbl_subject_courses.completed','tbl_subject_courses.created_at')
            ->selectRaw('count(tbl_userclasses.course_id ) as student_count')
            ->leftJoin('tbl_subject_courses', 'tbl_teacher_courses.course_id', '=', 'tbl_subject_courses.id')
            ->leftJoin('tbl_userclasses', 'tbl_userclasses.course_id','=','tbl_subject_courses.id')
            ->leftJoin('users', 'users.id','=','tbl_userclasses.user_id' )
            ->groupBy('tbl_teacher_courses.id','tbl_subject_courses.id','tbl_subject_courses.course_code',
            'tbl_subject_courses.course_name','tbl_subject_courses.course_description','tbl_subject_courses.id',
            'tbl_subject_courses.course_picture','tbl_subject_courses.completed','tbl_subject_courses.created_at')
            ->orderBy('created_at', 'ASC')
            ->get();

            foreach($allArchiveCourse as $item){
                $countClass = tbl_userclass::where('tbl_userclasses.user_id', $userId )
                ->where('tbl_userclasses.course_id', $item->id)
                ->count();
                $item->class_count = $countClass;
                $item->student_count = $item->student_count-1;
            }
            return $allArchiveCourse;
        }
    }

    /**
     * Show the form for creating a new resource.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restoreArchive($id)
    {
        $CheckCourse = tbl_teacher_course::withTrashed()->where('course_id', $id)->first();
        if($CheckCourse){
            $CheckClass = tbl_userclass::withTrashed()->where('course_id', $id)
            ->restore();
            $CheckCourse->restore();
            return "Course Restored";
        }
        return "Course not found!";
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
