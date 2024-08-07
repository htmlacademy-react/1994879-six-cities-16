import { createSlice } from '@reduxjs/toolkit';
import { Offer, OfferFull } from '../../types/offer';
import { fetchOffers, fetchOffer, fetchNearOffers } from './thunk';
import { FetchState } from '../type';
import { applyFavorite, fetchFavorites } from '../favorite-slice/thunk';
import { logout } from '../user-slice/thunk';
import { updateFavorites, updateOfferFavorites } from './utils';

export type InitialState = {
  offer: FetchState<OfferFull | undefined>;
  offers: FetchState<Offer[]>;
  nearOffers: FetchState<Offer[]>;
}

const initialState: InitialState = {
  offer: { entity: undefined, status: 'none' },
  offers: { entity: [], status: 'none' },
  nearOffers: { entity: [], status: 'none' },
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.offers.status = 'loading';
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers.entity = action.payload;
        state.offers.status = 'done';
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.offers.status = 'error';
      })
      .addCase(fetchOffer.pending, (state) => {
        state.offer.entity = undefined;
        state.offer.status = 'loading';
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer.entity = action.payload;
        state.offer.status = 'done';
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.offer.entity = undefined;
        state.offer.status = 'error';
      })
      .addCase(fetchNearOffers.pending, (state) => {
        state.nearOffers.status = 'loading';
      })
      .addCase(fetchNearOffers.fulfilled, (state, action) => {
        state.nearOffers.entity = action.payload;
        state.nearOffers.status = 'done';
      })
      .addCase(fetchNearOffers.rejected, (state) => {
        state.nearOffers.status = 'error';
      })
      .addCase(applyFavorite.fulfilled, (state, action) => {
        updateFavorites(state, action.payload);
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        updateOfferFavorites(state, action.payload);
      })
      .addCase(logout.fulfilled, (state) => {
        updateOfferFavorites(state, []);
      });
  }
});
