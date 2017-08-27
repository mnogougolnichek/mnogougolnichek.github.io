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

    document.addEventListener('click', function (event) {
        event.preventDefault();
        var el = event.target;
        if (el === trigger) {
            menu.classList.toggle('on');
            trigger.classList.toggle('btn-on');
        } else if (el != menu && el.offsetParent != menu) {
            menu.classList.remove('on');
            trigger.classList.remove('btn-on');
        };
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



// document.addEventListener('DOMContentLoaded', () => {


// 	 let trigger = document.querySelector('.trigger'),
//     	menu = document.querySelector('.sub-menu'),
//     	menuWrapper = document.querySelector('.menu-wrapper'),
//     	footer = document.querySelector('footer'),
//     	pageHeight = document.body.offsetHeight,
//     	footerHeight = footer.offsetHeight,
//     	cutPageHeight = pageHeight - footerHeight - window.innerHeight;

// 	const mySwiper = new Swiper('.swiper-container', {
// 		nextButton: '.swiper-button-next',
//        	prevButton: '.swiper-button-prev',
//        	effect: 'slide',
//        	loop: true
// 	});



// 	const snapSlider = document.getElementById('sldr');

//     noUiSlider.create(snapSlider, {
// 	start: [ 500, 4000 ],
// 	tooltips: true,
	
// 	connect: true,
// 	range: {
// 		'min': [     0 ],
// 		'max': [ 10000 ]
// 	}
//     });

//     document.addEventListener('click', event => {
//     	event.preventDefault();
//     	let el = event.target;
//     	if(el === trigger) {
//     		menu.classList.toggle('on');
//     		trigger.classList.toggle('btn-on')
//     	} else if(el != menu&&el.offsetParent!=menu){
// 	    	menu.classList.remove('on');
// 	    	trigger.classList.remove('btn-on')
//     	};
//     }, false);

//     function scr(){
//     	if(event.target.scrollingElement.scrollTop < cutPageHeight) {
//     		menu.classList.remove('unfix');
//     		menuWrapper.classList.remove('unfix');
//     		menu.style.top = 'auto';
//     		menuWrapper.style.top = 'auto';
//     		menu.style.top = 'auto';
//     	} else {
//     		menuWrapper.classList.add('unfix');
//     		menuWrapper.style.top = (cutPageHeight)+'px';
//     	};
// };

//     document.onscroll = () => scr();

   
// }, false);


