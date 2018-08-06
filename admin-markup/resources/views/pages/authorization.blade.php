@extends('master')
@push('scripts')
    <link rel="stylesheet" href="/css/pages/authorization.css">
@endpush
@section('content')
    <!-- Page Content -->
    <div class="bg-gd-emerald">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="hero-static content content-full bg-white " data-toggle="appear">
                        <div class="row justify-content-center">
                            <div class="col-xs-2">
                                <a class="font-w700" href="" style="font-size: 100px">
                                    <i class="fa fa-lock"></i>
                                </a>
                            </div>
                        </div>
                        <div class="px-5 text-center">
                            <h1 class="h2 font-w700 mb-10">Название</h1>
                            <h2 class="h4 font-w400 text-muted mb-20">Пожалуйста, авторизируйтесь</h2>
                        </div>
                        <div class="row justify-content-center px-5">
                            <div class="col-sm-8 col-md-6">
                                <form method="post" id="authorization">

                                    <div class=" row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="login">Логин / эл. почта</label>
                                                <input type="text" class="form-control mt-5" id="login" name="login">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="password">Пароль</label>
                                                <input type="password" class="form-control" id="password" name="password">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row gutters-tiny">
                                        <div class="col-12 mb-10 mt-20">
                                            <button type="submit" class="btn btn-block btn-hero btn-noborder btn-rounded btn-alt-primary js-submit-btn">
                                                <i class="si si-login mr-10"></i> Войти
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-- END Page Content -->
@endsection
@push('scripts')
    <script src="/js/pages/authorization.js"></script>
@endpush
