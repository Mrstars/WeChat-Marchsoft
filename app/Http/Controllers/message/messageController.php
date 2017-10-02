<?php
/**
 * Created by PhpStorm.
 * User: star
 * Date: 2017/8/23
 * Time: 16:57
 */

namespace App\Http\Controllers\message;


use EasyWeChat\Message\Image;
use EasyWeChat\Message\News;

class messageController
{
//https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2520797183,2945766890&fm=26&gp=0.jpg
    public static function createNews(){

        $news = new News();
        $news->title = '每周一闻';
        $news->description = '微信图片上传服务有敏感检测系统，图片内容如果含有敏感内容，如色情，商品推广，虚假信息等，上传可能失败。';
        $news->image ="http://wangaimin.ngrok.cc/image/1.jpeg";
        $news->url = 'wangaimin.ngrok.cc/index';
        return $news;
    }

    public static function createImg(){
        $text = new Image(['media_id' => '87ps5pzIifU-IdJDVdG-GYksP03v5waltKWtbfKJVEc']);
        return $text;

    }
}