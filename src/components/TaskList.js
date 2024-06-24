import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, modalHandle } from '../store/todoSlice';
import EditModal from './EditModal';

const TaskList = () => {
    const [editTask, setEditTask] = useState(null)
    const dispatch = useDispatch();
    const { todos } = useSelector((state) => state.todo);

 
    return (
        <div>
            <ul className="space-y-3">
                {todos?.map((task) => (
                    <li
                        key={task.id}
                        className="bg-gray-100 p-3 rounded-lg flex justify-between items-center shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <span className="flex-grow">{task.task}</span>
                        <button
                            onClick={() => dispatch(removeTask(task.id))}
                            className="text-red-500 hover:text-red-700 ml-2"
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => {
                                setEditTask(task)
                                dispatch(modalHandle())
                            }}
                            className="text-blue-500 hover:text-blue-700 ml-2"
                        >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>

            {/* EditModal  */}

            <EditModal 
              setEditTask={setEditTask}
              editTask={editTask}
            />

        </div>
    )
}

export default TaskList