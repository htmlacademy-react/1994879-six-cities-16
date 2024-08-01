import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app-slice';
import { offersReducer } from './offer-slice';
import { userReducer } from './user-slice';
import { commentReducer } from './comment-slice';
import { createAPI } from '../services/api';
import { favoriteReducer } from './favorite-slice';

const api = createAPI();

export const store = configureStore({
  reducer: {
    app: appReducer,
    offers: offersReducer,
    user: userReducer,
    comment: commentReducer,
    favorite: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    })
});
