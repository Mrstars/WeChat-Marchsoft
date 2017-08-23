<?php
/**
 * Created by PhpStorm.
 * User: star
 * Date: 2017/8/16
 * Time: 11:09
 */

namespace App\Http\Controllers\material;


use App\Http\Controllers\Controller;
use EasyWeChat\Message\Article;
use EasyWeChat\Message\News;
use Illuminate\Http\Request;

class MaterialController extends Controller
{

    public $wechat = null;
    public $media = null;
    public function __construct()
    {
        $this->wechat =app('wechat');
        $this->media=$this->wechat->material;
    }

    public function update(Request $request,$media_id){

        $article  = new Article(['title'=>$request->input('title'),
            'thumb_media_id'=>'87ps5pzIifU-IdJDVdG-GYksP03v5waltKWtbfKJVEc',
            'author'=>$request->input('author'),
            'show_cover_pic'=>0,
            'content'=>$request->input('content'),
            'content_source_url'=>'http://www.jianshu.com/p/0e87d726864b']);
        $this->media->uploadArticle($article,$media_id);
    }

    public function get(){
        $resource = $this->media->get('87ps5pzIifU-IdJDVdG-GYksP03v5waltKWtbfKJVEc');
        dd($resource);

    }

}