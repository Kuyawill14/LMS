<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebNotificationController;
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

//Route::post('/store-token', [WebNotificationController::class, 'storeToken'])->name('store.token');

Route::get('/tutorial', function () {
    return view('tutorial');
});

Route::get('/evaluation', function () {
    return redirect('https://forms.gle/2WFvZJmJFF22EY838');
});

Route::get('/testView', function () {
    return view('view');
});

Route::get('/', function () {
    return view('welcome');
})->name('login');


Route::middleware(['throttle:WebRouteLimiter'])->get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');


