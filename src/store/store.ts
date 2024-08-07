import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from './app-slice/app-slice';
import { offersSlice } from './offer-slice/offer-slice';
import { userSlice } from './user-slice/user-slice';
import { commentSlice } from './comment-slice/comment-slice';
import { createAPI } from '../services/api';
import { favoriteSlice } from './favorite-slice/favorite-slice';

const api = createAPI();

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    offers: offersSlice.reducer,
    user: userSlice.reducer,
    comment: commentSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    })
});
