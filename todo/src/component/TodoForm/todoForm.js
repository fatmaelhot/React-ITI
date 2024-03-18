import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group container">
        <input type="text" value={task} onChange={handleChange} className="form-control" placeholder="Enter task..." />
        <button type="submit" className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
