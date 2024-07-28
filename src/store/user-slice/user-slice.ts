import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoggedUser } from '../../types/user';

export type UserState = {
  user: LoggedUser | undefined;
}

const initialState: UserState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoggedUser | undefined>) => {
      state.user = action.payload;
    },
    logout(state) {
      state.user = undefined;
    },
  },
});
