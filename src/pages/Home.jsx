
import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import SearchBar from '../components/SearchBar';
import './Home.css';

const initialTasks = [
  {
    id: 1,
    text: 'Create ToDo using Reactjs',
    description: 'Create ToDo List using Reactjs for HELPSTiR Assessment',
    completed: false,
    timestamp: new Date().toLocaleString(),
   }
  
];

const Home = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [searchQuery, setSearchQuery] = useState('');

  const addTask = (text, description) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      description,
      completed: false,
      timestamp: new Date().toLocaleString(),
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, newText, newDescription) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, text: newText, description: newDescription, timestamp: new Date().toLocaleString() } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <h1>Todo List</h1>
      <SearchBar onSearch={handleSearch} />
      <TaskForm onAdd={addTask} />
      <TaskList
        tasks={filteredTasks}
        onUpdate={updateTask}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />
    </div>
  );
};

export default Home;
