import { MockStore, configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { MemoryRouter } from 'react-router-dom';
import { State } from '../hooks';
import { createAPI } from '../services/api';
import thunk from 'redux-thunk';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { makeFakeInitState } from './mock';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
}

export const withRoutes = (component: JSX.Element, pathname: string = '/') =>
  (<MemoryRouter initialEntries={[{pathname: pathname}]}>{component}</MemoryRouter>);

export const withStore = (component: JSX.Element, initialState?: Partial<State>): ComponentWithMockStore => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  const mockState = initialState ?? makeFakeInitState();
  const mockStore = mockStoreCreator(mockState);

  return ({
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter,
  });
};
