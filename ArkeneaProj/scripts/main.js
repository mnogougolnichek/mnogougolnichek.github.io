"use strict"

document.addEventListener("DOMContentLoaded", setup);

function setup() {
    (function () {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: true,
            autoplayStopOnLast: false
        });

        var trigger = document.querySelector('.trigger'),
            menu = document.querySelector('.nav-list'),
            headerContent = document.querySelector('.header-content-wrapper'),
            headerForm = document.querySelector('.header-form');

       document.addEventListener('click', function (event) {
            event.preventDefault();
            var el = event.target;
            if (el === trigger) {
                
                menu.classList.toggle('on');
                headerContent.classList.toggle('off');
                headerForm.classList.toggle('off');
            } else if (!el.classList.contains('nav-link')) {
                
                menu.classList.remove('on');
                headerContent.classList.remove('off');
                headerForm.classList.remove('off');
            };
       });


    })();
};
