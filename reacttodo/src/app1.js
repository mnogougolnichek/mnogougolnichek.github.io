import React, { Component } from 'react';
import './App.css';
import TodoList from './Todo-list';
import Input from './Input';
import Footer from './Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'all',
            todos: [
                {
                    title: "Learn react",
                    complete: false,
                    id: 0
                },
                {
                    title: "Learn Vue",
                    complete: true,
                    id: 1
                }
            ]
        };
        this.visibility = '';
    }

    addTodo = (text) => {
        this.setState((prevState)=>({
            todos: [...prevState.todos, {
                title: text,
                complete: false,
                id: Date.now()
            }]
        }));
        console.log(this.state.todos);
    };

    delTodo = (el) => {
        this.state.todos.map((todo)=>{
            if(+el === todo.id){
                let filteredArray = this.state.todos.filter(item => item.id !== +el);
                this.setState({todos: filteredArray});
            }
        });
    };

    completeTodo = (id, value) => {
        let mapArray = this.state.todos.map((item) => {
            if(+id === item.id){
                console.log(item);
                item.complete = value;
            }
            return item;
        });
        this.setState({todos: mapArray});
    };

    switchTab = (e) =>{
        this.setState({tab: e.id},()=>{
            console.log(this.state.tab);
        });

    };

    componentWillUpdate() {
        console.log("update");
    }

    render() {
        return (
            <div className="App">
                <Input addTodo = {this.addTodo}/>
                <ul>{
                    this.state.todos.map((todo, index)=>{
                        let i=true;
                        if(this.state.tab === 'active'){
                            if(todo.complete){
                                i = false;
                                console.log(todo.complete)
                            }else{
                                i = true;
                            }
                        }else if(this.state.tab === 'completed'){
                            if(todo.complete){
                                i = true;
                            }else{
                                i = false;
                            }
                        }
                        const complete = todo.complete? 'complete' : '' ;
                        const visibility = i? '' : 'hidden' ;
                        return  <TodoList
                            id={this.state.todos[index].id}
                            key = {index}
                            title = {todo.title}
                            complete = {complete}
                            visibility = {visibility}
                            delTodo = {this.delTodo}
                            completeTodo = {this.completeTodo}
                        />
                    })
                }
                </ul>
                <Footer
                    switchTab={this.switchTab}
                />
            </div>
        );
    }
}

export default App;
