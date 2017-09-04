<?php
/**
 * Created by PhpStorm.
 * User: star
 * Date: 2017/8/26
 * Time: 15:14
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class Users extends Model
{

    protected $table = 'march_user';
    protected $primaryKey = 'user_phone';

    public function queryUser($request){

        return  $this->whereRaw('user_phone = ? and user_pwd = md5(?)',[$request->input('phone'),$request->input('pwd')])->get(['user_name'])->first();
    }


}