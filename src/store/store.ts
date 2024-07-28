import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app-slice';
import { offersReducer } from './offer-slice';
import { userReducer } from './user-slice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    offers: offersReducer,
    user: userReducer,
  },
});
