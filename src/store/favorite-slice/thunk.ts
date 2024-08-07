import { createAsyncThunk } from '@reduxjs/toolkit';
import { Endpoint } from '../../const';
import { Offer, OfferFull } from '../../types/offer';
import { ExtraAxios } from '../type';

type FavoritePost = {
  offerId: string;
  status: boolean;
}

export const fetchFavorites = createAsyncThunk<Offer[], undefined, ExtraAxios>(
  'favorite/fetchFavorites',
  async (_arg, { extra: api }) => {
    const response = await api.get<Offer[]>(Endpoint.Favorite);
    return response.data;
  }
);

export const applyFavorite = createAsyncThunk<OfferFull, FavoritePost, ExtraAxios>(
  'favorite/applyFavorite',
  async ({ offerId, status }, { extra: api }) => {
    const response = await api.post<OfferFull>(`${Endpoint.Favorite}/${offerId}/${Number(status)}`);
    return response.data;
  }
);
