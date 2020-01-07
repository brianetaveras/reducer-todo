import React, { useState, useReducer } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [items, setItems] = useState([
    { item: "Learn about reducers", completed: false, id: Math.round(Math.random() * 100000) },
    { item: "Learn about reducers", completed: false, id: Math.round(Math.random() * 100000) },
    { item: "Learn about reducers", completed: false, id: Math.round(Math.random() * 100000) },
  ]);

  return (
    <div className="todo-list">
      {items.map(item => {
        return <TodoItem info={item} key={item.id} />;
      })}
    </div>
  );
};

export default TodoList;
