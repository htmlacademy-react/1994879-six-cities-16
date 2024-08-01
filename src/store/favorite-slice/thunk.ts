import { createAsyncThunk } from '@reduxjs/toolkit';
import { Endpoint } from '../../const';
import { Offer, OfferFull } from '../../types/offer';
import { AsyncThunkPropWithAxios } from '../type';

type FavoritePost = {
  offerId: string;
  status: 0 | 1;
}

export const fetchFavorites = createAsyncThunk<Offer[], undefined, AsyncThunkPropWithAxios>(
  'favorite/fetchFavorites',
  async (_arg, { extra: api }) => {
    const response = await api.get<Offer[]>(Endpoint.Favorite);
    return response.data;
  }
);

export const postFavorite = createAsyncThunk<OfferFull, FavoritePost, AsyncThunkPropWithAxios>(
  'favorite/postFavorite',
  async ({ offerId, status }, { extra: api }) => {
    const response = await api.post<OfferFull>(`${Endpoint.Comments}/${offerId}`, status);
    return response.data;
  }
);
