import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/User.type";

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
  reducers: {
    fetchCurrentuser: (state) => {
      state.isLoading = true;
    },
    setCurrentUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    setIsLoading: (state) => {
      state.isLoading = true;
    }
  },
});

export const { setCurrentUser, setIsLoading } = currentUserSlice.actions;

export default currentUserSlice.reducer;
