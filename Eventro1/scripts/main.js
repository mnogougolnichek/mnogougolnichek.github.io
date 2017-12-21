// "use strict";

// let trigger = document.querySelector('.trigger'),
//          menu = document.querySelector('.nav-list'),
//          headerContent = document.querySelector('.header-box');

// document.addEventListener('click', event => {
//   event.preventDefault();
//   let el = event.target;
//   if(el === trigger) {
//       menu.classList.toggle('on');
//       headerContent.classList.toggle('off');
//       headerForm.classList.toggle('off');
//   }else if(!el.classList.contains('nav-link')){
//       menu.classList.remove('on'),
//       headerContent.classList.remove('off');
//   };
// }, false);         

// function initMap() {
//         let uluru = {lat:  23.777176, lng: 90.399452};
//         let map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 15,
//           center: uluru,
//           scrollwheel: false
//         });
//         let marker = new google.maps.Marker({
//           position: uluru,
//           map: map
//         });
//       } 

// setInterval( function (){
// 	const dayX = new Date('September 01, 2017 23:15:30');
//     let dayNow = new Date();  

//     let diff = dayX.getTime() - dayNow.getTime(),
//     sec = Math.floor( (diff/1000) % 60 ),
//     min = Math.floor( (diff/1000/60) % 60 ),
//     hour = Math.floor( (diff/(1000*60*60)) ),
//     day = Math.floor( diff/(1000*60*60*24) );   
//    document.getElementById("timer-sec").innerHTML = sec;    
//    document.getElementById("timer-min").innerHTML = min;    
//    document.getElementById("timer-hour").innerHTML = hour;    
//    document.getElementById("timer-day").innerHTML = day;   
   
// }, 1000);

// Old js for IE

"use strict";

var trigger = document.querySelector('.trigger'),
    menu = document.querySelector('.nav-list'),
    headerContent = document.querySelector('.header-box');

document.addEventListener('click', function (event) {
  event.preventDefault();
  var el = event.target;
  if (el === trigger) {
    menu.classList.toggle('on');
    headerContent.classList.toggle('off');
    headerForm.classList.toggle('off');
  } else if (!el.classList.contains('nav-link')) {
    menu.classList.remove('on'), headerContent.classList.remove('off');
  };
}, false);

function initMap() {
  var uluru = { lat: 23.777176, lng: 90.399452 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

setInterval(function () {
    var dayX = new Date('January 30, 2018 23:15:30');
    var dayNow = new Date();

    var diff = dayX.getTime() - dayNow.getTime(),
        sec = Math.floor(diff / 1000 % 60),
        min = Math.floor(diff / 1000 / 60 % 60),
        hour = Math.floor(diff / (1000 * 60 * 60)),
        day = Math.floor(diff / (1000 * 60 * 60 * 24));
    if(day > 0){
        document.getElementById("timer-sec").innerHTML = sec;
        document.getElementById("timer-min").innerHTML = min;
        document.getElementById("timer-hour").innerHTML = hour;
        document.getElementById("timer-day").innerHTML = day;
    }
    else{
        sec = 0;
        min = 0;
        hour = 0;
        day = 0;
    };

}, 1000);