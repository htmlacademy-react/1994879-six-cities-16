import { offersSlice } from './offer-slice';
import { State } from '../../hooks';

export const offersReducer = offersSlice.reducer;

export const getOffer = (state: State) => state.offers.offer;
export const getOffers = (state: State) => state.offers.offers;
export const getNearOffers = (state: State) => state.offers.nearOffers;
