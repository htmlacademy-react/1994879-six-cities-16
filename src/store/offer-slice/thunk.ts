import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import { Endpoint } from '../../const';
import { AxiosInstance } from 'axios';

type AsyncThunkPropWithAxios = {
  extra: AxiosInstance;
};

export const fetchOffers = createAsyncThunk<Offer[], undefined, AsyncThunkPropWithAxios>(
  'offers/fetchOffers',
  async (_arg, ThunkApi) => {
    const response = await ThunkApi.extra.get<Offer[]>(Endpoint.Offers);
    return response.data;
  }
);
