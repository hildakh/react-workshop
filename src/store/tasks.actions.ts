import { createAsyncThunk } from "@reduxjs/toolkit";
import { TaskType } from "../types/Task.type";

export const fetchTaskList = createAsyncThunk<TaskType[], void>(
  'FETCH_TASK_LIST',

  async () => {
    try {
      const response = await fetch('https://api.jsonbin.io/v3/b/66421991ad19ca34f868d939');
      const data = await response.json();

      return data.record.tasks as TaskType[];
    } catch (error: any) {
      return error;
    }
  }
)
