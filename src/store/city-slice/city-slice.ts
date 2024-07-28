import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cities, DEFAULT_CITY } from '../../const';
import { City, CityName } from '../../types/city';

export type CityState = {
  city: City;
}

const initialState: CityState = {
  city: Cities[DEFAULT_CITY],
};

const getCityFromPayload = (payload: City | CityName) =>
  typeof payload === 'string' ? Cities[payload] : payload;

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    selectCity: (state, action: PayloadAction<City | CityName>) => {
      state.city = getCityFromPayload(action.payload);
    },
  },
});

