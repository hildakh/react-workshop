import { TaskType } from "../types/Task.type";
import { createSlice } from "@reduxjs/toolkit";

interface TaskListState {
  tasks: TaskType[];
  isLoading: boolean;
  error: string | null;
}

const initialTaskListState: TaskListState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const taskListSlice = createSlice({
  name: 'taskList',
  initialState: initialTaskListState,
  reducers: {
    fetchTasks: (state) => {
      state.isLoading = true;
    },
    setTaskList: (state, action) => {
      state.tasks = action.payload;
      state.isLoading = false;
    },
  },
});

export const { fetchTasks, setTaskList } = taskListSlice.actions;
export default taskListSlice.reducer;
