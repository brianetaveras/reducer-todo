import React, {useReducer, useState} from 'react';
import {itemReducer, initialState} from '../reducer/itemReducer';


const TodoItem = ({info, setInfo}) =>{
    const [state, dispatch] = useReducer(itemReducer, initialState);
    return (
        <div className={`todo-item ${state.completed ? 'todo-item-completed' : ''}`}>
            <h1 onClick={()=>{
                setInfo(info.id)
                dispatch({type: "COMPLETE", payload: info.completed})
                
                }}>{info.item}</h1>
        </div>
    )
}

export default TodoItem