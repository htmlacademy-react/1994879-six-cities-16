import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../../services/api';
import { fetchNearOffers, fetchOffer, fetchOffers } from './thunk';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { AppThunkDispatch, extractActionsTypes } from '../../mock/mock-component';
import { State } from '../../hooks';
import { makeFakeInitState } from '../../mock/mock';
import { Endpoint } from '../../const';

describe('Offer thunk', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;
  const offerId = '123';

  beforeEach(() => {
    store = mockStoreCreator(makeFakeInitState());
  });

  it('fetch offers', async () => {
    mockAxiosAdapter.onGet(Endpoint.Offers).reply(200);

    await store.dispatch(fetchOffers());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchOffers.pending.type,
      fetchOffers.fulfilled.type,
    ]);
  });

  it('fetch offer by id', async () => {
    mockAxiosAdapter.onGet(`${Endpoint.Offers}/${offerId}`).reply(200);

    await store.dispatch(fetchOffer(offerId));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchOffer.pending.type,
      fetchOffer.fulfilled.type,
    ]);
  });

  it('fetch offer rejected', async () => {
    mockAxiosAdapter.onGet(`${Endpoint.Offers}/${offerId}`).reply(404, {
      errorType: 'COMMON_ERROR',
      message: `Offer with id ${offerId} not found.`
    });

    await store.dispatch(fetchOffer(offerId));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchOffer.pending.type,
      fetchOffer.rejected.type,
    ]);
  });

  it('fetch nearOffers', async () => {
    mockAxiosAdapter.onGet(`${Endpoint.Offers}/${offerId}/nearby`).reply(200);

    await store.dispatch(fetchNearOffers(offerId));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchNearOffers.pending.type,
      fetchNearOffers.fulfilled.type,
    ]);
  });

  it('fetch nearOffers 404', async () => {
    mockAxiosAdapter.onGet(`${Endpoint.Offers}/${offerId}/nearby`).reply(404, {
      errorType: 'COMMON_ERROR',
      message: `Offer with id ${offerId} not found.`
    });

    await store.dispatch(fetchNearOffers(offerId));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchNearOffers.pending.type,
      fetchNearOffers.rejected.type,
    ]);
  });
});
