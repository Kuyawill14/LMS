<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Tbl_class;
use App\Http\Controllers\api\SubjectCourseController;
use App\Http\Controllers\api\ClassController;
use App\Http\Controllers\api\AnnouncementController;
use App\Http\Controllers\api\ClassworkController;
use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\StudentController;
use App\Http\Controllers\api\NotificationController;
use App\Http\Controllers\api\MainModuleController;
use App\Http\Controllers\api\SubModuleController;
use App\Http\Controllers\api\StudentSubModuleProgressController;
use App\Http\Controllers\api\ObjectiveController;
use App\Http\Controllers\api\GradingCriteriaController;
use App\Http\Controllers\api\CommentController;
use App\Http\Controllers\api\GradebookController;
use App\Http\Controllers\api\AnalyticsController;
use App\Http\Controllers\api\SubmissionController;
use App\Http\Controllers\api\UserProfileController;
use App\Http\Controllers\api\TeacherController;
use App\Http\Controllers\api\ArchiveController;
use App\Http\Controllers\api\StudentCourseFinalGrades;
use App\Http\Controllers\api\AdminController;
use App\Http\Controllers\api\MonitorTeacherController;
use App\Http\Controllers\api\teacherProfileController;
use App\Http\Controllers\api\SchoolyearSemesterController;
use App\Http\Controllers\api\DepartmentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//return authenticated user details
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//return user role
Route::middleware('auth:sanctum')->get('/role', function (Request $request) {
    /* return base64_encode($request->user()->role); */
    return $request->user()->role;
});

//Check if user is aunthenticated
Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
});



/* Rou
/* Route::get('/classlist',function () {
     return Tbl_class::all();
    }); */

//Class
Route::prefix('/class')->group(function () {
    Route::get('/all', [ClassController::class, 'index']);
    Route::post('/insert', [ClassController::class, 'store']);
    Route::post('/update/{id}', [ClassController::class, 'update']);
    Route::get('/ShowClass/{id}', [ClassController::class, 'ClassDetails']);
    Route::get('/selectedClass/{id}', [ClassController::class, 'fetchSelectedclass']);
    Route::get('/allnames/{id}/{clwk}', [ClassController::class, 'fecthClassNames']);
    Route::get('/subjectCourseClassList/all/{id}', [ClassController::class, 'subjectCourseClassList']);
    Route::get('/count', [ClassController::class, 'classCount']);
    Route::put('/archive-class/{id}', [ClassController::class, 'ArchiveClass']);
    
    
});
//course
Route::prefix('/course')->group(function () {
    Route::get('/all', [SubjectCourseController::class, 'index']);
    Route::post('/insert', [SubjectCourseController::class, 'store']);
    Route::post('/update/{id}', [SubjectCourseController::class, 'update']);
    Route::get('/ShowCourse/{id}', [SubjectCourseController::class, 'CourseDetails']);
    Route::post('/completed/{id}', [SubjectCourseController::class, 'courseCompleted']);
    Route::delete('/archiveCourse/{id}', [SubjectCourseController::class, 'ArchiveCourse']);
    Route::get('/status', [SubjectCourseController::class, 'CheckCourseStatus']);
    
});


//Announcement
Route::prefix('/announcement')->group(function () {
    Route::post('/insert', [AnnouncementController::class, 'store']);
    Route::get('/allpost/{id}', [AnnouncementController::class, 'allClassPost']);
    
});

//CommentLike
Route::prefix('/comment')->group(function () {
    Route::get('/allcomment/{id}', [CommentController::class, 'index']);
    Route::get('/commentCount/{id}', [CommentController::class, 'TotalComment']);
    Route::post('/insert', [CommentController::class, 'store']);
    Route::delete('/remove/{id}', [CommentController::class, 'destroy']);
  
});





//classwork
Route::prefix('/classwork')->group(function () {
    Route::get('/all', [ClassworkController::class, 'index']);
    Route::get('/all/{id}', [ClassworkController::class, 'index']);
    Route::get('/showDetails/{id}/{courseId}', [ClassworkController::class, 'show']);
    Route::get('/student-classworks/{id}', [ClassworkController::class, 'getIndividualClassClassworks']);
    Route::post('/insert', [ClassworkController::class, 'store']);
    Route::post('/share', [ClassworkController::class, 'ShareClasswork']);
    Route::post('/unshare', [ClassworkController::class, 'UnshareClasswork']);
    Route::post('/update', [ClassworkController::class, 'update']);
    Route::delete('/remove/{id}', [ClassworkController::class, 'destroy']);

    Route::get('/publishClassworkDetails/{id}', [ClassworkController::class, 'PublishClassworkDetails']);
    Route::put('/UpdatePublish/{id}', [ClassworkController::class, 'UpdatePublishClassworkDetails']);
    
});

//Student
Route::prefix('/student')->group(function () {
    Route::get('/all/{id}', [StudentController::class, 'getStudentList']);
    Route::get('/all_by_class/{id}', [StudentController::class, 'getStudentListbyClass']);
    Route::get('/check-status/{id}', [StudentController::class, 'checkSubmissionStatus']);
    Route::get('/checking/{id}', [StudentController::class, 'CheckStatus']);
    Route::post('/join/{id}', [StudentController::class, 'JoinClass']);
    Route::post('/update-status', [StudentController::class, 'UpdateStatus']);
    Route::delete('/{id}', [StudentController::class, 'Unenroll']);
    Route::put('/submit-classwork/{id}', [StudentController::class, 'SubmitClassworkSubj']);
    Route::delete('/removeFromClass/{class_id}/{user_id}', [StudentController::class, 'removeFromClass']);
    
});

//Teacher
Route::prefix('/teacher')->group(function () {
    Route::put('/update-score/{id}', [TeacherController::class, 'updateScoreObj']);
    Route::put('/reset-obj/{id}', [TeacherController::class, 'resetStudentObjSubmission']);
    Route::post('/invite-student', [TeacherController::class, 'InviteStudent']);
    Route::post('/invite-instructor', [TeacherController::class, 'InviteInstructor']);
    Route::get('/student-classGrades/{id}', [TeacherController::class, 'getStudentGradesInClass']);
    
});



//notification
Route::prefix('/notification')->group(function () {
    Route::get('/all', [NotificationController::class, 'getNotification']);
    Route::get('/notifCount', [NotificationController::class, 'getNotificationCount']);
    Route::post('/new', [NotificationController::class, 'NewNotification']);
    Route::put('/markread/{id}', [NotificationController::class, 'UnreadNotification']);
    Route::put('/hide/{id}', [NotificationController::class, 'HideNotification']);
    Route::delete('/delete/{id}', [NotificationController::class, 'DeleteNotification']);
    Route::post('/new', [NotificationController::class, 'NewNotification']);
    
    Route::get('/all/{type}', [NotificationController::class, 'getNotificationListWithFilter']);
    Route::post('/mark-all', [NotificationController::class, 'MarkAllAsRead']);
    
    Route::get('/invite/all', [NotificationController::class, 'fetchmyInvite']);
    
   
});

//main modules
Route::prefix('/main_module')->group(function () {
    Route::get('/all/{id}', [MainModuleController::class, 'index']);
    Route::post('/insert', [MainModuleController::class, 'store']);
    Route::post('/update/{id}', [MainModuleController::class, 'update']);
    Route::delete('/delete/{id}', [MainModuleController::class, 'deleteModule']);
    Route::post('/arrange', [MainModuleController::class, 'newArrangement']);
    
});

//sub  modules
Route::prefix('/sub_module')->group(function () {
    Route::get('/all/{id}', [SubModuleController::class, 'index']);
    Route::post('/insert', [SubModuleController::class, 'store']);
    
});

//student sub  modules progress
Route::prefix('/student_sub_module')->group(function () {
    Route::get('/all/{id}', [StudentSubModuleProgressController::class, 'index']);
    Route::post('/insert', [StudentSubModuleProgressController::class, 'store']);
    Route::post('/updatetime', [StudentSubModuleProgressController::class, 'updateTimespent']);
    Route::get('/student_progress/{id}', [StudentSubModuleProgressController::class, 'fetchSubmoduleProgress']);
    Route::get('/student_main_progress/{id}', [StudentSubModuleProgressController::class, 'studentMainProgress']);
    Route::get('/student_sub_progress/{id}', [StudentSubModuleProgressController::class, 'studentSubProgress']);

});


//Objective Questions
Route::prefix('/question')->group(function () {
    Route::get('/all/{id}', [ObjectiveController::class, 'index']);
    Route::get('/question-answer/{id}/{class_clwk_Id}', [ObjectiveController::class, 'fetchQuestionAnswerForViewSubmision']);
    Route::post('/insert', [ObjectiveController::class, 'store']);
    Route::post('/check/{id}', [ObjectiveController::class, 'check']);
    Route::post('/addOption', [ObjectiveController::class, 'AddOption']);

    Route::put('/update/{id}', [ObjectiveController::class, 'update']);
    Route::put('/store-answer/{id}', [ObjectiveController::class, 'storeAnswer']);

    Route::put('/delete/{id}', [ObjectiveController::class, 'removeOption']);
    Route::delete('/remove/{id}', [ObjectiveController::class, 'deleteQuestion']);

    
});





//Grading Criteria
Route::prefix('/grading-criteria')->group(function () {
    Route::get('/all/{id}', [GradingCriteriaController::class, 'index']);
    Route::post('/insert', [GradingCriteriaController::class, 'store']);
    Route::delete('/remove/{id}', [GradingCriteriaController::class, 'deleteCriteria']);
    Route::post('/update/{id}', [GradingCriteriaController::class, 'update']);
});



//Grading book
Route::prefix('/grade-book')->group(function () {
    Route::get('/classworks/{id}', [GradebookController::class, 'fetchClassworks']);
    Route::get('/classworkGrades/{id}', [GradebookController::class, 'fetchClassworkGrades']);
    Route::get('/student-classworkGrades/{id}', [GradebookController::class, 'fetchStudentClassworkGrades']);
    Route::get('/student-finalgrade/{id}/{id1}', [GradebookController::class, 'fetchStudentFinalGrades']);
    Route::get('/all-student-finalgrade/{id}', [GradebookController::class, 'fetchAllStudentFinalGrades']);
});


//Question Analytics
Route::prefix('/QAnalytics')->group(function () {
    Route::get('/all/{id}', [AnalyticsController::class, 'index']);
    
});

//Submission List
Route::prefix('/submission')->group(function () {
    Route::get('/all/{id}', [SubmissionController::class, 'index']);
    Route::get('/check-sbj/{id}', [SubmissionController::class, 'checkSubjectiveSubmission']);
    Route::put('/file-remove/{id}', [SubmissionController::class, 'RemoveUploadedFile']);
    Route::put('/update-score/{id}', [SubmissionController::class, 'updateSbjSubmissionScore']);
});


//User Profile 
/* middleware('auth:sanctum')-> */
Route::prefix('/profile')->group(function () {
    Route::get('/details', [UserProfileController::class, 'index']);
    Route::post('/profile_picture', [UserProfileController::class, 'updatePicture']);
    Route::post('/updateDetails', [UserProfileController::class, 'updateDetails']);
    Route::get('/ClassesList', [UserProfileController::class, 'getCourseAndClassesList']);

    Route::get('/mycalendar', [UserProfileController::class, 'FetchCalendarSched']);
});


//User Archive 
Route::prefix('/archive')->group(function () {
    Route::get('/courses', [ArchiveController::class, 'index']);
    Route::put('/restore/{id}', [ArchiveController::class, 'restoreArchive']);
    Route::get('/classes', [ArchiveController::class, 'showArchiveClasses']);
    Route::put('/restore-class/{id}', [ArchiveController::class, 'restoreClass']);
    
    
});


//UserCourseFinal Grades
Route::prefix('/student-course')->group(function () {
    Route::get('/gradeAll', [StudentCourseFinalGrades::class, 'index']);
   
    
});

//Get all teachers
Route::prefix('/admin/teachers')->group(function () {
    Route::get('/all', [AdminController::class, 'getAllTeacher']);
    Route::get('/all/progress', [AdminController::class, 'getAllTeacherProgress']);
    Route::post('/update/{id}', [AdminController::class, 'update']);
    Route::post('/reset-password/{id}', [AdminController::class, 'resetTeacherPassword']);
    Route::delete('/remove/{id}', [AdminController::class, 'removeUser']);

    Route::get('/all/summarry', [MonitorTeacherController::class, 'getAllTeacherSummarryData']);
    Route::get('/profile/{id}', [TeacherProfileController::class, 'teacherProfile']);
    Route::get('/profile/ClassesList/{id}', [TeacherProfileController::class, 'getCourseAndClassesList']);
    Route::get('/classes/{id}/{user_id}', [TeacherProfileController::class, 'getCourseClassList']);

    
    
});

//semesters 
Route::prefix('/admin/schoolyears_semesters')->group(function() {
    Route::get('/all', [SchoolyearSemesterController::class, 'fetchAllSchoolyear_Semester']);
    Route::post('/upsert', [SchoolyearSemesterController::class, 'addUpdateSchoolyear_semester']);
    Route::post('/delete', [SchoolyearSemesterController::class, 'deleteSchoolyear_semester']);


});

//schoolyear
Route::prefix('/admin/schoolyears')->group(function() {
    Route::get('/all', [SchoolyearSemesterController::class, 'fetchAllSchoolyear']);
});

//department
Route::prefix('/admin/department')->group(function() {
    Route::get('/all', [DepartmentController::class, 'index']);
});




/* Route::group([
    'prefix'=> 'course',
    'middleware' =>['auth:sanctum'],
] */









//Route::get('/GetDetails', [AuthController::class, 'GetDetails']);
Route::post('/login', [AuthController::class, 'UserLogin']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/register', [AuthController::class, 'UserRegister']);
Route::middleware('auth:sanctum')->post('/change-password', [AuthController::class, 'ChangePassword']);


    //pre na dc ka sa dicord?