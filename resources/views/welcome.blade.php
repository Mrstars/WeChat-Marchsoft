<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="X-CSRF-TOKEN" content="{{csrf_token()}}">
        <title>Laravel</title>
    </head>
    <body>
         <style type="text/css">
       .one {
    margin-left: 33.33333333%;
    width: 30.33333333%;
    margin-top: 50px;
    background-color: #fff;
}
.from {
    padding: 30px;
    -webkit-box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
    -o-box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
    box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);

}
.from .form-group {
    margin-bottom: 30px;
}
.from label {
    font-size: 14px;
    font-weight: 300;
}
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
}
label {
    display: inline-block;
    max-width: 100%;
}
.from .form-control {
    font-size: 14px;
    font-weight: 300;
    padding-left: 0;
    padding-right: 0;
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    -ms-border-radius: 0px;
    border-radius: 0px;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
}
.form-control {
    display: block;
    width: 100%;
    height: 50px;
    padding: 6px 12px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
}

.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
.btn-primary {
    padding-right: 20px;
    padding-left: 20px;
    border: none;
    background: #33cccc;
    color: #ffffff;
    -webkit-box-shadow: -2px 10px 20px -1px rgba(51, 204, 204, 0.4);
    -moz-box-shadow: -2px 10px 20px -1px rgba(51, 204, 204, 0.4);
    -o-box-shadow: -2px 10px 20px -1px rgba(51, 204, 204, 0.4);
    box-shadow: -2px 10px 20px -1px rgba(51, 204, 204, 0.4);
}
#error{
  font-size: 12px;
    color: red;  
}
    </style>
        <div id="app">
          <div class="one">
        <form  class="from" method="post" action="{{url('login/in')}}">
        {{csrf_field()}}
        <h2>Sign In</h2>
        <div class="form-group">
            <label for="username" class="sr-only">USERNAME</label>
            <input type="text" class="form-control" id="username"  placeholder="USERNAME" value="{{old('User')['name']}}">
        </div>
        <div class="form-group">
            <label for="password" class="sr-only">Password</label>
            <input type="password" class="form-control" id="password" placeholder="PASSWORD"   value="{{old('User')['password']}}">
        </div>
        <div class="form-group">
            <input type="submit" value="Sign In" class="btn btn-primary">
        </div>
    </form>

</div>
 </div>
    </body>
</html>
