"use strict";
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

