// TodoApp.tsx
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="container mt-4">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <ul className="list-group mt-3">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onDelete={() => deleteTodo(index)} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
