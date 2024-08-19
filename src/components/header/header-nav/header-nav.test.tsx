import { render, fireEvent } from '@testing-library/react';
import { HeaderNav } from './header-nav';
import { withRoutes, withStore } from '../../../mock/mock-component';
import { makeFakeInitState, makeFakeNotAuthState, makeFakeOffers } from '../../../mock/mock';
import { State } from '../../../hooks';
import { AuthorizationStatus } from '../../../const';
import { Offer } from '../../../types/offer';

describe('HeaderNav component', () => {
  const initialState = makeFakeInitState();

  it('renders correctly when not authorized', () => {
    const notAuthState = makeFakeNotAuthState();
    const { withStoreComponent } = withStore(withRoutes(<HeaderNav />), notAuthState);
    const { getByText } = render(withStoreComponent);

    expect(getByText('Sign in')).toBeInTheDocument();
  });

  it('renders correctly when authorized', () => {
    const email = 'test-email@mail.com';
    const userName = 'test-name';
    const stubState: Partial<State> = {...initialState, user: {
      authorizationStatus: AuthorizationStatus.Auth,
      user: { email: email, avatarUrl: '', isPro: true, name: userName, token: ''},
    }};
    const { withStoreComponent } = withStore(withRoutes(<HeaderNav />), stubState);
    const { getByText, getByAltText } = render(withStoreComponent);

    expect(getByText(email)).toBeInTheDocument();
    expect(getByAltText(userName)).toBeInTheDocument();
  });

  it('calls logout when sign out link is clicked', () => {
    const { withStoreComponent, mockStore } = withStore(withRoutes(<HeaderNav />), initialState);
    const dispatchSpy = vi.spyOn(mockStore, 'dispatch');

    const { getByText } = render(withStoreComponent);
    const signOutLink = getByText('Sign out');
    fireEvent.click(signOutLink);

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
  });

  it('renders favorite count correctly', () => {
    const offers: Offer[] = makeFakeOffers();
    const stubState: Partial<State> = {...initialState,
      favorite: {
        offers: {entity: offers, status: 'done'},
        offer: {entity: undefined, status: 'none'}
      }
    };

    const { withStoreComponent } = withStore(withRoutes(<HeaderNav />), stubState);
    const { getByText } = render(withStoreComponent);

    expect(getByText(offers.length)).toBeInTheDocument();
  });
});
