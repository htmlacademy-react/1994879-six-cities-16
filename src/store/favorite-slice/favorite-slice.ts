import { createSlice } from '@reduxjs/toolkit';
import { Offer, OfferFull } from '../../types/offer';
import { fetchFavorites, postFavorite } from './thunk';
import { StateLoading } from '../type';

export type InitialState = {
  offer: StateLoading<OfferFull | undefined>;
  offers: StateLoading<Offer[]>;
}

const initialState: InitialState = {
  offer: { value: undefined, loading: false },
  offers: { value: [], loading: false },
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.offers.loading = true;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.offers.value = action.payload;
        state.offers.loading = false;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.offers.loading = false;
      })
      .addCase(postFavorite.pending, (state) => {
        state.offer.loading = true;
      })
      .addCase(postFavorite.fulfilled, (state, action) => {
        state.offer.value = action.payload;
        state.offer.loading = false;
      })
      .addCase(postFavorite.rejected, (state) => {
        state.offer.loading = false;
      });
  }
});
