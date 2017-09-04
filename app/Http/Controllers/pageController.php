<?php
/**
 * Created by PhpStorm.
 * User: star
 * Date: 2017/9/2
 * Time: 20:39
 */

namespace App\Http\Controllers;





use App\newsModel;
use Illuminate\Http\Request;

class pageController extends Controller
{

    public $newsModel;
    public function __construct()
    {
        $this->newsModel = new newsModel();
    }

}