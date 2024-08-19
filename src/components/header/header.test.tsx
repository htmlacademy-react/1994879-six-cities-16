// Header.test.tsx
import { render } from '@testing-library/react';
import { Header } from './header';
import { AppRoute, AuthorizationStatus } from '../../const';
import { withRoutes, withStore } from '../../mock/mock-component';
import { makeFakeInitState, makeFakeUserWithEmail } from '../../mock/mock';

describe('Header component', () => {
  const initialState = makeFakeInitState();

  it('renders correctly, has logo', () => {
    const { withStoreComponent } = withStore(withRoutes(<Header />));
    const { getByAltText } = render(withStoreComponent);
    expect(getByAltText('6 cities logo')).toBeInTheDocument();
  });

  it('renders page Main, Auth true', () => {
    const header = withRoutes(<Header />, AppRoute.Main);
    const { withStoreComponent } = withStore(header, initialState);

    const { getByText, getAllByRole } = render(withStoreComponent);
    expect(getByText('Sign out')).toBeInTheDocument();
    expect(getAllByRole('link')[0]).toHaveClass('header__logo-link--active');
  });

  it('renders page Main, Auth false', () => {
    const header = withRoutes(<Header />, AppRoute.Main);
    const { withStoreComponent } = withStore(header, {...initialState,
      user: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: makeFakeUserWithEmail()
      }});

    const { getByText } = render(withStoreComponent);
    expect(getByText('Sign in')).toBeInTheDocument();
  });

  it('renders page Login', () => {
    const header = withRoutes(<Header />, AppRoute.Login);
    const { withStoreComponent } = withStore(header, initialState);

    const { queryByText } = render(withStoreComponent);
    expect(queryByText('Sign in')).not.toBeInTheDocument();
    expect(queryByText('Sign out')).not.toBeInTheDocument();
  });

  it('renders page Offer, logo fave no active class', () => {
    const header = withRoutes(<Header />, AppRoute.Offer);
    const { withStoreComponent } = withStore(header, initialState);

    const { getAllByRole } = render(withStoreComponent);
    expect(getAllByRole('link')[0]).not.toHaveClass('header__logo-link--active');
  });
});
