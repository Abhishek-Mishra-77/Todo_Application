import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  editModal: false
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeTask: (state, action) => {
      state.todos = state.todos.filter((task) => task.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      const { id, isCompleted } = action.payload;
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, task: action.payload.task, isCompleted: isCompleted };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
      state.editModal = !state.editModal;
    },
    modalHandle: (state, action) => {
      state.editModal = !state.editModal;
    },
    taskStatus: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
    }
  },
});

export const { addTodo, removeTask, editTodo, modalHandle, taskStatus } = todoSlice.actions;

export default todoSlice.reducer;
