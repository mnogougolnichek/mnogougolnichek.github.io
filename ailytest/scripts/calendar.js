"use strict";

function Calendar(app) {
    this.app = app;
    this.cells = 35;
    this.data = [];
    this.daysToShow = [];
    this.eventsToShow = [];
    this.dayCell = [];
    this.date = new Date();
    this.dateId = this.date.getDate()+"-"+this.date.getMonth()+"-"+this.date.getFullYear();
    console.log(this.dateId);
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.calendarDays = app.querySelector('.calendar__days-container');
    this.nextBtn = app.querySelector('.date__next');
    this.prevBtn = app.querySelector('.date__prev');
    this.monthOutput = app.querySelector('.date__month');
    this.yearOutput = app.querySelector('.date__year');
    this.searchInput = app.querySelector('.calendar__search');
    this.searchResOutput = app.querySelector('.calendar__search-result');
    this.setEventRoot = app.querySelector('.set-event');
    this.isTodayBadge = app.querySelector('.date__isToday');
    this.monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май",
        "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    this.init();
}

Calendar.prototype.init = function() {
    this.getData();
};

Calendar.prototype.cellTemplate = function (options) {
    let {day, id, isToday} = options;
    return `<div class="calendar__day ${this.dateId===id?"today":""}" id="${id}">
            <span>${day}</span>
            <div class="calendar__day-event"></div>
          </div>`;
};

Calendar.prototype.showEventsTemplate = function (event) {
    return `<li class="calendar__search-result-event">
    <span>${event.event}</span>
    <span>${event.members}</span>
    <span>${event.id}</span>
    </li>`;
};

Calendar.prototype.eventTemplate = function (options) {
    let {event, date, members, description} = options;
    return `<form class="set-data-form">
            <input class="set-data-form__input" name="event" type="text" placeholder="Событие" value="${event?event:""}">
            <input class="set-data-form__input" name="date" type="text" value="${date}">
            <input class="set-data-form__input" name="members" type="text" placeholder="Имена участников" value="${members?members:""}">
            <textarea name="description" name="" id="" cols="30" rows="10" placeholder="Описание">
            ${description?description:""}
            </textarea>
            <button class="btn-edit-data">Готово</button>
            <button class="btn-remove-data">Удалить</button>
        </form>`;
};

Calendar.prototype.render = function () {
    this.getDaysToShow();
    this.calendarDays.innerHTML = "";
    for(let i = 0;i<this.cells;i++){
        this.calendarDays.innerHTML += this.cellTemplate({
            day: this.daysToShow[i].day,
            id: this.daysToShow[i].day + "-" + this.daysToShow[i].month + "-" + this.daysToShow[i].year,
            isToday: this.dateId
        });
    }
    this.outputData();
    this.monthOutput.innerHTML = this.monthNames[this.month];
    this.yearOutput.innerHTML = this.year;
    this.searchResOutput.innerHTML = "";
    for(let i=0;i<this.eventsToShow.length;i++){
        this.searchResOutput.innerHTML+=this.showEventsTemplate(this.eventsToShow[i])
    }
    this.toggleSearchResOutput();
    this.dayCell = this.app.querySelectorAll('.calendar__day');
    resize();
};

Calendar.prototype.getDaysInMonth = function (month,year) {
    return new Date(year, month+1, 0).getDate();
};

Calendar.prototype.search = function (value) {
    let arr = [];
    this.eventsToShow = [];
    this.data.forEach( item =>{
        if(item.event.includes(value)||item.members.includes(value)||item.id.includes(value)){
            value!==""?arr.push(item):true;
        }
    });
    this.eventsToShow = arr;
    this.render();
};

Calendar.prototype.getDaysToShow = function () {
    let currentMonth = this.getDaysInMonth(this.month, this.year),
        prevMonth = this.getDaysInMonth(this.month-1, this.year),
        nextMonth = this.getDaysInMonth(this.month+1, this.year),
        weekDay = new Date(this.year, this.month, 1),
        prevMonthDays,
        nextMonthDays,
        currentMonthDays = Array.from({length: currentMonth}, (v, i) => i+1);
    let mapCurrentMonthDays = currentMonthDays.map((item)=>{
        return {
            day: item,
            month: this.month,
            year: this.year
        }
    });
    weekDay = weekDay.getDay();
    prevMonthDays = Array.from({length: prevMonth}, (v, i) => i+1);
    prevMonthDays = prevMonthDays.filter((item, index)=> index >= prevMonthDays.length-(weekDay?weekDay-1:6));
    let mapPrevMonthDays = prevMonthDays.map((item)=>{
        return {
            day: item,
            month: +`${this.month===0?11:this.month-1}`,
            year: +`${this.month===0?this.year-1:this.year}`
        }
    });
    nextMonthDays = Array.from({length: nextMonth}, (v, i) => i+1);
    nextMonthDays = nextMonthDays.filter((item, index)=> index < this.cells - (currentMonthDays.length + prevMonthDays.length));
    let mapNextMonthDays = nextMonthDays.map((item)=>{
        return {
            day: item,
            month: +`${this.month===11?0:this.month+1}`,
            year: +`${this.month===11?this.year+1:this.year}`
        }
    });
    this.daysToShow = mapPrevMonthDays.concat(mapCurrentMonthDays, mapNextMonthDays);
};

Calendar.prototype.nextMonth = function () {
    if(this.month<11){
        this.month+=1;
    }else if(this.month===11){
        this.month=0;
        this.year+=1;
    }
    this.render();
};

Calendar.prototype.prevMonth = function () {
    if(this.month>0&&this.month<=11){
        this.month-=1;
    }else if(this.month===0){
        this.month=11;
        this.year-=1;
    }
    this.render();
};

Calendar.prototype.getData = function () {
    fetch('data/data.json')
        .then(response => {
            return response.json();
        })
        .then(response => {
            this.data = response;
            this.render();
        })
        .catch( alert );
};

Calendar.prototype.selectDate = function (item) {
    let el = document.getElementById(`${item.id}`);
    el.classList.add("calendar__day--selected");
    if(item.getAttribute("data-event")){
        this.editEvent(item.id);
    }else {
        this.addEvent(item.id);

    }
};

Calendar.prototype.addEvent = function (date) {
    this.setEventRoot.classList.add("set-event--on");
    this.setEventRoot.innerHTML += this.eventTemplate({
        date: date
    })
};

Calendar.prototype.editEvent = function (id) {
    this.data.forEach((item)=>{
        if(item.id === id){
            this.setEventRoot.classList.add("set-event--on");
            this.setEventRoot.innerHTML += this.eventTemplate({
                event: item.event,
                date: item.id,
                members: item.members,
                description: item.description
            })
        }
    });
};

Calendar.prototype.removeEvent = function (id) {
    let el = document.getElementById(`${id}`);
    el.lastChild.innerHTML = "";
    this.setEventRoot.classList.remove("set-event--on");
    this.setEventRoot.innerHTML = "";
    this.data = this.data.filter((item)=> item.id !== id);
    this.render();
    this.outputData();
};

Calendar.prototype.setAppData = function (options) {
    let {event, date, members, description} = options,
        el = document.getElementById(`${date}`);
    this.setEventRoot.classList.remove("set-event--on");
    this.setEventRoot.innerHTML = "";
    if(event !== ""){
        if(!el.getAttribute("data-event")){
            this.data.push({
                event: event,
                id: date,
                members: members,
                description: description
            });
        }else{
            this.data = this.data.map((item)=>{
                if(item.id === date){
                    return {
                        event: event,
                        id: date,
                        members: members,
                        description: description
                    }
                }else{
                    return item;
                }
            });
        }
    }
    this.outputData();
};

Calendar.prototype.outputData = function () {
    this.app.querySelectorAll(".calendar__day").forEach((cell)=>{
        this.data.forEach((event)=>{
            if(cell.id === event.id){
                let el = document.getElementById(`${cell.id}`);
                el.setAttribute("data-event", "event");
                el.classList.add("calendar__day--event");
                el.lastElementChild.innerHTML = "";
                el.lastElementChild.innerHTML+= `
                <span class="event-info-main">${event.event?event.event:""}</span>
                <span class="event-info">${event.members?event.members:""}</span>
                <span class="event-info">${event.description?event.description:""}</span>
                `;
            }
        });

    })
};

Calendar.prototype.toggleSearchResOutput = function () {
    if(this.eventsToShow.length!==0){
        this.searchResOutput.classList.add("calendar__search-result--active");
    }else{
        this.searchResOutput.classList.remove("calendar__search-result--active");
    }
};


