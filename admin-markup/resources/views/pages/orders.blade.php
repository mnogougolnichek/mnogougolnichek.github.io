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
            <h2 class="content-heading">Заказы</h2>
            <div class="block">
                <div class="block-header block-header-default justify-content-end">
                    <div class="col-auto">
                        <button type="button" id="add-btn" class="btn btn-sm btn-success mr-2">
                            <i class="fa fa-plus mr-2"></i>
                            Добавить
                        </button>
                        <button type="button" class="btn btn-sm btn-warning mr-2" data-toggle="modal" data-target="#edit-modal" data-edit="true">
                            <i class="fa fa-pencil mr-2"></i>
                            Редактировать
                        </button>
                        <button type="button" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#del-modal">
                            <i class="fa fa-trash mr-2"></i>
                            Удалить
                        </button>
                    </div>
                </div>
                <div class="block-content block-content-full">
                    <div class="table-responsive">
                        <table class="table table-vcenter js-dataTable-full">
                            <thead>
                            <tr>
                                <th class="text-center" style="width: 1%;">Номер заказа</th>
                                <th>Дата заказа</th>
                                <th>Заказчик</th>
                                <th>Телефон</th>
                                <th>E-mail</th>
                                <th style="width: 15%;">Статус заказа</th>
                                <th style="width: 15%;">Статус оплаты</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="text-center font-w600" style="color: #42a5f5;cursor: pointer" data-toggle="modal" data-target="#modalItem">
                                    1201
                                </td>
                                <td>01/03/2018</td>
                                <td>Сергей Сергеевич Сергеев</td>
                                <td>+360677777777</td>
                                <td>alex@ivanov.com</td>
                                <td>
                                    <select class="form-control js-select" data-placeholder="Фильтр 'Филиал'">
                                        <option value="1">Новый</option>
                                        <option value="2">Подтвержден</option>
                                        <option value="3">Отправлен</option>
                                        <option value="4">Закрыт</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="form-control js-select" data-placeholder="Фильтр 'Филиал'">
                                        <option value="1">Оплачен</option>
                                        <option value="2">Не оплачен</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center font-w600" style="color: #42a5f5;cursor: pointer" data-toggle="modal" data-target="#modalItem">
                                    1201
                                </td>
                                <td>01/03/2018</td>
                                <td>Сергей Сергеевич Сергеев</td>
                                <td>+360677777777</td>
                                <td>alex@ivanov.com</td>
                                <td>
                                    <select class="form-control js-select" data-placeholder="Фильтр 'Филиал'">
                                        <option value="1">Новый</option>
                                        <option value="2">Подтвержден</option>
                                        <option value="3">Отправлен</option>
                                        <option value="4">Закрыт</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="form-control js-select" data-placeholder="Фильтр 'Филиал'">
                                        <option value="1">Оплачен</option>
                                        <option value="2">Не оплачен</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center font-w600" style="color: #42a5f5;cursor: pointer" data-toggle="modal" data-target="#modalItem">
                                    1201
                                </td>
                                <td>01/03/2018</td>
                                <td>Сергей Сергеевич Сергеев</td>
                                <td>+360677777777</td>
                                <td>alex@ivanov.com</td>
                                <td>
                                    <select class="form-control js-select" data-placeholder="Фильтр 'Филиал'">
                                        <option value="1">Новый</option>
                                        <option value="2">Подтвержден</option>
                                        <option value="3">Отправлен</option>
                                        <option value="4">Закрыт</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="form-control js-select" data-placeholder="Фильтр 'Филиал'">
                                        <option value="1">Оплачен</option>
                                        <option value="2">Не оплачен</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center font-w600" style="color: #42a5f5;cursor: pointer" data-toggle="modal" data-target="#modalItem">
                                    1201
                                </td>
                                <td>01/03/2018</td>
                                <td>Сергей Сергеевич Сергеев</td>
                                <td>+360677777777</td>
                                <td>alex@ivanov.com</td>
                                <td>
                                    <select class="form-control js-select" data-placeholder="Фильтр 'Филиал'">
                                        <option value="1">Новый</option>
                                        <option value="2">Подтвержден</option>
                                        <option value="3">Отправлен</option>
                                        <option value="4">Закрыт</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="form-control js-select" data-placeholder="Фильтр 'Филиал'">
                                        <option value="1">Оплачен</option>
                                        <option value="2">Не оплачен</option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
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
    <div id="edit-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-fadein" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <form id="formItem" action="" method="post">
                    <input type="hidden" name="id">
                    <div class="block block-themed block-transparent mb-0">
                        <div class="block-header bg-gd-emerald">
                            <h3 class="block-title">Заказ №3452 от 01/03/2018</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i class="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="block-content">
                            <div class="row">
                                <div class="col-12  col-md-6">
                                    <label class="col-12 mt-20" >Заказчик</label>
                                    <div class="col-md-12">
                                        <span>
                                            Сергей Сергеевич Сергиенко
                                        </span>
                                    </div>
                                </div>
                                <div class="col-12  col-md-6">
                                    <label class="col-12 mt-20" >Телефон</label>
                                    <div class="col-md-12">
                                        <span>
                                            +360677777777
                                        </span>
                                    </div>
                                </div>
                                <div class="col-12  col-md-6">
                                    <label class="col-12 mt-20" >Адрес</label>
                                    <div class="col-md-12">
                                        <span>
                                            Украина, Киев Владимрская 50
                                        </span>
                                    </div>
                                </div>
                                <div class="block-content block-content-full content mt-20">
                                    <div class="table-responsive">
                                        <table class="table js-dataTable-full">
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
                        <div class="modal-footer">
                            <button type="button" class="btn btn-alt-secondary" data-dismiss="modal">ok</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div id="del-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-fadein" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <form id="formItem" action="" method="post">
                    <input type="hidden" name="id">
                    <div class="block block-themed block-transparent mb-0">
                        <div class="block-header bg-gd-emerald">
                            <h3 class="block-title">Удаление заказа</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i class="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="block-content">
                            <p>
                                Вы действительно хотите удалить данный заказ?
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-alt-success" data-dismiss="modal" aria-label="Close">
                                Да
                            </button>
                            <button type="button" class="btn btn-alt-danger" data-dismiss="modal" aria-label="Close">
                                Нет
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
    <script src="/js/pages/orders.js"></script>
@endpush
