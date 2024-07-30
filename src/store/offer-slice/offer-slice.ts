import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import { fetchOffers } from './thunk';
import { State } from '../../hooks';

type OffersState = {
  value: Offer[];
  loading: boolean;
}

export type InitialState = {
  offers: OffersState;
  favorites: OffersState;
  nearOffers: OffersState;
}

const initialState: InitialState = {
  offers: { value: [], loading: false},
  favorites: { value: [], loading: false},
  nearOffers: { value: [], loading: false},
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    [fetchOffers.pending]: (state) => {
      state.offers.loading = true;
    },
    [fetchOffers.fulfilled]: (state: State, action: PayloadAction<Offer[]>) => {
      state.offers.value = action.payload;
      state.offers.loading = false;
    },
    [fetchOffers.rejected]: (state: State) => {
      state.offers.loading = false;
    },
  },
});
