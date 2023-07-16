import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();

    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: Date.now(),
        title: newTask,
        completed: false,
      };

      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleTaskToggle = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center">
      <div className="border-4 max-w-[400px] mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Todo List</h1>

        <form onSubmit={handleTaskSubmit} className="mb-4">
          <input
            type="text"
            value={newTask}
            onChange={handleTaskChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            placeholder="Add a new task..."
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-2"
          >
            Add Task
          </button>
        </form>

        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center justify-between py-2 border-b ${task.completed ? 'text-gray-400' : ''
              }`}
          >
            <div
              className={`cursor-pointer ${task.completed ? 'line-through' : ''}`}
              onClick={() => handleTaskToggle(task.id)}
            >
              {task.title}
            </div>
            <button
              onClick={() => handleTaskDelete(task.id)}
              className="text-red-500 hover:text-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
