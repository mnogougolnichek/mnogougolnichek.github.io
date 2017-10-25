"use strict";

function Dataloader(){
    const self = this;
    this.points = 0;
    this.data = 0;
    this.count = -1;
    this.button = document.getElementById('btn');
    this.content = {
        question : document.querySelector('.question'),
        answer : document.querySelector('.answers'),
        modal : document.querySelector('.modal-wrapper')
    };
    this.getData = callback =>{
        callback = callback|| new Function;
        const xhr = new XMLHttpRequest();
        xhr.open('GET',document.location.href+"https://mnogougolnichek.github.io/quizforgit/data/data.json",true);
        xhr.send();
        xhr.onload = () => callback(JSON.parse(xhr.responseText),self.count);
    };
    this.addElements = () => {
        for(let i = 0; i < 3 ; i++){
            this.li = document.createElement("li");
            this.content.answer.appendChild(this.li);
            this.li.classList.add("answer");
        }
    };
    this.placeText = (json, int) =>{
        this.data = json;
        this.answerContainer = document.querySelectorAll(".answer");
        self.content.question.innerHTML = json[int]["q"];
        this.answerContainer.forEach((item, index) => {
                item.innerHTML = json[int]["a"][index]["t"];
        });
    };
    this.createCard = () =>{
        this.addElements();
        document.addEventListener("click", event =>{
            event.preventDefault();
            if(event.target === this.button){
                this.getData(this.placeText);
                this.count++;
                this.button.classList.add("hidden");
                console.log(this.points);
            }
            document.querySelectorAll(".answer").forEach((index,item)=>{
                // if(this.count+1<self.data.length){
                    if(index === event.target){
                        this.points+=this.data[this.count]["a"][item]["p"];
                        this.count++;
                        this.getData(this.placeText);
                        console.log(this.data.length);
                    }
                // }
                if(this.count>=self.data.length&&index === event.target){
                    this.div = document.createElement("div");
                    this.content.modal.classList.add("on");
                    this.content.modal.appendChild(this.div);
                    this.div.classList.add("result");
                    console.log(this.points);
                    if(this.points<=40){
                        this.div.innerHTML = "Вы гений"
                    }
                    else if(this.points<=50){
                        this.div.innerHTML = "Вы ничего еще"
                    }
                    else if(this.points>50){
                        this.div.innerHTML = "Вы лох"
                    }
                }

            })
        })
    };

    function setUp() {
        self.createCard();

    }
    setUp();
}



