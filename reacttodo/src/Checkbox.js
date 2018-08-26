import React from 'react';

const Checkbox = (props) =>{
    return (
        <input id={props.id}
               className={'todo-checkbox'}
               type="checkbox"
               checked={props.checked}
               onChange={()=>{}}
               onClick={(e)=>{
            props.completeTodo(e.target.id, e.target.checked);
        }}/>
    );
};

export default Checkbox;