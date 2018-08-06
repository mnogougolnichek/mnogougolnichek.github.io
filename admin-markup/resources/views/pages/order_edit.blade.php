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
        <a class="active" href="/orders">
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
    <main>
        <div class="content">
            <h2 class="content-heading">Заказ №3452 от 01/03/2018</h2>
            <div class="block">
                <div class="block-header block-header-default d-block d-md-flex">
                    <h3 class="block-title pr-3">Информация о заказе</h3>
                </div>
                <div class="block-content block-content-full">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <label class="col-12 mt-10">Заказчик</label>
                            <div class="col-md-12">
                                <input type="text" class="form-control" name="example-text-input">
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="col-12 mt-10">Телефон</label>
                            <div class="col-md-12">
                                <input type="text" class="form-control" name="example-text-input">
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="col-12 mt-10">e-mail</label>
                            <div class="col-md-12">
                                <input type="text" class="form-control" name="example-text-input">
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="col-12 mt-10">Адрес</label>
                            <div class="col-md-12">
                                <input type="text" class="form-control" name="example-text-input">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block-content  block-content-full bg-body-light">
                    <div class="row mr-20 ml-20 justify-content-end">
                        <button type="button" class="btn btn-secondary col-auto mr-2" data-dismiss="modal">Отмена</button>
                        <button type="button" class="btn btn-success col-auto">
                            <i class="fa fa-check"></i> Сохранить
                        </button>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="block-header block-header-default d-block d-md-flex">
                    <h3 class="block-title pr-3">Список товаров</h3>
                    <div class="block-options form-inline pl-0">
                        <button type="button" class="btn btn-sm btn-success mr-2" data-toggle="modal" data-target="#modalItem">
                            <i class="fa fa-plus mr-2"></i>
                            Добавить
                        </button>
                        <button type="button" class="btn btn-sm btn-warning mr-2" data-toggle="modal" data-target="#modalItem" data-edit="true" disabled>
                            <i class="fa fa-pencil mr-2"></i>
                            Редактировать
                        </button>
                        <button type="button" class="btn btn-sm btn-danger js-delItem">
                            <i class="fa fa-trash mr-2"></i>
                            Удалить
                        </button>
                    </div>
                </div>
                <div class="block-content block-content-full">
                    <div class="table-responsive content">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>Наименование</th>
                                <th>Упаковка</th>
                                <th>Цена</th>
                                <th>Кол-во</th>
                                <th>Сумма</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    Вино Casa Verde Rezerva Syrah
                                </td>
                                <td>Бутылка для игристых</td>
                                <td>265 грн</td>
                                <td>10</td>
                                <td>2650</td>
                            </tr>
                            <tr>
                                <td>
                                    Вино Casa Verde Rezerva Syrah
                                </td>
                                <td>Бутылка для игристых</td>
                                <td>265 грн</td>
                                <td>10</td>
                                <td>2650</td>
                            </tr>
                            <tr>
                                <td>
                                    Вино Casa Verde Rezerva Syrah
                                </td>
                                <td>Бутылка для игристых</td>
                                <td>265 грн</td>
                                <td>10</td>
                                <td>2650</td>
                            </tr>
                            <tr>
                                <td>
                                    Вино Casa Verde Rezerva Syrah
                                </td>
                                <td>Бутылка для игристых</td>
                                <td>265 грн</td>
                                <td>10</td>
                                <td>2650</td>
                            </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th>Итого по заказу</th>
                                    <th>2650</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <!-- END Page Content -->
@endsection
@push('modals')
    <!-- Fade In Modal -->
    <div id="modalItem" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-fadein" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <form id="formItem" action="" method="post">
                    <input type="hidden" name="id">
                    <div class="block block-themed block-transparent mb-0">
                        <div class="block-header bg-gd-emerald">
                            <h3 class="block-title">Добавление товара</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i class="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="block-content">
                            <div class="row gutters-tiny">
                                <div class="col-12">
                                    <div class="form-group row">
                                        <label for="addItemPhone-2" class="col-12">Товар</label>
                                        <div class="col-12">
                                            <input class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group row">
                                        <label for="addItemPhone-2" class="col-12">Количество</label>
                                        <div class="col-12">
                                            <input type="number" class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-alt-secondary" data-dismiss="modal">Отмена</button>
                            <button type="submit" class="btn btn-alt-success">
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
    <script src="/js/pages/order_edit.js"></script>
@endpush
