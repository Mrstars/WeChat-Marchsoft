<?php
/**
 * Created by PhpStorm.
 * User: star
 * Date: 2017/8/15
 * Time: 22:21
 */
namespace App\Http\Controllers\menu;

use App\Http\Controllers\Controller;

class MenuController extends Controller
{

    public static function  addMenu(){
        $wechat = app('wechat');
        $buttons = [
            [
                "name" => "了解三月",
                "sub_button" => [
                    [
                        "type"=>"click",
                        "name"=>"三月简介",
                        "key"=>"V1000_GOOD"
                    ],
                    [
                        "type" => "view",
                        "name" => "搜索",
                        "url"  => "http://www.soso.com/"
                    ],
                    [
                        "type" => "view",
                        "name" => "视频",
                        "url"  => "http://v.qq.com/"
                    ],
                    [
                        "type" => "click",
                        "name" => "赞一下我们",
                        "key" => "V1001_GOOD"
                    ],
                ],
            ],
            [
                "name"       => "三月推荐",
                "sub_button" => [
                    [
                        "type" => "click",
                        "name" => "小组路线",
                        "key"=>"V1002_GOOD"
                    ],
                    [
                        "type" => "view",
                        "name" => "每周一练",
                        "url"  => "http://v.qq.com/"
                    ],
                    [
                        "type" => "click",
                        "name" => "每周新闻",
                        "key" => "V1003_GOOD"
                    ],
                    [
                        "type" => "click",
                        "name" => "推荐书单",
                        "key" => "V1004_GOOD"
                    ],
                ],
            ],
            [
                "name"       => "联系我们",
                "sub_button" => [

                    [
                        "type" => "view",
                        "name" => "访问官网",
                        "url"  => "http://v.qq.com/"
                    ],
                    [
                        "type" => "click",
                        "name" => "每周新闻",
                        "key" => "V1005_GOOD"
                    ],
                ],
            ],
        ];
        $menu = $wechat->menu;
        $request = $menu->add($buttons);
    }

}