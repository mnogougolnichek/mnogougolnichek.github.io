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
        <a class="active" href="/feedback_request">
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
            <h2 class="content-heading">Обратная связь</h2>
            <div class="block">
                <div class="block-header block-header-default justify-content-end">
                    <div class="col-auto">
                        <button type="button" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#del-modal">
                            <i class="fa fa-trash mr-2"></i>Удалить
                        </button>
                    </div>
                </div>
                <div class="block-content block-content-full">
                    <div class="table-responsive">
                        <table class="table table-vcenter js-dataTable-full">
                            <thead>
                            <tr>
                                <th class="text-center" style="width: 1%;">Дата</th>
                                <th style="width: 1%;">
                                    Номер <br>
                                    заказа
                                </th>
                                <th>ФИО</th>
                                <th>Телефон</th>
                                <th>Эл. почта</th>
                                <th>
                                    Комментарий <br>
                                    пользователя

                                </th>
                                <th>
                                    Комментарий <br>
                                    администратора
                                </th>
                                <th>Статус</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="text-center">12/01/2018</td>
                                <td class="text-center">1934</td>
                                <td class="font-w600" data-toggle="modal" data-target="#modalItem" style="color: #42a5f5;cursor: pointer">Алексей Иванов</td>
                                <td>+360677777777</td>
                                <td>alex@ivanov.com</td>
                                <td>Свяжитесь со мной пожалуйста</td>
                                <td>Здравствуйте, дорогой</td>
                                <td><span class="badge badge-success">Новая</span></td>
                            </tr>
                            <tr>
                                <td class="text-center">12/01/2018</td>
                                <td class="text-center">1934</td>
                                <td class="font-w600" data-toggle="modal" data-target="#modalItem" style="color: #42a5f5;cursor: pointer">Алексей Иванов</td>
                                <td>+360677777777</td>
                                <td>alex@ivanov.com</td>
                                <td>Свяжитесь со мной пожалуйста</td>
                                <td>Здравствуйте, дорогой</td>
                                <td><span class="badge badge-danger">Отклонена</span></td>
                            </tr>
                            <tr>
                                <td class="text-center">12/01/2018</td>
                                <td class="text-center">1934</td>
                                <td class="font-w600" data-toggle="modal" data-target="#modalItem" style="color: #42a5f5;cursor: pointer">Алексей Иванов</td>
                                <td>+360677777777</td>
                                <td>alex@ivanov.com</td>
                                <td>Свяжитесь со мной пожалуйста</td>
                                <td>Здравствуйте, дорогой</td>
                                <td><span class="badge badge-primary">В работе</span></td>
                            </tr>
                            <tr>
                                <td class="text-center">12/01/2018</td>
                                <td class="text-center">1934</td>
                                <td class="font-w600" data-toggle="modal" data-target="#modalItem" style="color: #42a5f5;cursor: pointer">Алексей Иванов</td>
                                <td>+360677777777</td>
                                <td>alex@ivanov.com</td>
                                <td>Свяжитесь со мной пожалуйста</td>
                                <td>Здравствуйте, дорогой</td>
                                <td><span class="badge badge-secondary">Обработанная</span></td>
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
    <div id="modalItem" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-fadein" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form id="formItem" action="" method="post">
                    <input type="hidden" name="id">
                    <div class="block block-themed block-transparent mb-0">
                        <div class="block-header bg-gd-emerald justify-content-end">
                            <div class="block-options col-auto">
                                <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i class="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="block-content">
                            <div class="row">
                                <div class="col-12  col-md-2">
                                    <label class="col-12 mt-20" >Дата</label>
                                    <div class="col-md-12">
                                        <span>
                                            20/01/2018
                                        </span>
                                    </div>
                                </div>
                                <div class="col-12  col-md-10">
                                    <label class="col-12 mt-20" >ФИО</label>
                                    <div class="col-md-12">
                                        <span>
                                            Гурченко Инокентий Валерьянович
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
                                    <label class="col-12 mt-20" >e-mail</label>
                                    <div class="col-md-12">
                                <span>
                                    ivanov@gmail.com
                                </span>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label class="col-12 mt-20" >Комментарий пользователя</label>
                                    <div class="col-md-12">
                                        <span>
                                            Свяжитесь со мной пожалуйста
                                            Свяжитесь со мной пожалуйста
                                            Свяжитесь со мной пожалуйста
                                            Свяжитесь со мной пожалуйста
                                        </span>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label class="col-12 mt-20" >Комментарий администратора</label>
                                    <div class="col-md-12">
                                        <textarea name="" class="form-control" cols="30" rows="3"></textarea>
                                    </div>
                                </div>
                                <div class="col-12  col-md-6 mb-20">
                                    <label class="col-12 mt-20" >Статус</label>
                                    <div class="col-md-12">
                                        <select class="form-control js-select" data-placeholder="Фильтр 'Филиал'">
                                            <option value="1">Новая</option>
                                            <option value="2">В работе</option>
                                            <option value="3">Обработанная</option>
                                            <option value="4">Отклонена</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-alt-secondary" data-dismiss="modal">Отмена</button>
                            <button type="button" class="btn btn-alt-success">
                                <i class="fa fa-check"></i> Сохранить
                            </button>
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
                            <h3 class="block-title">Удаление запроса</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i class="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="block-content">
                            <p>
                                Вы действительно хотите удалить данный запрос?
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
    <script src="/js/pages/feedback_request.js"></script>
@endpush
