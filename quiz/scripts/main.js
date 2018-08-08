"use strict";

(() => {
    document.addEventListener("DOMContentLoaded",main);

    function main() {
        let app = document.querySelector('.js-game'),
            controller = new Controller(),
            model = new Model(app),
            view = new View(app);

        controller.init({
            model: model,
            view: view
        });
    }
})();