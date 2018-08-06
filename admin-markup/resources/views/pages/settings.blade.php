@extends('master')
@section('navigation')
    <li>
        <a href="/users">
            <i class="si si-user"></i>
            Users
        </a>
    </li>
    <li>
        <a class="nav-submenu" data-toggle="nav-submenu" href="">
            <i class="fa fa-list-ul"></i>
            Catalog
        </a>
        <ul>
            <li>
                <a href="/category">Category</a>
            </li>
            <li>
                <a href="/filters">Filters</a>
            </li>
            <li>
                <a href="/goods">Goods</a>
            </li>
        </ul>
    </li>
    <li>
        <a href="/orders">
            <i class="fa fa-th-list"></i>
            Orders
        </a>
    </li>
    <li>
        <a href="/feedback_request">
            <i class="fa fa-comments"></i>
            Feedback
        </a>
    </li>
    <li>
        <a class="active" href="/settings">
            <i class="fa fa-cogs"></i>
            Settings
        </a>
    </li>
@endsection
@section('content')
    <!-- Page Content -->
    <main>
        <div class="content">
            <h2 class="content-heading">Настройки</h2>
            <div class="block">
                <div class="block-content block-content-full">
                    <form>
                        <div class="row">
                            <div class="col-12 col-md-4">
                                <label class="col-12 mt-10">e-mail</label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <label class="col-12 mt-10">Телефон</label>
                                <div class="col-md-12">
                                    <input id="phone1" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <label class="col-12 mt-10">Телефон</label>
                                <div class="col-md-12">
                                    <input id="phone2" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <label class="col-12 mt-10">Ссылка facebook</label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <label class="col-12 mt-10">Ссылка telegram</label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <label class="col-12 mt-10">Ссылка twitter</label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <label class="col-12 mt-10">Meta-description</label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <label class="col-12 mt-10">Meta-keywords</label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-12">
                                <label class="col-12 mt-10">Адрес</label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-12">
                                <label class="col-12 mt-10">Google map</label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-12 content">
                                <button class="btn btn-primary">Сохранить</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
    <!-- END Page Content -->
@endsection
@push('scripts')
    <script src="/js/pages/settings.js"></script>
@endpush
