import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import usersReducer from "../slices/usersSlice";
import registrationReducer from "../slices/registrationSlice";

const customMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    users: usersReducer,
    registration: registrationReducer,
  },
  middleware: customMiddleware,
});
