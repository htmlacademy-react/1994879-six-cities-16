import { describe, it } from 'vitest';
import { appSlice } from './app-slice';
import { Cities } from '../../const';
import { CityName } from '../../types/city';

describe('appSlice reducer', () => {
  it('selectCity reducer', () => {
    const initialState = appSlice.getInitialState();
    const newCity = Cities['Cologne'];
    const action = { type: 'app/selectCity', payload: newCity };

    const newState = appSlice.reducer(initialState, action);

    expect(newState.city).toBe(newCity);
  });

  it('selectCity reducer with city name', () => {
    const initialState = appSlice.getInitialState();
    const newCityName: CityName = 'Dusseldorf';
    const action = { type: 'app/selectCity', payload: newCityName };

    const newState = appSlice.reducer(initialState, action);

    expect(newState.city).toBe(Cities[newCityName]);
  });

  it('selectSortType reducer', () => {
    const initialState = appSlice.getInitialState();
    const newSortType = 'price';
    const action = { type: 'app/selectSortType', payload: newSortType };

    const newState = appSlice.reducer(initialState, action);

    expect(newState.sortType).toBe(newSortType);
  });
});
