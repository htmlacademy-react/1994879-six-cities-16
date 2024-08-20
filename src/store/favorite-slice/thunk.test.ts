import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../../services/api';
import { fetchFavorites, applyFavorite } from './thunk';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { AppThunkDispatch, extractActionsTypes } from '../../mock/mock-component';
import { State } from '../../hooks';
import { makeFakeInitState } from '../../mock/mock';
import { Endpoint } from '../../const';

describe('Favorite thunk', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;
  const offerId = '123';
  const isFavorite = false;

  beforeEach(() => {
    store = mockStoreCreator(makeFakeInitState());
  });

  it('fetch favorites', async () => {
    mockAxiosAdapter.onGet(Endpoint.Favorite).reply(200);

    await store.dispatch(fetchFavorites());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchFavorites.pending.type,
      fetchFavorites.fulfilled.type,
    ]);
  });

  it('fetch favorites response 401', async () => {
    mockAxiosAdapter.onGet(Endpoint.Favorite).reply(401);

    await store.dispatch(fetchFavorites());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchFavorites.pending.type,
      fetchFavorites.rejected.type,
    ]);
  });

  it('post favorite', async () => {
    const expectedResult = { offerId: offerId, status: !isFavorite };
    mockAxiosAdapter.onPost(`${Endpoint.Favorite}/${offerId}/${Number(isFavorite)}`).reply(201, expectedResult);

    const response = await store.dispatch(applyFavorite({ offerId: offerId, status: isFavorite }));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      applyFavorite.pending.type,
      applyFavorite.fulfilled.type,
    ]);
    expect(response.payload).toEqual(expectedResult);
  });

  it('post comments with reject', async () => {
    mockAxiosAdapter.onPost(`${Endpoint.Favorite}/${offerId}/${Number(isFavorite)}`).reply(404, {
      errorType: 'COMMON_ERROR',
      message: `Offer with id ${offerId} not found.`
    });

    await store.dispatch(applyFavorite({ offerId: offerId, status: isFavorite }));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      applyFavorite.pending.type,
      applyFavorite.rejected.type,
    ]);
  });
});
