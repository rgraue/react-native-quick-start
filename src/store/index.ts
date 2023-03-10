import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todo.slice';

export * from './todo.slice';

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
