<?php

namespace App\Http\Middleware;

use Closure;

class CheckLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle( $request,Closure $next)
    {
        session_start();
        if (!isset($_SESSION['username'])){
            return redirect();
        }
        return $next($request);
    }
}
