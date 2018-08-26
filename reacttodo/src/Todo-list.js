import React from 'react';
import './App.css';
import DestroyButton from './Destroy-button';
import Checkbox from './Checkbox'

const TodoList = (props) =>{
    return <li id={props.id} className={`todo ${props.complete} ${props.visibility}`}>
        <Checkbox id={props.id} completeTodo={props.completeTodo} checked={props.checked}/>
        <span>{props.title}</span>
        <DestroyButton id={props.id} delTodo = {props.delTodo}/>
        </li>
};

export default TodoList;