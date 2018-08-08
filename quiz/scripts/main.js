"use strict";

(() => {
    document.addEventListener("DOMContentLoaded",main);

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

    function Model(app) {
        this.app = app;
        this.data = [];
        this.points = 0;
        this.count = -1;
        this.results = {
            text: [
                'хомячком',
                'овощем',
                'вельможей'
            ],
            url: [
                'images/ebichu.gif',
                'images/cucrick.gif',
                'images/nobleman.gif'
            ]
        }
    }

    Model.prototype.init = function () {
        this.getData(data => {
            console.log(data);
        });
    };

    Model.prototype.getData = function (callback) {
        fetch('data/data.json')
            .then(response => {
                return response.json();
            })
            .then(response => {
                this.data = response;
                if(callback && typeof callback === "function") callback(this.data);
            })
            .catch( alert );
    };

    Model.prototype.countStep = function (target) {
        let startBtn = this.app.querySelector('.js-game__start-btn'),
            restartBtn = this.app.querySelector('.js-game__restart-btn');
        if(target === startBtn){
            this.count +=1;
        }
        if(this.app.querySelectorAll('.js-game__answer').length){
            let arr = this.app.querySelectorAll('.js-game__answer');
            for(let i = 0; i < arr.length; i++){
                if(target === arr[i]) this.count +=1;
            }
        }
        if(target === restartBtn){
            this.count = -1;
        }

    };

    Model.prototype.countPoints = function (target) {
        console.log(this.count+'count');
        if(this.data[this.count-1]){
            for(let i=0;i<=this.data[this.count-1].answer.length;i++){

                if(target.id.slice(-1) === `${i}`){
                    console.log(this.count+'count');
                    console.log(i+'i');
                    this.points += this.data[this.count-1].answer[i].points;

                    console.log(this.points+"kkk");
                }
            }
        }
        if(!this.count){
            this.points = 0;
        }
    };


    function View(app) {
        this.app = app;
        this.count = -1;
    }

    View.prototype.init = function () {
        this.app.innerHTML = this.startTmpl();
    };

    View.prototype.startTmpl = function () {
        return `<div class="game__start">
              <button class="game__start-button js-game__start-btn pulse">Начать</button>
            </div>`;
    };

    View.prototype.progressTmpl = function (options) {
        const {url, question, answer} = options;

        return `    <div class="game__progress">
                  <img src="${url}" class="game__pic">
                  <div class="l-game__question">
                    <span class="game__question">${question}</span>
                  </div>
                    <div class="game__answer-container">
                      <div id="var-0" class="game__answer js-game__answer">${answer[0].var}</div>
                      <div id="var-1" class="game__answer js-game__answer">${answer[1].var}</div>
                      <div id="var-2" class="game__answer js-game__answer">${answer[2].var}</div>
                      <div id="var-3" class="game__answer js-game__answer">${answer[3].var}</div>
                    </div>
                </div>`;
    };

    View.prototype.finishTmpl = function (options) {
        const {url, text} = options;
        return `<div class="game__finish">
                  <div class="l-game__result">
                    <span class="game__result">
                        В прошлой жизни Вы были ${text}.
                    </span>
                  </div>
                  <img src=${url} class="game__result-pic">
                  <button id="restart" class="game__restart-btn js-game__restart-btn pulse">Играть еще</button>
                </div>`;
    };

    View.prototype.calculateResult = function (points, results) {
        let text, url;
        if(points === 0 || points<6){
            text = results.text[0];
            url = results.url[0]
        }else if(points<11 && points>5){
            text = results.text[1];
            url = results.url[1]
        }else if(points>10 && points<16){
            text = results.text[2];
            url = results.url[2]
        }
        this.app.innerHTML = this.finishTmpl({
            url : url,
            text : text
        });
    };

    View.prototype.renderGame = function (options) {
        let {data, count, points, results} = options;
        if(count !== this.count){
            this.count = count;
        }
        for(let i=0;i<data.length;i++){
            if(i === count){
                this.app.innerHTML = this.progressTmpl({
                    url : data[i].url,
                    question : data[i].question,
                    answer : data[i].answer
                });
            }else if(count === data.length){
                this.calculateResult(points, results);
            }else if(count === -1){
                this.app.innerHTML = this.startTmpl();
            }
        }
    };

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