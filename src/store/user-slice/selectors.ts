import { createSelector } from 'reselect';
import { State } from '../../hooks';
import { AuthorizationStatus } from '../../const';

export const getAuthorizationStatus = (state: State) => state.user.authorizationStatus;
export const getUser = (state: State) => state.user.user;
export const getUserInfo = createSelector(
  [
    (state: State) => state.user
  ],
  (userState) => ({
    isLogged: userState.authorizationStatus === AuthorizationStatus.Auth,
    email: userState.user?.email
  })
);
