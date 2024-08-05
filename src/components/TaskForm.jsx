import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text, description);
      setText('');
      setDescription('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Task"
        className="task-input"
      />
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Description"
        className="task-description"
      />
      <button type="submit" className="add-button">Add Task</button>
    </form>
  );
};

export default TaskForm;
