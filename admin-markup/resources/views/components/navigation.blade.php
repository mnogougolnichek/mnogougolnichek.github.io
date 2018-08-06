@php
    // You can use the following array to create your main menu

    Codebase::$main_nav = array(
        array(
            'name'  => 'Пользователи',
            'icon'  => 'si si-user',
            'url'   => route('users.index'),
        ),
        array(
            'name'  => 'Каталог',
            'icon'  => 'si si-briefcase',
            'sub'   => array(
                array(
                    'name'  => 'Категории',
                    'url'   => route('category.index'),
                ),
                array(
                    'name'  => 'Фильтры',
                    'url'   => route('filters.index'),
                ),
                array(
                    'name'  => 'Товары',
                    'url'   => route('goods.index'),
                ),
            )
        ),
        array(
            'name'  => 'Заказы',
            'icon'  => 'si si-user',
            'url'   => route('orders.index'),
        ),
        array(
            'name'  => 'Обратная связь',
            'icon'  => 'si si-user',
            'url'   => route('feedback_request.index'),
        ),
        array(
            'name'  => 'Настройки',
            'icon'  => 'si si-user',
            'url'   => route('settings.index'),
        ),
    );
    Codebase::build_nav(true, true);
@endphp
