import { userSlice, UserState } from './user-slice';
import { AuthorizationStatus } from '../../const';
import { LoggedUser, LoginEntity } from '../../types/user';
import { checkLogin, login, logout } from './thunk';
import { makeFakeUserWithEmail } from '../../mock/mock';

describe('userSlice reducer', () => {
  const initialState = userSlice.getInitialState();

  it('Should return initial state', () => {
    expect(userSlice.reducer(undefined, { type: ''})).toEqual(initialState);
  });

  it('checkLogin.fulfilled', () => {
    const user: LoggedUser = makeFakeUserWithEmail();

    const state = userSlice.reducer(initialState, checkLogin.fulfilled(user, '', undefined));
    expect(state).toEqual({
      user,
      authorizationStatus: AuthorizationStatus.Auth,
    });
  });

  it('checkLogin.rejected', () => {
    const state = userSlice.reducer(initialState, checkLogin.rejected);
    expect(state).toEqual({
      user: undefined,
      authorizationStatus: AuthorizationStatus.NoAuth
    });
  });

  it('login.fulfilled', () => {
    const user: LoggedUser = makeFakeUserWithEmail();
    const loginEntity: LoginEntity = {email: user.email, password: 'password'};

    const state = userSlice.reducer(initialState, login.fulfilled(user, '', loginEntity));
    expect(state).toEqual({
      user,
      authorizationStatus: AuthorizationStatus.Auth});
  });

  it('login.rejected', () => {
    const state = userSlice.reducer(initialState, login.rejected);
    expect(state).toEqual({
      user: undefined,
      authorizationStatus: AuthorizationStatus.NoAuth
    });
  });

  it('logout.fulfilled', () => {
    const userState: UserState = { user: makeFakeUserWithEmail(), authorizationStatus: AuthorizationStatus.Auth };
    const state = userSlice.reducer(userState, logout.fulfilled(true, '', undefined));
    expect(state).toEqual({
      user: undefined,
      authorizationStatus: AuthorizationStatus.NoAuth,
    });
  });
});
