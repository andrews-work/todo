import React from 'react';

interface TodoItemProps {
  todo: string;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <li className="list-group-item">
      {todo}
      <button className="btn btn-danger btn-sm float-right" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;