import { State } from '../../hooks';
import { offersSlice } from './offer-slice';

export const { fetchOffersError, fetchOffersStart, fetchOffersSuccess } = offersSlice.actions;
export const offersReducer = offersSlice.reducer;

export const getOffers = (state: State) => state.offers.offers;
export const getFavorites = (state: State) => state.offers.favorites.value;
export const getNearOffers = (state: State) => state.offers.nearOffers.value;
