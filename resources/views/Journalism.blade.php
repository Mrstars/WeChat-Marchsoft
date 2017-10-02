
<!DOCTYPE html>
<html>
<head>
 <meta name="X-CSRF-TOKEN" content="{{csrf_token()}}">
	<title>新闻管理</title>

<link  rel="stylesheet"  href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<div id="app">
	<router-view></router-view>
</div>
 <!-- <script src="https://cdn.bootcss.com/jquery/2.1.4/jquery.min.js"></script> -->
</body>
<script src="{{ asset('js/app.js') }}"></script> 
</html>