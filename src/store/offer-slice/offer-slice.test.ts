import { OfferState, offersSlice } from './offer-slice';
import { FetchStatus } from '../type';
import { fetchNearOffers, fetchOffer, fetchOffers } from './thunk';
import { makeFakeOffer, makeFakeOfferFull, makeFakeOffers } from '../../mock/mock';
import { updateFavorites, updateOfferFavorites } from './utils';
import * as utils from './utils';
import { applyFavorite, FavoritePost, fetchFavorites } from '../favorite-slice/thunk';
import { logout } from '../user-slice/thunk';

describe('offersSlice reducer', () => {
  let initialState: OfferState;
  const pending: FetchStatus = 'loading';
  const rejected: FetchStatus = 'error';
  const fulfilled: FetchStatus = 'done';

  beforeEach(() => {
    initialState = offersSlice.getInitialState();
    vi.spyOn(utils, 'updateOfferFavorites');
    vi.spyOn(utils, 'updateFavorites');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('fetchOffers.pending', () => {
    const state = offersSlice.reducer(initialState, fetchOffers.pending);
    expect(state.offers.status).toBe(pending);
  });

  it('fetchOffers.fulfilled', () => {
    const exceptedOffers = makeFakeOffers();
    const state = offersSlice.reducer(initialState, fetchOffers.fulfilled(exceptedOffers, '', undefined));
    expect(state.offers.entity).toEqual(exceptedOffers);
    expect(state.offers.status).toBe(fulfilled);
  });

  it('fetchOffers.rejected', () => {
    const state = offersSlice.reducer(initialState, fetchOffers.rejected);
    expect(state.offers.status).toBe(rejected);
  });

  it('fetchOffer.pending', () => {
    const state = offersSlice.reducer(initialState, fetchOffer.pending);
    expect(state.offer.entity).toBeUndefined();
    expect(state.offer.status).toBe(pending);
  });

  it('fetchOffer.fulfilled', () => {
    const exceptedOffer = makeFakeOfferFull();
    const state = offersSlice.reducer(initialState, fetchOffer.fulfilled(exceptedOffer, '', ''));
    expect(state.offer.entity).toEqual(exceptedOffer);
    expect(state.offer.status).toBe(fulfilled);
  });

  it('fetchOffer.rejected', () => {
    const state = offersSlice.reducer(initialState, fetchOffer.rejected);
    expect(state.offer.entity).toBeUndefined();
    expect(state.offer.status).toBe(rejected);
  });

  it('fetchNearOffers.pending', () => {
    const state = offersSlice.reducer(initialState, fetchNearOffers.pending);
    expect(state.nearOffers.status).toBe(pending);
  });

  it('fetchNearOffers.fulfilled', () => {
    const exceptedOffers = makeFakeOffers();
    const state = offersSlice.reducer(initialState, fetchNearOffers.fulfilled(exceptedOffers, '', ''));
    expect(state.nearOffers.entity).toEqual(exceptedOffers);
    expect(state.nearOffers.status).toBe(fulfilled);
  });

  it('fetchNearOffers.rejected', () => {
    const state = offersSlice.reducer(initialState, fetchNearOffers.rejected);
    expect(state.nearOffers.status).toBe(rejected);
  });

  it('applyFavorite.fulfilled', () => {
    const offer = makeFakeOffer();
    const offerFull = {...makeFakeOfferFull(offer), isFavorite: false};
    const favorite = {...offerFull, isFavorite: true };
    const fakePost: FavoritePost = { offerId: favorite.id, status: favorite.isFavorite};
    const stateWithOffer: OfferState = {...initialState, offer: {entity: {...offerFull, isFavorite: false} , status: 'none'} };

    const state = offersSlice.reducer(stateWithOffer, applyFavorite.fulfilled(favorite, '', fakePost));
    expect(updateFavorites).toBeCalledTimes(1);
    expect(state.offer.entity?.isFavorite).toBe(true);
  });

  it('fetchFavorites.fulfilled', () => {
    const offers = makeFakeOffers();
    const favorites = offers.map((offer) => ({...offer, isFavorite: true}));
    const stateWithOffers: OfferState = {...initialState, offers: {entity: offers , status: 'none'} };

    const state = offersSlice.reducer(stateWithOffers, fetchFavorites.fulfilled(favorites, '', undefined));
    expect(updateOfferFavorites).toBeCalledTimes(1);
    expect(state.offers.entity).toEqual(favorites);
  });

  it('logout.fulfilled', () => {
    const offers = makeFakeOffers().map((offer) => ({...offer, isFavorite: true}));
    const stateWithOffers: OfferState = {...initialState, offers: {entity: offers , status: 'none'} };

    const state = offersSlice.reducer(stateWithOffers, logout.fulfilled(true, '', undefined));

    expect(updateOfferFavorites).toBeCalledTimes(1);
    expect(state.offers.entity?.find((offer) => offer.isFavorite)).toEqual(undefined);
  });
});
