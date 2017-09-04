<?php
/**
 * Created by PhpStorm.
 * User: star
 * Date: 2017/8/16
 * Time: 8:52
 */

namespace App\Http\Controllers\message;


use App\Http\Controllers\Controller;
use App\Http\Controllers\material\MaterialController;
use EasyWeChat\Message\Image;
use EasyWeChat\Message\News;
use Illuminate\Http\Request;


class BroadcastController extends Controller
{
    public $wechat;
    public $broadcast;
    public function __construct()
    {
        $this->wechat=app('wechat');
        $this->broadcast=$this->wechat->broadcast;
    }

    public function sendNews(){
        $img = new Image(['media_id'=>'87ps5pzIifU-IdJDVdG-GYksP03v5waltKWtbfKJVEc']);
        $news = new News(['title'=>'233','description'=>'test','url'=>'http://www.jianshu.com/p/0e87d726864b','image'=>$img]);
        try{
        $request= $this->wechat->staff->message("232232323")->to('oefvgwPys0CVzwXhvUg32rPNAUQ8');
        }catch (\Exception $e){
            $error = $e->getMessage();
            return response()->json(['code'=>'500','msg'=>'something was wrong','data'=>$error]);
        }
    }



}