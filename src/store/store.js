import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import usersReducer from "../slices/usersSlice";
import registrationReducer from "../slices/registrationSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    registration: registrationReducer,
  },
});
