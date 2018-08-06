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
            <h2 class="content-heading">Добавление товара</h2>
            <div class="block">
                <div class="block-header block-header-default d-block d-md-flex">
                    <h3 class="block-title pr-3">Вино Casa Verde </h3>
                </div>
                <div class="block-content block-content-full">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <label class="col-12 mt-10">Наименование</label>
                            <div class="col-md-12">
                                <input type="text" class="form-control" name="example-text-input">
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="col-12 mt-10">Категория</label>
                            <div class="col-md-12">
                                <select class="form-control js-select">
                                    <option value="1">Напитки</option>
                                    <option value="2">Мясо</option>
                                    <option value="3">Выпечка</option>
                                    <option value="4">Сыры</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="col-12 mt-10">Описание</label>
                            <div class="col-md-12">
                                <textarea class="form-control" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="col-12 mt-10">Meta-title</label>
                            <div class="col-md-12">
                                <input type="text" class="form-control" name="example-text-input">
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="col-12 mt-10">Meta-discription</label>
                            <div class="col-md-12">
                                <textarea class="form-control" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="col-12 mt-10">Meta-keywords</label>
                            <div class="col-md-12">
                                <textarea class="form-control" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="col-12 mt-10">SEO alt</label>
                            <div class="col-md-12">
                                <input type="text" class="form-control" name="example-text-input">
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="col-12 mt-10">Ribbon</label>
                            <div class="col-md-12">
                                <select class="form-control js-select">
                                    <option value="1">Новинка</option>
                                    <option value="2">Рекомендуем</option>
                                    <option value="3">Акция</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="col-12 mt-10">Статус</label>
                            <div class="col-md-12">
                                <select class="form-control js-select">
                                    <option value="1">Отображать</option>
                                    <option value="2">Скрывать</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <label class="col-12  mt-10" for="example-select2-multiple">Комплекты</label>
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
                            <div class="col-12 mt-10" style="font-weight: 600;">Популярный товар</div>
                            <div class="col-6">
                                <label class="css-control css-control-success css-checkbox">
                                    <input type="checkbox" class="css-control-input">
                                    <span class="css-control-indicator"></span>
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <label class="col-12 mt-10">Фильтры</label>
                            <div class="col-md-12">
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-20">
                        <div class="col-12 col-md-6">
                            <label class="col-12 mt-10">Загрузка картинки</label>
                            <div class="col-md-12">
                                <input type="file" class="form-control" name="example-text-input">
                            </div>
                        </div>
                        <div class="offset-md-6"></div>
                        <div class="col-xs-12 pl-30">
                            <div class="row">
                                <div class="col-xs-2 col-md-2 mt-20">
                                    <img src="https://placeimg.com/640/480/any/grayscale" alt="" style="width: 100%;">
                                </div>
                                <div class="col-xs-2 col-md-2 mt-20">
                                    <img src="https://placeimg.com/640/480/any/grayscale" alt="" style="width: 100%;">
                                </div>
                                <div class="col-xs-2 col-md-2 mt-20">
                                    <img src="https://placeimg.com/640/700/any/grayscale" alt="" style="width: 100%;">
                                </div>
                                <div class="col-xs-2 col-md-2 mt-20">
                                    <img src="https://placeimg.com/740/480/any/grayscale" alt="" style="width: 100%;">
                                </div>
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
                    <h3 class="block-title pr-3">Вариации</h3>
                    <div class="block-options form-inline pl-0">
                        <button type="button" class="btn btn-sm btn-success" data-toggle="modal" data-target="#modalItem">
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr class="font-w600">
                                <td>Артикул</td>
                                <td>Упаковка</td>
                                <td>Статус наличия</td>
                                <td>Цена</td>
                                <td>Sale Цена</td>
                                <td>Опубликовано</td>
                                <td>Действия</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" class="form-control" name="example-text-input">
                                </td>
                                <td>
                                    <input type="text" class="form-control" name="example-text-input">
                                </td>
                                <td>
                                    <input type="text" class="form-control" name="example-text-input">
                                </td>
                                <td>
                                    <input type="text" class="form-control" name="example-text-input">
                                </td>
                                <td>
                                    <input type="text" class="form-control" name="example-text-input">
                                </td>
                                <td>
                                    <label class="css-control css-control-success css-checkbox">
                                        <input type="checkbox" class="css-control-input">
                                        <span class="css-control-indicator"></span>
                                    </label>
                                </td>
                                <td>
                                    <button class="btn btn-danger js-delItem"><i class="fa fa-trash"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
        </div>
    </main>
    <!-- END Page Content -->
@endsection
@push('scripts')
    <script src="/js/pages/goods_add.js"></script>
@endpush
