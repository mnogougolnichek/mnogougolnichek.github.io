"use strict";

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