import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../../services/api';
import { checkLogin, login, logout } from './thunk';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { AppThunkDispatch, extractActionsTypes } from '../../mock/mock-component';
import { State } from '../../hooks';
import { makeFakeInitState } from '../../mock/mock';
import { Endpoint } from '../../const';
import * as tokenStorage from '../../services/token';
import { LoginEntity } from '../../types/user';
import { fetchFavorites } from '../favorite-slice/thunk';

describe('User thunk', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;
  const loginEntity: LoginEntity = { email: 'test@test.ru', password: '123456' };

  beforeEach(() => {
    store = mockStoreCreator(makeFakeInitState());
  });

  it('check login response 200', async () => {
    mockAxiosAdapter.onGet(Endpoint.Login).reply(200);

    await store.dispatch(checkLogin());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      checkLogin.pending.type,
      fetchFavorites.pending.type,
      checkLogin.fulfilled.type,
    ]);
  });

  it('check login response 401', async () => {
    mockAxiosAdapter.onGet(Endpoint.Login).reply(401);

    await store.dispatch(checkLogin());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      checkLogin.pending.type,
      checkLogin.rejected.type,
    ]);
  });

  it('login', async() => {
    mockAxiosAdapter.onPost(Endpoint.Login).reply(200, { token: 'secret' });

    await store.dispatch(login(loginEntity));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      login.pending.type,
      fetchFavorites.pending.type,
      login.fulfilled.type,
    ]);
  });

  it('login response 400', async() => {
    mockAxiosAdapter.onPost(Endpoint.Login).reply(400, { token: 'secret' });

    await store.dispatch(login(loginEntity));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      login.pending.type,
      login.rejected.type,
    ]);
  });

  it('should call "saveToken" once with the received token', async () => {
    const fakeServerReplay = { token: 'secret' };
    mockAxiosAdapter.onPost(Endpoint.Login).reply(201, fakeServerReplay);
    const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

    await store.dispatch(login(loginEntity));

    expect(mockSaveToken).toBeCalledTimes(1);
    expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
  });

  it('logout response 204', async() => {
    mockAxiosAdapter.onDelete(Endpoint.Login).reply(204);

    await store.dispatch(logout());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      logout.pending.type,
      logout.rejected.type,
    ]);
  });
});
