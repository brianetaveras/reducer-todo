import React from 'react';
import './App.css';
import Title from './components/Title';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="app-container">
      <Title/>
      <TodoList/>
      </div>
    </div>
  );
}

export default App;
