import { favoriteSlice, InitialState } from './favorite-slice';
import { fetchFavorites, applyFavorite, FavoritePost } from './thunk';
import { logout } from '../user-slice/thunk';
import { makeFakeOffer, makeFakeOffers } from '../../mock/mock';
import { FetchStatus } from '../type';
import { Offer } from '../../types/offer';

describe('favoriteSlice reducer', () => {
  const initialState = favoriteSlice.getInitialState();

  it('initial state', () => {
    expect(favoriteSlice.reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('fetchFavorites pending', () => {
    const status: FetchStatus = 'loading';
    const state = favoriteSlice.reducer(undefined, fetchFavorites.pending);
    expect(state.offers.status).toBe(status);
  });

  it('fetchFavorites fulfilled', () => {
    const offers = makeFakeOffers();
    const status: FetchStatus = 'done';

    const state = favoriteSlice.reducer(undefined, fetchFavorites.fulfilled(offers, '', undefined));
    expect(state.offers.entity).toBe(offers);
    expect(state.offers.status).toBe(status);
  });

  it('fetchFavorites rejected', () => {
    const status: FetchStatus = 'error';
    const state = favoriteSlice.reducer(undefined, fetchFavorites.rejected);
    expect(state.offers.status).toBe(status);
  });

  it('applyFavorite pending', () => {
    const status: FetchStatus = 'loading';
    const state = favoriteSlice.reducer(undefined, applyFavorite.pending);
    expect(state.offer.status).toBe(status);
  });

  it('applyFavorite fulfilled, add to favorites', () => {
    const resultIsFavorite = true;
    const offer: Offer = {...makeFakeOffer(), isFavorite: resultIsFavorite};
    const sliceState: InitialState = {
      offer: {entity: undefined, status: 'none'},
      offers: {entity: [], status: 'none'}
    };
    const status: FetchStatus = 'done';
    const fakePost: FavoritePost = {
      offerId: offer.id,
      status: resultIsFavorite,
    };

    const state = favoriteSlice.reducer(sliceState, applyFavorite.fulfilled(offer, '', fakePost));

    expect(state.offers.entity).toEqual([offer]);
    expect(state.offer.entity).toBe(offer);
    expect(state.offer.status).toBe(status);
  });

  it('applyFavorite fulfilled, remove from favorites', () => {
    const resultIsFavorite = false;
    const offer: Offer = {...makeFakeOffer(), isFavorite: resultIsFavorite};
    const sliceState: InitialState = {
      offer: {entity: undefined, status: 'none'},
      offers: {entity: [{...offer, isFavorite: !offer.isFavorite}], status: 'none'}
    };
    const status: FetchStatus = 'done';
    const fakePost: FavoritePost = {
      offerId: offer.id,
      status: resultIsFavorite,
    };

    const state = favoriteSlice.reducer(sliceState, applyFavorite.fulfilled(offer, '', fakePost));

    expect(state.offers.entity).toEqual([]);
    expect(state.offer.entity).toBe(offer);
    expect(state.offer.status).toBe(status);
  });

  it('applyFavorite rejected', () => {
    const status: FetchStatus = 'error';
    const state = favoriteSlice.reducer(undefined, applyFavorite.rejected);
    expect(state.offer.status).toBe(status);
  });

  it('logout fulfilled', () => {
    const status: FetchStatus = 'none';
    const state = favoriteSlice.reducer(initialState, logout.fulfilled);
    expect(state.offer).toEqual({ entity: undefined, status });
    expect(state.offers).toEqual({ entity: [], status });
  });
});
