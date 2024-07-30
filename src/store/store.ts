import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app-slice';
import { offersReducer } from './offer-slice';
import { userReducer } from './user-slice';
import { createAPI } from '../services/api';
import thunk from 'redux-thunk';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    app: appReducer,
    offers: offersReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk.withExtraArgument(api)),
});
