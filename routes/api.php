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
    Route::get('/allnames/{id}', [ClassController::class, 'fecthClassNames']);
    Route::get('/subjectCourseClassList/all/{id}', [ClassController::class, 'subjectCourseClassList']);

    
});
//course
Route::prefix('/course')->group(function () {
    Route::get('/all', [SubjectCourseController::class, 'index']);
    Route::post('/insert', [SubjectCourseController::class, 'store']);
    Route::post('/update/{id}', [SubjectCourseController::class, 'update']);
    Route::get('/ShowCourse/{id}', [SubjectCourseController::class, 'CourseDetails']);
  
});

//Announcement
Route::prefix('/announcement')->group(function () {
    Route::post('/insert', [AnnouncementController::class, 'store']);
    Route::get('/allpost/{id}', [AnnouncementController::class, 'allClassPost']);
    
});

//CommentLike
Route::prefix('/comment')->group(function () {
    Route::post('/insert', [CommentController::class, 'store']);
    Route::get('/allcomment/{id}', [CommentController::class, 'index']);
    
});



//classwork
Route::prefix('/classwork')->group(function () {
    Route::get('/all', [ClassworkController::class, 'index']);
    Route::get('/all/{id}', [ClassworkController::class, 'index']);
    Route::get('/showDetails/{id}', [ClassworkController::class, 'show']);
    Route::get('/student-classworks/{id}', [ClassworkController::class, 'getIndividualClassClassworks']);
    Route::post('/insert', [ClassworkController::class, 'store']);
    Route::post('/share', [ClassworkController::class, 'ShareClasswork']);

    
});

//Student
Route::prefix('/student')->group(function () {
    Route::get('/all/{id}', [StudentController::class, 'getStudentList']);
    Route::post('/join/{id}', [StudentController::class, 'JoinClass']);
    Route::delete('/{id}', [StudentController::class, 'Unenroll']);
});

//notification
Route::prefix('/notification')->group(function () {
    Route::get('/all', [NotificationController::class, 'getNotification']);
    Route::post('/{id}', [NotificationController::class, 'UnreadNotification']);
    Route::delete('/{id}', [NotificationController::class, 'DeleteNotification']);
   
});

//main modules
Route::prefix('/main_module')->group(function () {
    Route::get('/all/{id}', [MainModuleController::class, 'index']);
    Route::post('/insert', [MainModuleController::class, 'store']);
    
});

//sub  modules
Route::prefix('/sub_module')->group(function () {
    Route::get('/all/{id}', [SubModuleController::class, 'index']);
    Route::post('/insert', [SubModuleController::class, 'store']);
    
});

//student sub  modules
Route::prefix('/student_sub_module')->group(function () {
    Route::get('/all/{id}', [StudentSubModuleProgressController::class, 'index']);
    Route::post('/insert', [StudentSubModuleProgressController::class, 'store']);
    
});


//Objective Questions
Route::prefix('/question')->group(function () {
    Route::get('/all/{id}', [ObjectiveController::class, 'index']);
    Route::post('/insert/{id}/{length}', [ObjectiveController::class, 'store']);
    Route::post('/check/{id}', [ObjectiveController::class, 'check']);
    
    Route::delete('/{id}', [ObjectiveController::class, 'destroy']);
    Route::delete('/remove/{id}', [ObjectiveController::class, 'deleteQuestion']);
});



//Grading Criteria
Route::prefix('/grading-criteria')->group(function () {
    Route::get('/all/{id}', [GradingCriteriaController::class, 'index']);
    Route::post('/insert', [GradingCriteriaController::class, 'store']);
    Route::delete('/remove/{id}', [GradingCriteriaController::class, 'deleteCriteria']);
    Route::post('/update/{id}', [GradingCriteriaController::class, 'update']);
});





Route::get('/GetDetails', [AuthController::class, 'GetDetails']);
Route::post('/Userlogin', [AuthController::class, 'UserLogin']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/registerUser', [AuthController::class, 'UserRegister']);


    //pre na dc ka sa dicord?