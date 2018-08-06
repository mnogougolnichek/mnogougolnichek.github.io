@extends('master')
@section('navigation')
    <li>
        <a href="/users">
            <i class="si si-user"></i>
            Users
        </a>
    </li>
    <li class="open">
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
                <a class="active" href="/goods">Goods</a>
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
    <main>
        <div class="content">
            <h2 class="content-heading">Товары</h2>
            <div class="block">
                <div class="block-header block-header-default justify-content-end">
                    <div class="col-auto">
                        <button type="button" id="add-btn" class="btn btn-sm btn-success mr-2">
                            <i class="fa fa-plus mr-2"></i>
                            Добавить
                        </button>
                        <button type="button" class="btn btn-sm btn-warning mr-2" data-toggle="modal">
                            <i class="fa fa-pencil mr-2"></i>
                            Редактировать
                        </button>
                        <button type="button" class="btn btn-sm btn-danger js-delItem" data-toggle="modal" data-target="#del-modal">
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
                                <th class="text-center" style="width: 1%;">Артикул</th>
                                <th>Наименование</th>
                                <th style="width: 60%;">Описание</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="text-center">12012018</td>
                                <td class="font-w600">Вино Casa Verde Rezerva Syrah</td>
                                <td>
                                    Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">12012018</td>
                                <td class="font-w600">Вино Casa Verde Rezerva Syrah</td>
                                <td>
                                    Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">12012018</td>
                                <td class="font-w600">Вино Casa Verde Rezerva Syrah</td>
                                <td>
                                    Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">12012018</td>
                                <td class="font-w600">Вино Casa Verde Rezerva Syrah</td>
                                <td>
                                    Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое
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
    <div id="del-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-fadein" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <form id="formItem" action="" method="post">
                    <input type="hidden" name="id">
                    <div class="block block-themed block-transparent mb-0">
                        <div class="block-header bg-gd-emerald">
                            <h3 class="block-title">Удаление товара</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i class="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="block-content">
                            <p>
                                Удаление данного товара невозможно. За ним закреплены несколько вариаций.
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-alt-success" data-dismiss="modal" aria-label="Close">
                                ok
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
    <script src="/js/pages/goods.js"></script>
@endpush
