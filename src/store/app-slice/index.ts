import { State } from '../../hooks';
import { appSlice } from './app-slice';

export const { selectCity, setSortType } = appSlice.actions;
export const appReducer = appSlice.reducer;

export const getActiveCity = (state: State) => state.app.city;
export const getSortType = (state: State) => state.app.sortType;
