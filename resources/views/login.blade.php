<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>selltwo</title>
    <script src="https://cdn.bootcss.com/jquery/2.1.4/jquery.min.js"></script>
    <script src="{{ asset('js/manifest.js') }}"></script>
    <script src="{{ asset('js/vendor.js') }}"></script>

</head>
<body>
<div id="app">
    <example></example>

</div>
<!-- built files will be auto injected -->

<script src="{{ asset('js/login.js') }}"></script>
</body>
</html>

