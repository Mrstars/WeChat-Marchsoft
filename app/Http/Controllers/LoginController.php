<?php
/**
 * Created by PhpStorm.
 * User: star
 * Date: 2017/8/26
 * Time: 15:27
 */

namespace App\Http\Controllers;


use App\Users;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Validator;

class LoginController extends Controller
{

    public $userModel;
    public function __construct()
    {
        $this->userModel = new Users();
    }

    public function login(Request $request){

        $validator =  Validator::make($request->all(),
            ['username'=>'required|integer|max:11','password'=>'required'],
            ['required'=>':attribute为空','max'=>':attribute过长','integer'=>':attribute必须为数字'],
            ['username'=>'手机号码','password'=>'密码']);
        if ($validator->fails()){
            return redirect()->back()->withInput()->withErrors($validator);
        }
        $name = $this->userModel->queryUser($request);
        if(sizeof($name)){
            Session::put('name',$name->user_name);
        }else{
            return redirect()->back()->withInput()->withErrors('电话号码或密码错误');
        }
    }

    public function loginOut(){
        Session::forget('name');
        return redirect('login');
    }
}