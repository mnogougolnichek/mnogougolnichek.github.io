"use strict";
(() => {
    document.addEventListener("DOMContentLoaded",main);

    function main() {
        resize();
        window.onresize = resize; 
    }

    function resize() {
        let cards = document.querySelectorAll('.card');
        for(let i=0; i<cards.length;i++){
            cards[i].style.height = cards[i].offsetWidth+'px';
        }
    }
})();
