<?php
/**
 * Created by PhpStorm.
 * User: star
 * Date: 2017/8/13
 * Time: 17:35
 */

namespace App\Http\Controllers;

use App\Http\Controllers\menu\MenuController;
use App\Http\Controllers\message\messageController;
use Illuminate\Support\Facades\Log;


class ServerController extends Controller
{

    public function servers(){

        $wechat = app('wechat');
        $server = $wechat->server;
        $server->setMessageHandler(function($message) use($wechat){
            if($message->MsgType=='event'){
                if($message->Event=='subscribe'){
                    return '欢迎';
                }elseif($message->EventKey=='V1000_GOOD'){

                }elseif ($message->EventKey=='V1001_GOOD'){

                }elseif ($message->EventKey=='V1002_GOOD'){

                }elseif ($message->EventKey=='V1003_GOOD'){
                    return messageController::createNews();
                }elseif ($message->EventKey=='V1004_GOOD'){

                }elseif($message->EventKey=='V1005_GOOD'){

                }
            }else{

            }
        });
        return $server->serve();
    }
}