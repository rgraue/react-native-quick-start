import { createSlice } from '@reduxjs/toolkit';

interface TodoSliceObject {
  id: string;
  name: string;
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [] as TodoSliceObject[],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log('addtodo', action);
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos.splice(state.todos.indexOf(action.payload.object), 1);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
