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
                <a class="active" href="/category">Category</a>
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
    <main>
        <div class="content">
            <h2 class="content-heading">Категории</h2>
            <div class="block">
                <div class="block-header block-header-default justify-content-end">
                    <div class="col-auto">
                        <button type="button" class="btn btn-sm btn-success mr-2" data-toggle="modal" data-target="#modalItem">
                            <i class="fa fa-plus mr-2"></i>
                            Добавить
                        </button>
                        <button type="button" class="btn btn-sm btn-warning mr-2" data-toggle="modal" data-target="#modalItem" data-edit="true" disabled>
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
                                <th class="text-center" style="width: 10%">Вес</th>
                                <th>Название</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="text-center">1</td>
                                <td class="font-w600">Вина</td>
                            </tr>
                            <tr>
                                <td class="text-center">2</td>
                                <td class="font-w600">Сыры</td>
                            </tr>
                            <tr>
                                <td class="text-center">3</td>
                                <td class="font-w600">Мясо</td>
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
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <form id="formItem" action="" method="post">
                    <input type="hidden" name="id">
                    <div class="block block-themed block-transparent mb-0">
                        <div class="block-header bg-gd-emerald">
                            <h3 class="block-title">Добавить категорию</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i class="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="block-content row">
                            <div class="col-12 col-md-6">
                                <label class="col-12 mt-10">Название</label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" name="example-text-input">
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="col-12 mt-10">Материнская категория</label>
                                <div class="col-md-12">
                                    <select class="form-control js-select">
                                        <option value="1">Категория1</option>
                                        <option value="2">Категория2</option>
                                        <option value="3">Категория3</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="col-12 mt-10">Цена</label>
                                <div class="col-md-12">
                                    <select class="form-control js-select">
                                        <option value="1">за 100г</option>
                                        <option value="2">за шт</option>
                                        <option value="3">за упаковку</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label class="col-12  mt-10" for="example-select2-multiple">Фильтр</label>
                                    <div class="col-lg-12">
                                        <select class="js-select2 form-control" id="example-select2-multiple" name="example-select2-multiple" style="width: 100%;" multiple>
                                            <option></option><!-- Required for data-placeholder attribute to work with Select2 plugin -->
                                            <option value="1">HTML</option>
                                            <option value="2">CSS</option>
                                            <option value="3">JavaScript</option>
                                            <option value="4">PHP</option>
                                            <option value="5">MySQL</option>
                                            <option value="6">Ruby</option>
                                            <option value="7">Angular</option>
                                            <option value="8">React</option>
                                            <option value="9">Vue.js</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="col-12 mt-10">Meta-title</label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" name="example-text-input">
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="col-12 mt-10">Вес сортировки</label>
                                <div class="col-md-12">
                                    <input type="number" class="form-control" name="example-text-input">
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="col-12 mt-10">Meta-discription</label>
                                <div class="col-md-12">
                                    <textarea class="form-control" rows="3"></textarea>
                                </div>
                            </div><div class="col-12 col-md-6">
                                <label class="col-12 mt-10">Meta-keywords</label>
                                <div class="col-md-12">
                                    <textarea class="form-control" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer mt-20">
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

    <div class="modal fade" id="del-modal" tabindex="-1" role="dialog" aria-labelledby="modal-fadein" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <form id="formItem" action="" method="post">
                    <input type="hidden" name="id">
                    <div class="block block-themed block-transparent mb-0">
                        <div class="block-header bg-gd-emerald">
                            <h3 class="block-title">Удаление категории</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i class="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="block-content">
                            <p>
                                Удаление данной категории невозможно. За ней закреплены товары.
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
    <script src="/js/pages/category.js"></script>
@endpush
