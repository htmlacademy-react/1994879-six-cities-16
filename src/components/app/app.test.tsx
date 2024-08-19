import { fireEvent, render } from '@testing-library/react';
import { withStore } from '../../mock/mock-component';
import App from './app';
import { AppRoute, AuthorizationStatus } from '../../const';
import { makeFakeInitState, makeFakeNotAuthState } from '../../mock/mock';
import { State } from '../../hooks';

describe('App component', () => {
  const initialState = makeFakeInitState();
  const notAuthState = makeFakeNotAuthState();

  it('renders correctly', () => {
    const { withStoreComponent } = withStore(<App />);
    const { getByText } = render(withStoreComponent);
    expect(getByText('Paris')).toBeInTheDocument();
    expect(getByText('Amsterdam')).toBeInTheDocument();
  });

  it('navigates to login page', () => {
    const { withStoreComponent } = withStore(<App />, notAuthState);
    const { getByText, getByRole } = render(withStoreComponent);

    const signOutLink = getByText('Sign in');
    fireEvent.click(signOutLink);

    expect(getByRole('button')).toHaveTextContent('Sign in');
  });

  it('navigates to favorite page', () => {
    const email = 'test-email@mail.com';
    const stubState: Partial<State> = {...initialState, user: {
      authorizationStatus: AuthorizationStatus.Auth,
      user: { avatarUrl: '', email: email, isPro: false, name: '', token: '123'},
    }};
    const { withStoreComponent } = withStore(<App />, stubState);
    const { getByText } = render(withStoreComponent);

    const signOutLink = getByText(email);
    fireEvent.click(signOutLink);

    expect(window.location.pathname).toEqual(AppRoute.Favorites);
  });
});
