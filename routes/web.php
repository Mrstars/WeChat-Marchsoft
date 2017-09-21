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
Route::get('/index',function (){return view('test');});

Route::group(['middleware'=>['loginVerification']],function (){
    Route::post('/login','LoginController@login');
    Route::get('/getFirst','news\newsController@getFrist');
    Route::get('/getNew','news\newsController@getNew');
    Route::get('/getNews','news\newsController@getNews');
    Route::get('/delete','news\newsController@deleteNew');
    Route::get('/update','news\newsController@updateNew');
}
);




