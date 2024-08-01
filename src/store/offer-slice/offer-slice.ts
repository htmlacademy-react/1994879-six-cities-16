import { createSlice } from '@reduxjs/toolkit';
import { Offer, OfferFull } from '../../types/offer';
import { fetchOffers, fetchOffer, fetchNearOffers } from './thunk';
import { StateLoading } from '../type';

export type InitialState = {
  offer: StateLoading<OfferFull | undefined>;
  offers: StateLoading<Offer[]>;
  nearOffers: StateLoading<Offer[]>;
}

const initialState: InitialState = {
  offer: { value: undefined, loading: false },
  offers: { value: [], loading: false },
  nearOffers: { value: [], loading: false },
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.offers.loading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers.value = action.payload;
        state.offers.loading = false;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.offers.loading = false;
      })
      .addCase(fetchOffer.pending, (state) => {
        state.offer.loading = true;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer.value = action.payload;
        state.offer.loading = false;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.offer.loading = false;
      })
      .addCase(fetchNearOffers.pending, (state) => {
        state.nearOffers.loading = true;
      })
      .addCase(fetchNearOffers.fulfilled, (state, action) => {
        state.nearOffers.value = action.payload;
        state.nearOffers.loading = false;
      })
      .addCase(fetchNearOffers.rejected, (state) => {
        state.nearOffers.loading = false;
      });
  }
});
