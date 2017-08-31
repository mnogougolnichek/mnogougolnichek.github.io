"use strict";

// document.addEventListener("DOMContentLoaded", setup);

// function setup(){
//     (()=>{
//         let swiper = new Swiper('.swiper-container', {
//             pagination: '.swiper-pagination',
//             paginationClickable: true,
//             autoplay: true,
//             autoplayStopOnLast: false
//         });

//         let trigger = document.querySelector('.trigger'),
//          menu = document.querySelector('.nav-list'),
//          headerContent = document.querySelector('.header-content-wrapper'),
//          headerForm = document.querySelector('.header-form');


       
//         document.addEventListener('click', event => {
//          event.preventDefault();
//          let el = event.target;
//          if(el === trigger) {
//              menu.classList.toggle('on');
//              headerContent.classList.toggle('off');
//              headerForm.classList.toggle('off');
//          }else if(!el.classList.contains('nav-link')){
//              menu.classList.remove('on');
//              headerContent.classList.remove('off');
//              headerForm.classList.remove('off');
//          };
//         }, false);

//         let deviceClass = isTouch()===true&&(document.querySelector("body").classList.add("touch"));

//         function isTouch() {
//             return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
//         };
//     })();
// };

        // var modalLauncher = document.querySelectorAll(".menu-onclick");

        // modalLauncher.forEach(function (elem) {
        //   elem.onclick = function (event) {
        //   event.preventDefault();
        //   var modal = document.getElementById('test__modal');
        //   modal.classList.toggle("on");
        //   var bannerContent = document.querySelector('.banner-content');
        //   bannerContent.classList.toggle("off");
        // };
        // });

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
        }, false);





        var deviceClass = isTouch() === true && document.querySelector("body").classList.add("touch");

        function isTouch() {
            return 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        };
    })();
};
