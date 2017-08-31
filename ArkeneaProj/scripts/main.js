"use strict";



document.addEventListener('DOMContentLoaded', function () {


    var trigger = document.querySelector('.trigger'),
            menu = document.querySelector('.nav-list'),
            headerContent = document.querySelector('.header-content-wrapper'),
            headerForm = document.querySelector('.header-form');


    document.addEventListener('click', function (event) {
        event.preventDefault();
        var el = event.target;
        if (el === trigger) {
            menu.classList.toggle('on');
           
        } 
    }, false);



}, false);
