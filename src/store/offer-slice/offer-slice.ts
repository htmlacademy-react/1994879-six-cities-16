import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import { MockOffers } from '../../mock/offers';
import { MockFavorites, MockNearOffers } from '../../mock/favorites';

export type OffersState = {
  offers: Offer[];
  favorites: Offer[];
  nearOffers: Offer[];
}

const initialState: OffersState = {
  offers: MockOffers,
  favorites: MockFavorites,
  nearOffers: MockNearOffers,
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
    setFavorites: (state, action: PayloadAction<Offer[]>) => {
      state.favorites = action.payload;
    },
    setNearOffers: (state, action: PayloadAction<Offer[]>) => {
      state.nearOffers = action.payload;
    },
  },
});
