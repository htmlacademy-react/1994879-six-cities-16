import { createSlice } from '@reduxjs/toolkit';
import { Offer, OfferFull } from '../../types/offer';
import { fetchFavorites, applyFavorite } from './thunk';
import { StateLoading } from '../type';

export type InitialState = {
  offer: StateLoading<OfferFull>;
  offers: StateLoading<Offer[]>;
}

const initialState: InitialState = {
  offer: { entity: undefined, loading: false },
  offers: { entity: [], loading: false },
};

const updateFavorites = (state: InitialState, newOffer: Offer) => {
  const favorites = state.offers.entity || [];
  if (newOffer.isFavorite) {
    state.offers.entity = [...favorites, newOffer];
  } else {
    state.offers.entity = favorites.filter((favoriteOffer) => favoriteOffer.id !== newOffer.id);
  }
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
        state.offers.entity = action.payload;
        state.offers.loading = false;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.offers.loading = false;
      })
      .addCase(applyFavorite.pending, (state) => {
        state.offer.loading = true;
      })
      .addCase(applyFavorite.fulfilled, (state, action) => {
        updateFavorites(state, action.payload);
        state.offer.loading = false;
      })
      .addCase(applyFavorite.rejected, (state) => {
        state.offer.loading = false;
      });
  }
});
