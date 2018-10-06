"use strict";

document.addEventListener('DOMContentLoaded', function () {

    var trigger = document.querySelector('.trigger'),
        menu = document.querySelector('.sub-menu'),
        menuWrapper = document.querySelector('.menu-wrapper'),
        footer = document.querySelector('footer'),
        pageHeight = document.body.offsetHeight,
        footerHeight = footer.offsetHeight,
        cutPageHeight = pageHeight - footerHeight - window.innerHeight;

    var mySwiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        effect: 'slide',
        loop: true
    });

    var snapSlider = document.getElementById('sldr');

    noUiSlider.create(snapSlider, {
        start: [500, 4000],
        tooltips: true,

        connect: true,
        range: {
            'min': [0],
            'max': [10000]
        }
    });

    var  asideMenuItem = document.querySelectorAll('.menu-link');

    document.addEventListener('click', function (event) {
        console.log(event.target);
        if(event.target.classList.contains('menu-link')){
            event.preventDefault();
            for(let i = 0;i<asideMenuItem.length;i++){
                asideMenuItem[i].classList.remove('btn-on');
            }
            event.target.classList.toggle('btn-on');
            menu.classList.add('on');
        }
        if(!event.target.classList.contains('menu-link')&&!event.target.classList.contains('sub-menu-link')){
            menu.classList.remove('on');
            for(let i = 0;i<asideMenuItem.length;i++){
                asideMenuItem[i].classList.remove('btn-on');
            }
        }
    }, false);

    function scr() {
        if (event.target.scrollingElement.scrollTop < cutPageHeight) {
            menu.classList.remove('unfix');
            menuWrapper.classList.remove('unfix');
            menu.style.top = 'auto';
            menuWrapper.style.top = 'auto';
            menu.style.top = 'auto';
        } else {
            menuWrapper.classList.add('unfix');
            menuWrapper.style.top = cutPageHeight + 'px';
        };
    };

    document.onscroll = function () {
        return scr();
    };


}, false);


