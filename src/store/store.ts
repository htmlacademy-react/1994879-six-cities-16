import { configureStore } from '@reduxjs/toolkit';
import { cityReducer } from './city-slice';
import { offersReducer } from './offer-slice';
import { userReducer } from './user-slice';

export const store = configureStore({
  reducer: {
    cities: cityReducer,
    offers: offersReducer,
    user: userReducer,
  },
});
