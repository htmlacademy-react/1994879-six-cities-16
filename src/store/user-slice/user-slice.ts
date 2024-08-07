import { createSlice } from '@reduxjs/toolkit';
import { LoggedUser } from '../../types/user';
import { AuthorizationStatus } from '../../const';
import { checkLogin, logout, login } from './thunk';
import { dropToken, saveToken } from '../../services/token';

export type UserState = {
  user: LoggedUser | undefined;
  authorizationStatus: AuthorizationStatus;
}

const initialState: UserState = {
  user: undefined,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkLogin.fulfilled, (state, action) => {
        saveToken(action.payload.token);
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkLogin.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(checkLogin.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(login.fulfilled, (state, action) => {
        saveToken(action.payload.token);
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(login.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
        dropToken();
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        dropToken();
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = undefined;
      });
  }
});
