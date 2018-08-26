import React from 'react';

const Input = (props) =>{
    return (
        <div className="header">
            <input type="text" className={'input'} placeholder={'Add to-do'} onKeyPress={(e)=>{
                if (e.key === 'Enter') {
                    props.addTodo(e.target.value);
                    e.target.value = '';
                }
            }}/>
        </div>
    );
};

export default Input;
