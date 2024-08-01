import { appSlice } from './app-slice';
import { State } from '../../hooks';

export const { selectCity, selectSortType } = appSlice.actions;
export const appReducer = appSlice.reducer;

export const getActiveCity = (state: State) => state.app.city;
export const getSortType = (state: State) => state.app.sortType;
