
import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onUpdate, onDelete, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTaskChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleEditSave = () => {
    onUpdate(task.id, editedTask, editedDescription);
    setIsEditing(false);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-header">
        {isEditing ? (
          <div className="edit-container">
            <input
              type="text"
              value={editedTask}
              onChange={handleTaskChange}
              className="edit-input"
              placeholder="Task Name"
            />
            <textarea
              value={editedDescription}
              onChange={handleDescriptionChange}
              className="edit-description"
              placeholder="Description"
            />
          </div>
        ) : (
          <span className="task-text" onClick={() => onToggle(task.id)}>
            {task.text}
          </span>
        )}
        <div className="task-actions">
          {isEditing ? (
            <button onClick={handleEditSave} className="save-button">Save</button>
          ) : (
            <>
              <button onClick={toggleExpand} className="expand-button">
                {isExpanded ? 'Collapse' : 'Expand'}
              </button>
              <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
              <button onClick={() => onDelete(task.id)} className="delete-button">Delete</button>
            </>
          )}
        </div>
      </div>
      {isExpanded && !isEditing && (
        <div className="task-details">
          <div className="task-timestamp">Last updated: {task.timestamp}</div>
          <div className="task-description">{task.description}</div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
