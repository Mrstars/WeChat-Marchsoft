
<!DOCTYPE html>
<html lang="{{ config('newsIndex.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
    <meta name="X-CSRF-TOKEN" content="{{csrf_token()}}">
    <title>三月新闻</title>
    <script src="{{ asset('js/manifest.js') }}"></script>
    <script src="{{ asset('js/vendor.js') }}"></script>
</head>
<style type="text/css">
	body{
		margin: 0;
		padding: 0;
	}
</style>
<body>
<div id="app">

</div>

<script src="{{ asset('js/newsIndex.js') }}"></script>
</body>
</html>