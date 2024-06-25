import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    console.log(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
      console.log(updatedTasks);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-slate-200 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
        To Do List
      </h1>

      <div className="flex mb-4">
        <input
          className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleInputChange}
          value={newTask}
          placeholder="Add New Task"
          type="text"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ol className="list-decimal pl-5 space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-2 bg-gray-100 rounded-md shadow-sm"
          >
            <span className="text-gray-800">{task}</span>
            <div className="flex space-x-2">
              <button
                className="px-2 py-1 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button
                className="px-2 py-1 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                onClick={() => moveTaskUp(index)}
              >
                Up
              </button>
              <button
                className="px-2 py-1 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                onClick={() => moveTaskDown(index)}
              >
                Down
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
