import { TaskType } from "../types/Task.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchTaskList } from "./tasks.actions";

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTaskList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTaskList.fulfilled, (state, action: PayloadAction<TaskType[]>) => {
      state.isLoading = false;
      state.tasks = action.payload;
    });
    builder.addCase(fetchTaskList.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export default taskListSlice.reducer;
