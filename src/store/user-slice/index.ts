import { userSlice } from './user-slice';

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
