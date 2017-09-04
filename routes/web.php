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
Route::any('/server','ServerController@servers');
Route::any('/upimg','material\MaterialController@upupup');
Route::get('/getFirst','news\newsController@getFrist');
Route::get('/getNew','news\newsController@getNew');


