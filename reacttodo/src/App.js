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
            todos: []
        };
        this.storageKey = 'ReactTodo';
    }

    saveData = () => {
        localStorage.setItem(this.storageKey, JSON.stringify(this.state.todos));
    };

    setData = () => {
        if(localStorage.getItem(this.storageKey) !== null){
            const arr = JSON.parse(localStorage.getItem(this.storageKey));
            this.setState({todos: arr});
        }
    };

    componentWillMount(){
        this.setData();
    }

    componentWillUpdate(){
        this.saveData();
    }

    addTodo = (text) => {
        this.setState((prevState)=>({
            todos: [...prevState.todos, {
                title: text,
                complete: false,
                id: Date.now()
            }]
        }));

    };

    delTodo = (id) => {
        this.state.todos.forEach((todo)=>{
            if(+id === todo.id){
                let filteredArray = this.state.todos.filter(item => item.id !== +id);
                this.setState({todos: filteredArray});
            }
        });
    };

    completeTodo = (id, value) => {
        let mapArray = this.state.todos.map((item) => {
            if(+id === item.id){
                item.complete = value;
            }
            return item;
        });
        this.setState({todos: mapArray});
    };

    switchTab = (e) =>{
        this.setState({tab: e.id});
    };

    render() {
    return (
        <div className="App">
            <header className="header">
                <Input addTodo = {this.addTodo}/>
            </header>
            <section className="main">
                <ul>{
                    this.state.todos.map((todo, index)=>{
                        let status = true;
                        if(this.state.tab === 'active'){
                            status = !todo.complete;
                        }else if(this.state.tab === 'completed'){
                            status = todo.complete;
                        }
                        const complete = todo.complete? 'complete' : '' ;
                        const visibility = status? '' : 'hidden' ;
                        return  <TodoList
                            id={this.state.todos[index].id}
                            key = {index}
                            title = {todo.title}
                            complete = {complete}
                            checked = {todo.complete}
                            visibility = {visibility}
                            delTodo = {this.delTodo}
                            completeTodo = {this.completeTodo}
                        />
                    })
                }
                </ul>
            </section>
            <Footer
                switchTab={this.switchTab}
            />
        </div>
      );
    }
}

export default App;
