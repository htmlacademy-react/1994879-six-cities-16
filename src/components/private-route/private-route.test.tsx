import { render } from '@testing-library/react';
import { PrivateRoute } from './private-route';
import { AppRoute } from '../../const';
import { withRoutes, withStore } from '../../mock/mock-component';
import { makeFakeInitState, makeFakeNotAuthState } from '../../mock/mock';

describe('PrivateRoute component', () => {
  const privateText = 'Private content';
  const children = <div>{privateText}</div>;
  const AuthState = makeFakeInitState();
  const noAuthState = makeFakeNotAuthState();

  it('renders children when authorized', () => {
    const component = withRoutes(<PrivateRoute>{children}</PrivateRoute>);
    const { getByText } = render(withStore(component, AuthState).withStoreComponent);

    expect(getByText(privateText)).toBeInTheDocument();
  });

  it('renders children when not authorized and isLoginLocation is true', () => {
    const component = withRoutes(<PrivateRoute isLoginLocation>{children}</PrivateRoute>);
    const { getByText } = render(withStore(component, noAuthState).withStoreComponent);

    expect(getByText(privateText)).toBeInTheDocument();
  });

  it('redirects to login when not authorized', () => {
    const component = withRoutes(<PrivateRoute>{children}</PrivateRoute>, AppRoute.Favorites);
    const { queryByText } = render(withStore(component, noAuthState).withStoreComponent);

    expect(queryByText(privateText)).not.toBeInTheDocument();
  });

  it('redirects to main when authorized', () => {
    const component = withRoutes(<PrivateRoute isLoginLocation>{children}</PrivateRoute>, AppRoute.Login);
    const { queryByText } = render(withStore(component, AuthState).withStoreComponent);

    expect(queryByText(privateText)).not.toBeInTheDocument();
    expect(window.location.pathname).toEqual(AppRoute.Main);
  });
});
