import {configureStore} from '@reduxjs/toolkit';

// export all from context and slice index file
export * from './context';
export * from './slices';

// Note create and import slices to add to reduce.

export const store = configureStore({
  reducer: {},
});
