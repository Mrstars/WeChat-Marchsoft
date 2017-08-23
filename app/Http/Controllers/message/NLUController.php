<?php
/**
 * Created by PhpStorm.
 * User: star
 * Date: 2017/8/20
 * Time: 10:19
 */

namespace App\Http\Controllers\message;


use App\Http\Controllers\Controller;

class NLUController extends Controller
{


    public function returnMesage($message,array $array){

        $wechat =app('wechat');
        $semantic = $wechat->semantic;
        $semantic->query($message,"flight,hotel",$array);

    }

}