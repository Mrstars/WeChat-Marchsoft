<?php
/**
 * Created by PhpStorm.
 * User: star
 * Date: 2017/8/25
 * Time: 10:34
 */

namespace App;



use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class newsModel extends Model
{

    protected $table = 'march_news';
    protected $primaryKey = 'idmarch_news';
    public $timestamps  = false;
    protected $fillable = ['news_title','news_content','news_date','news_publisher','news_type','news_num','active_type','news_stick'];

    public function getNews_stick(){
        //获取第一篇文章
        return newsModel::orderBy('news_stick','desc')->get(['news_title','news_content','news_publisher','news_date'])->first();
    }

    public function getNew($id){
        //获取一篇文章
//        dd($id);
        $last =  $this->getLast($id);
        $next = $this->getNext($id);
        $new =  $this->where('idmarch_news',$id)->get(['news_title','news_content','news_publisher','news_date'])->first();
        if(!$next){
            return ['new'=>$new,'last'=>$last];
        }
            return ['new'=>$new,'last'=>$last,'next'=>$next];
    }

    protected function getLast($id){
        //获取上一篇文章的id和名称
        return $this->where('idmarch_news','<',$id)->orderBy('idmarch_news','desc')->get(['idmarch_news','news_title'])->first();
    }

    protected function getNext($id){
        //获取下一篇文章的标题和id
        $next = $this->where('idmarch_news','>',$id)->get(['idmarch_news','news_title'])->first();
        if(sizeof($next)>0){
            return $next;
        }else{
            return false;
        }
    }

    public function getNews()
    {
        //获取文章分页
         return newsModel::orderBy('news_stick','desc')
             ->orderBy('news_date','news_date')
             ->paginate(10,['idmarch_news','news_title','news_publisher','news_date','news_stick']);
    }

    public function updateNews($id,$title,$connect,$news_stick){
        //更新文章
        return newsModel::where('idmarch_news',$id)->update(['news_date'=>$title,'news_content'=>$connect,'news_stick'=>$news_stick]);
    }

    public function deleteNews($id){
        //删除文章
        return newsModel::where('idmarch_news',$id)->delete();
    }


    public function addNews(Request $request){
        //添加文章
        $stick = $this->getNews_stick()->news_stick;
       return  newsModel::create(['news_title'=>$request->input('title'),
                'news_content'=>$request->input('content'),'news_date'=>date('Y-m-d H:i:s'),'news_publisher'=>Session::input('admin'),
                'news_type'=>1,'news_num'=>0,'active_type'=>006,'news_stick'=>$stick]);
    }

}