
<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="X-CSRF-TOKEN" content="{{csrf_token()}}">
    <title>123</title>
    <script src="{{ asset('js/manifest.js') }}"></script>
    <script src="{{ asset('js/vendor.js') }}"></script>

</head>
<body>
<div id="app">
    <example></example>

</div>


<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>