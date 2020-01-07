import React, {useReducer} from 'react';
import {itemReducer, initialState} from '../reducer/itemReducer';


const TodoItem = ({info}) =>{
    const [state, dispatch] = useReducer(itemReducer, initialState)
    return (
        <div className={`todo-item ${state.completed ? 'todo-item-completed' : ''}`}>
            <h1 onClick={()=>{dispatch({type: "COMPLETE"})}}>{info.item}</h1>
        </div>
    )
}

export default TodoItem