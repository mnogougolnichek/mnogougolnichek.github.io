<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Company</title>
    <link rel="stylesheet" href="/css/app.css">
    @stack('styles')

</head>
<body>
@if(Request::path() != ('authorization'))
@include('components.page_container_start')
@endif
@include('components.inc_sidebar')
@if(Request::path() != ('authorization'))
@include('components.inc_header')
@endif
<main id="main-container">
    @yield('content')
</main>
@if(Request::path() != 'authorization')
@include('components.page_container_end')
@endif
    @stack('modals')
    <script  src="/js/app.js"></script>
    @stack('scripts')
</body>
</html>