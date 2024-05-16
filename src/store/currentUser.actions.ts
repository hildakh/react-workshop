import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "../types/User.type";

export const fetchCurrentUser = createAsyncThunk<UserType, void>(
  'FETCH_CURRENT_USER',

  async () => {
    try {
      const response = await fetch('https://api.jsonbin.io/v3/b/66428a86ad19ca34f8690736');
      const data = await response.json();

      const { user } = data.record;
      const transformedUser = {
        firstName: user.first_name,
        lastName: user.last_name,
      };

      return transformedUser;
    } catch (error: any) {
      return error;
    }
  }
)
