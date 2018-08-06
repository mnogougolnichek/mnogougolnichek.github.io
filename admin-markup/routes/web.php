<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('master');
});
Route::view('/authorization', 'pages.authorization')->name('authorization.index');
Route::view('/category', 'pages.category')->name('category.index');
Route::view('/feedback_request', 'pages.feedback_request')->name('feedback_request.index');
Route::view('/filters', 'pages.filters')->name('filters.index');
Route::view('/goods', 'pages.goods')->name('goods.index');
Route::view('/goods_add', 'pages.goods_add')->name('goods_add.index');
Route::view('/order_edit', 'pages.order_edit')->name('order_edit.index');
Route::view('/orders', 'pages.orders')->name('orders.index');
Route::view('/settings', 'pages.settings')->name('settings.index');
Route::view('/users', 'pages.users')->name('users.index');


