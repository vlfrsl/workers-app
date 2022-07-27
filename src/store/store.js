import { configureStore } from '@reduxjs/toolkit';
import workersReducer from "../slices/workersSlice";

export const store = configureStore({
  reducer: {
    workers: workersReducer,
  },
});
