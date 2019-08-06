"use strict";

function Controller(options){
    this.events = [
        'click',
        'keypress'
    ];
    const {calendar} = options;
    this.calendar = calendar;
    this.init()
}

Controller.prototype.init = function(){
    this.follow();
};

Controller.prototype.follow = function(){
    let {calendar} =  this;
    for(let item of this.events){
        calendar.app.addEventListener(item, (event) => {
            if(event.target === calendar.nextBtn){
                calendar.nextMonth();
            }
            if(event.target === calendar.prevBtn){
                calendar.prevMonth();
            }
            if(event.target === calendar.searchInput&&event.code === 'Enter'){
                calendar.search(calendar.searchInput.value);
                console.log("add data");
            }
            calendar.dayCell.forEach(item => {
                item.classList.remove("calendar__day--selected");
                if(event.target === item){
                    calendar.selectDate(item);
            }

            });
            if(event.target.classList.contains("btn-edit-data")){
                let form = calendar.app.querySelector(".set-data-form");
                event.preventDefault();
                if(form.event.value !== ""){
                    calendar.setAppData({
                        event: form.event.value,
                        date: form.date.value,
                        members: form.members.value,
                        description: form.description.value
                    });
                }else{
                    form.event.style.background = "rgba(255,0,0,0.5)";
                }
            }
            if(event.target.classList.contains("btn-remove-data")){
                event.preventDefault();
                let form = calendar.app.querySelector(".set-data-form");
                calendar.removeEvent(form.date.value);
            }
        });

    }
};


