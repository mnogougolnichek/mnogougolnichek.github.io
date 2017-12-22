"use strict";

let STORAGE_KEY = 'myVueTodo'

let todoStorage = {
    fetch: function () {
        let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        todos.forEach(function (todo, index) {
            todo.id = index
        })
        todoStorage.uid = todos.length
        return todos

    },
    save: function (todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
}

let app6 = new Vue({
    el: '#app-6',
    data: {
        todos: todoStorage.fetch(),
        message: '',
        todoStatus: false
    },

    watch: {
        todos: {
            handler: function (todos) {
                todoStorage.save(todos)
            },
            deep: true
        }
    },



    methods: {
        addTodo () {
            if(this.message.replace(/\s/g,"") === ""){
                return false
            }
            this.todos.push({
                text:this.message,
                id: todoStorage.uid++,
                //completed: false
            })
            this.message= ""
        },
        deleteTodo (todo) {
                swal({
                        title: "Are you sure?",
                        text: "You will not be able to recover this todo file!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: '#DD6B55',
                        confirmButtonText: 'Yes, delete it!',
                        cancelButtonText: "No, cancel!",
                        closeOnConfirm: false,
                        closeOnCancel: true
                    },
                    (isConfirm)=>{
                        if (!isConfirm) return;
                            console.log(this);
                            this.todos.splice(this.todos.indexOf(todo), 1);
                            swal({title:"Deleted!",text: "Your todo has been deleted!",type: "success",timer: 5000});
                    }
                    );

        },
    }

})

