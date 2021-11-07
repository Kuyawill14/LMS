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
    return view('Guides.introduction.0-introduction');
});

Route::get('/tutorial', function () {
    return view('tutorial');
});

Route::get('/testView', function () {
    return view('errors.429');
});


Route::middleware(['throttle:WebRouteLimiter'])->get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');


