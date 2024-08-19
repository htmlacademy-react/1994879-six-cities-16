import { render, fireEvent } from '@testing-library/react';
import { BookmarkButton } from './bookmark-button';
import { BookmarkButtonType } from './const';
import { withRoutes, withStore } from '../../mock/mock-component';
import { makeFakeInitState, makeFakeOffer, makeFakeUserWithEmail } from '../../mock/mock';
import { State } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';

const mockedUseNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom'
  );
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  };
});

describe('BookmarkButton', () => {
  const initialState = makeFakeInitState();

  it('renders a button with the correct class name', () => {
    const type: BookmarkButtonType = 'offer';
    const { withStoreComponent } = withStore(withRoutes(<BookmarkButton type={type} offerId={'123'} isActive />), initialState);

    const { getByRole } = render(withStoreComponent);

    expect(getByRole('button')).toHaveClass(`${type}__bookmark-button ${type}__bookmark-button--active`);
  });

  it('calls dispatch when button is clicked', () => {
    const type: BookmarkButtonType = 'offer';
    const offerId = '123';
    const isActive = true;
    const { withStoreComponent, mockStore } = withStore(withRoutes(<BookmarkButton type={type} offerId={offerId} isActive={isActive} />), initialState);
    vi.spyOn(mockStore, 'dispatch');

    const { getByRole } = render(withStoreComponent);
    const button = getByRole('button');
    fireEvent.click(button);

    expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
  });

  it('disables button when isLoading is true', () => {
    const stubState: Partial<State> = {...initialState,
      favorite: {
        offer: {entity: undefined, status: 'loading'},
        offers: {entity: [], status: 'none'},
      },
    };
    const type: BookmarkButtonType = 'offer';
    const { withStoreComponent } = withStore(withRoutes(<BookmarkButton type={type} offerId={'123'} isActive />), stubState);

    const { getByRole } = render(withStoreComponent);

    const button = getByRole('button');
    expect(button).toBeDisabled();
  });

  it('redirect to login when not authorized', () => {
    const offer = makeFakeOffer();
    const notAuthState: Partial<State> = {...initialState,
      user: {
        user: makeFakeUserWithEmail(),
        authorizationStatus: AuthorizationStatus.NoAuth
      }};
    const { withStoreComponent } = withStore(withRoutes(<BookmarkButton type='place-card' offerId={offer.id} isActive={offer.isFavorite} />), notAuthState);

    const { getByRole } = render(withStoreComponent);
    const button = getByRole('button');
    fireEvent.click(button);

    expect(mockedUseNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUseNavigate).toHaveBeenCalledWith(AppRoute.Login);
  });
});
