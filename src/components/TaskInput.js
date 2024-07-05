import React, { useState } from 'react';
import TaskList from './TaskList';
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  // ADD TASK 
  const onAddTaskHandler = () => {
    if (!task) {
      toast.warning("Please fill the input field.")
      return;
    }
    const todo = {
      id: Math.random().toString(),
      task: task,
      isCompleted: false
    };
    dispatch(addTodo(todo));
    setTask('');
    toast.success("Task added successfully.")
  };



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Todo Application</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
            onClick={onAddTaskHandler}
          >
            Add
          </button>
        </div>
        {/* TASKLIST COMPONENT */}
        <TaskList
        />
      </div>
    </div>
  )
}

export default TaskInput