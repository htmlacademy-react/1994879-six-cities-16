import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer, OfferFull } from '../../types/offer';
import { Endpoint } from '../../const';
import { AsyncThunkPropWithAxios } from '../type';

export const fetchOffers = createAsyncThunk<Offer[], undefined, AsyncThunkPropWithAxios>(
  'offers/fetchOffers',
  async (_arg, { extra: api }) => {
    const response = await api.get<Offer[]>(Endpoint.Offers);
    return response.data;
  }
);

export const fetchOffer = createAsyncThunk<OfferFull, string, AsyncThunkPropWithAxios>(
  'offers/fetchOffer',
  async (id, { extra: api }) => {
    const response = await api.get<OfferFull>(`${Endpoint.Offers}/${id}`);
    return response.data;
  }
);

export const fetchNearOffers = createAsyncThunk<Offer[], string, AsyncThunkPropWithAxios>(
  'offers/fetchNearOffers',
  async (id, { extra: api }) => {
    const response = await api.get<Offer[]>(`${Endpoint.Offers}/${id}/nearby`);
    return response.data;
  }
);
