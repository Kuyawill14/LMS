<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
<<<<<<< HEAD
Route::get('/guides', function () {
    return view('Guides.login_guide');
=======
Route::get('/Guides', function () {
    return view('Guides.introduction.0-introduction');
>>>>>>> e649fac95f73e2b87a7c52acc5d7858197ea72d3
});

Route::get('/tutorial', function () {
    return view('tutorial');
});

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');


