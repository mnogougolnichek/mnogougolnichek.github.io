"use strict";

function Controller() {
    this.events = [
        'click'
    ];
}

Controller.prototype.init = function (options) {
    const {model, view} = options;
    this.model = model;
    this.view = view;
    this.model.init();
    this.view.init();
    this.listen();
    return this;
};

Controller.prototype.listen = function () {
    let {model, view} =  this;
    for(let item of this.events){
        view.app.addEventListener(item, (event) => {
            model.countStep(event.target);
            model.countPoints(event.target);
            view.renderGame({
                data: model.data,
                count: model.count,
                points: model.points,
                results: model.results,
                target: event.target
            });
        });
    }
};