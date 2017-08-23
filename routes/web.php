<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::any('/server','ServerController@servers');
Route::any('/send','menu\MenuController@addMenu');
Route::any('/servers','ServerController@servers');
Route::get('/list','material\MaterialController@getMedia_id');
Route::any('/upload','material\MaterialController@upupup');
Route::any('/uploadNews','material\MaterialController@get');
Route::any('/sendNews','message\BroadcastController@get');
Route::any('/deleteNews','message\BroadcastController@deleteNews');
Route::any('/addStaff','staff\staffController@getuser');
/******************************************/
Route::any('/upimg','material\MaterialController@upupup');


