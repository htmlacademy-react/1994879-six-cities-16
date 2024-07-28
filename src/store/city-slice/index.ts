import { State } from '../../hooks';
import { citySlice } from './city-slice';

export const { selectCity } = citySlice.actions;
export const cityReducer = citySlice.reducer;

export const getActiveCity = (state: State) => state.cities.city;
