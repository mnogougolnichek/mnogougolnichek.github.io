"use strict";

(()=>{
    document.addEventListener("DOMContentLoaded",main);

    function main() {

        function Controller(){
            this.events = [
                'click',
                'keydown'
            ];
        }

        Controller.prototype.init = function(options){
            const {model, view} = options;
            this.model = model;
            this.view = view;
            this.follow();
            model.setData();
            view.renderTodo(model.todos);
            return this;
        };

        Controller.prototype.follow = function(){
            let {model, view} =  this;
            for(let item of this.events){
                view.app.addEventListener(item, (event) => {
                    if(event.target === view.input && event.code === "Enter"){
                        this.model.getData({
                            text : view.input.value,
                            id :  Date.now(),
                            completed: '',
                            checked: '',
                            visibility: ''
                        });
                        view.clearInput();
                    }
                    view.app.querySelectorAll('.js-todo').forEach((item) => {
                        if(event.target === item.querySelector('.js-del-btn')){
                            console.log(event.target);
                            model.delItem(event.target.parentNode);
                        }
                        if(event.target === item.querySelector('.js-todo-checkbox')){
                            model.completeTodo (event.target.parentNode, event.target);
                        }
                    });
                    model.changeTab(event.target);
                    view.changeTab(model.activeTab);
                    model.setVisibility();
                    model.saveData();
                    view.renderTodo(model.todos);
                });
            }
        };

        function Model() {
            this.storageKey = 'vanillaTodo';
            this.todos = [];
            this.activeTab = "all";
            this.tabs = {
                all : "all",
                active : "active",
                completed : "completed"
            };
        }

        Model.prototype.setData = function () {
            if(localStorage.getItem(this.storageKey) !== null){
                this.todos = JSON.parse(localStorage.getItem(this.storageKey));
            }
        };

        Model.prototype.saveData = function () {
            localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
            console.log(localStorage.getItem('vanillaTodo'));
        };

        Model.prototype.getData = function (data) {
            if(data.text !== "") this.todos.push(data);
        };

        Model.prototype.delItem = function (el) {
            this.todos.forEach((item, index) => {
                if(item !== undefined && item !== null){
                    if(item.id === +el.id){
                        //delete this.todos[index];
                        this.todos.splice(index, 1);
                    }
                }
            });
        };

        Model.prototype.completeTodo = function (el) {
            this.todos.forEach((item, index) => {
                if(item !== undefined && item !== null){
                    if(item.id === +el.id){
                        if(item.checked === ''){
                            this.todos[index].checked = 'checked';
                            this.todos[index].completed = 'completed';
                        }else{
                            this.todos[index].checked = '';
                            this.todos[index].completed = '';
                        }
                    }
                }
            });
        };

        Model.prototype.changeTab = function (trigger) {
            if(trigger.id === this.tabs.all){
                this.activeTab = this.tabs.all;
            }else if(trigger.id === this.tabs.active){
                this.activeTab = this.tabs.active;
            }else if(trigger.id === this.tabs.completed){
                this.activeTab = this.tabs.completed;
            }
        };

        Model.prototype.setVisibility = function () {
            for(let item of this.todos){
                if(item !== undefined && item !== null){
                    if(this.activeTab === this.tabs.active){
                        if(item.checked !== ''){
                            item.visibility = 'hidden';
                        }else{
                            item.visibility = '';
                        }
                    }else if(this.activeTab === this.tabs.completed){
                        if(item.checked === ''){
                            item.visibility = 'hidden';
                        }else{
                            item.visibility = '';
                        }
                    }else if(this.activeTab === this.tabs.all){
                        item.visibility = '';
                    }
                }
            }
        };

        function View(app) {
            this.app = app;
            this.input = app.querySelector('.js-app-input');
            this.todoList = app.querySelector('.js-todo-list');
            this.tabs = app.querySelectorAll('.footer-btn');
        }

        View.prototype.template = function (options) {
            let {id, data, checked, completed, visibility} = options;
            return `<li id="${id}" class="js-todo todo ${visibility}">
        <input type="checkbox" class="js-todo-checkbox todo-checkbox" ${checked}>
        <label class="${completed}">${data}</label>
        <button class="js-del-btn del-btn btn"></button>
    </li>`;
        };

        View.prototype.renderTodo = function (data, i, j = "") {
            this.todoList.innerHTML = "";
            data.forEach((item) => {
                if(item !== undefined && item !== null){
                    i = this.template({
                        id : item.id,
                        data : item.text,
                        checked : item.checked,
                        completed : item.completed,
                        visibility : item.visibility
                    });
                    j += i;
                }
            });
            for(let item of this.todoList.children) item.remove();
            this.todoList.innerHTML = j;
        };

        View.prototype.changeTab = function (activeTab) {
            for(let item of this.tabs){

                if(activeTab === item.id){
                    item.classList.add('active-tab');
                }else{
                    item.classList.remove('active-tab');
                }
            }
        };

        View.prototype.clearInput = function () {
            this.input.value = "";
        };


        let app = document.querySelector('.js-app'),
            controller = new Controller(),
            model = new Model(),
            view = new View(app);

        controller.init({
            model: model,
            view: view
        });
    }
})();
