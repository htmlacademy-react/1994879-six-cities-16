import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cities, DEFAULT_CITY } from '../../const';
import { City, CityName } from '../../types/city';
import { PlacesSortType } from '../../components/places/const';

export type AppState = {
  city: City;
  sortType: PlacesSortType;
}

const initialState: AppState = {
  city: Cities[DEFAULT_CITY],
  sortType: 'popular',
};

const getCityFromPayload = (payload: City | CityName) =>
  typeof payload === 'string' ? Cities[payload] : payload;

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    selectCity: (state, action: PayloadAction<City | CityName>) => {
      state.city = getCityFromPayload(action.payload);
    },
    selectSortType: (state, action: PayloadAction<PlacesSortType>) => {
      state.sortType = action.payload;
    },
  },
});

