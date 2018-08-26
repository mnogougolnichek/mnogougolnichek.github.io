import React from 'react';
import './App.css';

const DestroyButton = (props) =>{
    return <button id={props.id} className ="del-btn btn" onClick={(e)=>{
        props.delTodo(e.target.id);
    }
    }> </button>
};

export default DestroyButton;