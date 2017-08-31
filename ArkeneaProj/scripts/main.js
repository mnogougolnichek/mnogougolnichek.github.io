"use strict"


document.addEventListener('DOMContentLoaded', function () {

function setup() {
    (function () {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: true,
            autoplayStopOnLast: false
        });

        var trigger = document.querySelector('.trigger'),
            menu = document.querySelector('.nav-list');


        document.addEventListener('click', function (event) {
            event.preventDefault();
            var el = event.target;
            if (el == trigger) {
                alert("333");
                menu.classList.toggle('on');

            } 
           
        }, false);





        var deviceClass = isTouch() === true && document.querySelector("body").classList.add("touch");

        function isTouch() {
            return 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        };
    })();
}, false);
