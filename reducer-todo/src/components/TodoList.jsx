import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from './TodoForm';


const TodoList = () => {
  const [items, setItems] = useState([
    { item: "Learn about reducers", completed: false, id: Math.round(Math.random() * 100000) },
    { item: "Apply reducers", completed: false, id: Math.round(Math.random() * 100000) },
    { item: "Finish this project", completed: false, id: Math.round(Math.random() * 100000) },
  ]);

  const addItem = (item) =>{
      setItems([...items, item])
  }

  const setInfo = (taskID)=>{
    setItems(items.map(task=>{
        if (taskID === task.id){
            return {
                ...task,
                completed: !task.completed
            }
        }
        return task;
    }))
  }

  const clearCompleted = taskStatys =>{
      setItems(items.filter(task=>task.completed !== true))
  }

  return (
      <div className="content">
        <TodoForm addItem={addItem} clearCompleted={clearCompleted}/>

    <div className="todo-list">
      {items.map(item => {
        return <TodoItem info={item} key={item.id} setInfo={setInfo} />;
      })}
    </div>
      </div>
  );
};

export default TodoList;
