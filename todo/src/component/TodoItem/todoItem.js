import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li className={`list-group-item mx-5 d-flex justify-content-between ${todo.completed ? 'text-decoration-line-through' : ''}`}>
      <span onClick={handleToggle}>{todo.text}</span>
      <button onClick={handleDelete} className="btn btn-danger ms-2">Delete</button>
    </li>
  );
};

export default TodoItem;
