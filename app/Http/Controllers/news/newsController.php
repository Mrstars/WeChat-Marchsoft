<?php
/**
 * Created by PhpStorm.
 * User: star
 * Date: 2017/8/25
 * Time: 10:28
 */

namespace App\Http\Controllers\news;


use App\newsModel;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class newsController
{

    public $newsModel;
    public function __construct()
    {
        $this->newsModel = new newsModel();

    }

    public function getNews(){
        //获取分页信息
        $news = $this->newsModel->getNews();
        return redirect()->with('news',$news);
    }

    public function getFrist(){

        $first = $this->newsModel->getNews_stick();
        dd($first);
    }

    public function getNew(Request $request)
    {
        $new =  $this->newsModel->getNew($request->input('id'));
        return redirect()->with('news',$new);
    }

    public function sendNews(Request $request){

            $validator = Validator::make($request->all(),['isUp'=>'integer|max:1','title'=>'required|max:45','content'=>'requried']
                ,['required'=>':attribute为空','max'=>':attribute过长','integer'=>':attribute必须为数字']
                ,['isUp'=>'置顶','title'=>'标题','content'=>'内容']);
            if($validator->fails()){
                return redirect()->back()->withInput()->withErrors($validator);
            }

            $this->newsModel->addNews($request);

    }

    public function deleteNew(Request $request){

        $validator = Validator::make($request->all(),['id'=>'required|integer'],
            ['required'=>':attribute为空','integer'=>':attribute必须为数字'],
            ['id'=>'文章编号']);
        if ($validator->fails()){
            return redirect()->back()->withErrors($validator);
        }
        $this->newsModel->deleteNews($request->input('id'));
    }

    public function updateNew(Request $request){

        $validator = Validator::make($request->all(),['id'=>'required|integer','isUp'=>'integer|max:1','title'=>'required|max:45','content'=>'required']
            ,['required'=>':attribute为空','max'=>':attribute过长','integer'=>':attribute必须为数字']
            ,['isUp'=>'置顶','title'=>'标题','content'=>'内容','id'=>'编号']);
        if($validator->fails()){
            return redirect('index')->withInput()->withErrors($validator);
        }
        $this->newsModel->updateNew($request);

    }

}