import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./currentUser.slice";
import taskListReducer from "./tasks.slice";

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    taskList: taskListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
