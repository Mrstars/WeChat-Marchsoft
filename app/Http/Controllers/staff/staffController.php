<?php
/**
 * Created by PhpStorm.
 * User: star
 * Date: 2017/8/22
 * Time: 21:25
 */

namespace App\Http\Controllers\staff;


use App\Http\Controllers\Controller;

class staffController extends Controller
{

    public $wechat;
    public $staff;
    public function __construct()
    {
        $this->wechat = app('wechat');
        $this->staff = $this->wechat->staff;
    }

    public function addStaff()
    {
        $this->wechat = app('wechat');
        $this->staff = $this->wechat->staff;
        $request = $this->staff->create('march@gh_f212fc0a6676','三月新闻');
        var_dump($request);
    }

    public function get(){
        $request = $this->staff->lists();
        var_dump($request);
    }

    public function send(){
       $request =  $this->staff->message('23300')->by('march@gh_f212fc0a6676')->to('oefvgwPys0CVzwXhvUg32rPNAUQ8')->send();
       var_dump($request);
    }

    public function getuser(){
        $user = $this->wechat->user;
     $uses =  $user->lists();
     $uu = $uses->data;
     $u = $uu['openid'];

//     var_dump($u[0]);
       for($i=0;$i<296;$i++){
           echo 1;
           sleep(0.1);
           var_dump($user->get($u[$i]));
       }

    var_dump($user->get($u[120]));


    }
}