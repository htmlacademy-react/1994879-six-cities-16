import { useAuth } from './use-auth';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import { AppThunkDispatch } from '../mock/mock-component';
import { State } from '.';
import { makeFakeInitState } from '../mock/mock';
import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { AuthorizationStatus } from '../const';

describe('useAuth', () => {
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>();
  const initState = makeFakeInitState();

  it('should return isAuthorized=true when authorization status is Auth', () => {
    const store = mockStoreCreator(initState);
    const wrapper = ({ children }: { children: ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { result } = renderHook(() => useAuth(), { wrapper: wrapper});

    expect(result.current.isAuthorized).toBe(true);
    expect(result.current.isAuthorizationChecked).toBe(true);
  });

  it('should return isAuthorized=false when authorization status is NotAuth', () => {
    const store = mockStoreCreator({...initState,
      user: {authorizationStatus: AuthorizationStatus.NoAuth, user: undefined},
    });
    const wrapper = ({ children }: { children: ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { result } = renderHook(() => useAuth(), { wrapper: wrapper});

    expect(result.current.isAuthorized).toBe(false);
    expect(result.current.isAuthorizationChecked).toBe(true);
  });

  it('should return isAuthorizationChecked=false when authorization status is Unknown', () => {
    const store = mockStoreCreator({...initState,
      user: {authorizationStatus: AuthorizationStatus.Unknown, user: undefined},
    });
    const wrapper = ({ children }: { children: ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { result } = renderHook(() => useAuth(), { wrapper: wrapper});

    expect(result.current.isAuthorized).toBe(false);
    expect(result.current.isAuthorizationChecked).toBe(false);
  });
});
