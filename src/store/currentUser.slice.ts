import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/User.type";
import { fetchCurrentUser } from "./currentUser.actions";

interface CurrentUserState {
  user : UserType;
  isLoading: boolean;
  error: string | null;
}

export const currentUserInitialState: CurrentUserState = {
  user: {
    firstName: '',
    lastName: '',
  },
  isLoading: false,
  error: null,
};

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: currentUserInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action: PayloadAction<UserType>) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchCurrentUser.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export default currentUserSlice.reducer;
