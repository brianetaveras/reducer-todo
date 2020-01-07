import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from './TodoForm';


const TodoList = () => {
  const [items, setItems] = useState([
    { item: "Learn about reducers", completed: false, id: Math.round(Math.random() * 100000) },
    { item: "Learn about reducers", completed: false, id: Math.round(Math.random() * 100000) },
    { item: "Learn about reducers", completed: false, id: Math.round(Math.random() * 100000) },
  ]);

  const addItem = (item) =>{
      setItems([...items, item])
  }

  return (
      <div className="content">
        <TodoForm addItem={addItem}/>

    <div className="todo-list">
      {items.map(item => {
        return <TodoItem info={item} key={item.id} />;
      })}
    </div>
      </div>
  );
};

export default TodoList;
