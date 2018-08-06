@extends('master')
@section('navigation')
    <li>
        <a class="active" href="/users">
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
        <a href="/settings">
            <i class="fa fa-cogs"></i>
            Settings
        </a>
    </li>
@endsection
@section('content')

    <!-- Page Content -->
    <div class="content">

        <!-- Dynamic Table -->
        <div class="block">
            <div class="block-header block-header-default d-block d-md-flex">
                <h3 class="block-title pr-3">Пользователи <small>(1)</small></h3>
                <div class="block-options form-inline pl-0">
                    <button type="button" class="btn btn-sm btn-success mr-2" data-toggle="modal" data-target="#modalItem"><i class="fa fa-user-plus mr-2"></i>Добавить</button>
                    <button type="button" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#modalItem" data-edit="true" disabled><i class="fa fa-pencil mr-2"></i>Редактировать</button>
                </div>
            </div>
            <div class="block-content block-content-full">
                <!-- DataTables init on table by adding .js-dataTable-full class -->
                <div class="table-responsive">
                    <table class="table table-vcenter js-dataTable-full">
                        <thead>
                        <tr>
                            <th class="text-center" style="width: 1%;">№</th>
                            <th>Имя</th>
                            <th>Эл. почта</th>
                            <th>Телефон 1</th>
                            <th>Телефон 2</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="text-center">1</td>
                            <td class="font-w600">Elon Musk</td>
                            <td>elon@musk.com</td>
                            <td>+380504556532</td>
                            <td>+380637768636</td>
                        </tr>
                        <tr>
                            <td class="text-center">1</td>
                            <td class="font-w600">Elon Musk</td>
                            <td>elon@musk.com</td>
                            <td>+380504556532</td>
                            <td>+380637768636</td>
                        </tr>
                        <tr>
                            <td class="text-center">1</td>
                            <td class="font-w600">Elon Musk</td>
                            <td>elon@musk.com</td>
                            <td>+380504556532</td>
                            <td>+380637768636</td>
                        </tr>
                        <tr>
                            <td class="text-center">1</td>
                            <td class="font-w600">Elon Musk</td>
                            <td>elon@musk.com</td>
                            <td>+380504556532</td>
                            <td>+380637768636</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- END Dynamic Table -->
    </div>
    <!-- END Page Content -->
@endsection
@push('modals')
    <!-- Fade In Modal -->
    <div id="modalItem" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-fadein" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form id="formItem" action="" method="post">
                    <input type="hidden" name="id">
                    <div class="block block-themed block-transparent mb-0">
                        <div class="block-header bg-gd-emerald">
                            <h3 class="block-title">Добавить пользователя</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i class="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="block-content">
                            <div class="form-group row">
                                <label for="addItemName" class="col-12">Имя <span class="text-danger">*</span></label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" id="addItemName" name="user_name">
                                </div>
                            </div>
                            <div class="row gutters-tiny">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label for="addItemPhone-1" class="col-12">Телефон <span class="text-danger">*</span></label>
                                        <div class="col-12">
                                            <input type="tel" class="js-masked-phone form-control" id="addItemPhone-1" name="user_phone_first">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label for="addItemPhone-2" class="col-12">Доп. телефон</label>
                                        <div class="col-12">
                                            <input type="tel" class="js-masked-phone form-control" id="addItemPhone-2" name="user_phone_second">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row gutters-tiny">
                                <div class="col-md-12">
                                    <div class="form-group row">
                                        <label for="addItemEmail" class="col-12">Эл. почта <span class="text-danger">*</span></label>
                                        <div class="col-12">
                                            <input type="email" class="form-control" id="addItemEmail" name="email">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label for="addItemPass" class="col-12">Пароль <span class="text-danger">*</span></label>
                                        <div class="col-12">
                                            <input type="password" class="form-control" id="addItemPass" name="password">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label for="addItemPass2" class="col-12">Повторить пароль <span class="text-danger">*</span></label>
                                        <div class="col-12">
                                            <input type="password" class="form-control" id="addItemPass2" name="repassword">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-alt-secondary" data-dismiss="modal">Отмена</button>
                            <button type="button" class="btn btn-alt-success">
                                <i class="fa fa-check"></i> Добавить
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- END Fade In Modal -->
@endpush

@push('scripts')
    <script src="/js/pages/users.js"></script>
@endpush
