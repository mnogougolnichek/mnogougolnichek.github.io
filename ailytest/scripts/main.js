"use strict";

document.addEventListener("DOMContentLoaded",main);

function main() {
    window.onresize = resize;

    let app = document.querySelector('.js-calendar'),
        calendar = new Calendar(app),
        controller = new Controller({
            calendar: calendar
        });
}