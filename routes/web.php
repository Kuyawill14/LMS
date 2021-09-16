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
Route::get('/Guides', function () {
    return view('Guides.login_guide');
});

Route::get('/tutorial', function () {
    return view('tutorial');
});



Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');


