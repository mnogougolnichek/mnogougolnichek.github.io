"use strict";

var trigger = document.querySelector('.trigger'),
            menu = document.querySelector('.menu');

        document.addEventListener('click', function (event) {
            event.preventDefault();
            var el = event.target;
            if (el === trigger) {
                menu.classList.toggle('on');
                
            } 
        }, false);

