import { render } from '@testing-library/react';
import { FavoritesPage } from './favorites-page';
import * as selectors from '../../store/selectors';
import { withRoutes, withStore } from '../../mock/mock-component';
import { makeFakeInitState, makeFakeOffers } from '../../mock/mock';
import { AppRoute, LoadingMessage } from '../../const';

describe('FavoritesPage', () => {
  const initialState = makeFakeInitState();
  const offers = makeFakeOffers();

  it('renders Spinner when isLoading is true', () => {
    const { withStoreComponent } = withStore(<FavoritesPage />, {...initialState,
      favorite: {
        offer: { entity: undefined, status: 'none' },
        offers: { entity: [], status: 'loading' },
      }
    });

    const { getByText } = render(withStoreComponent);

    expect(getByText(LoadingMessage.Favorites)).toBeInTheDocument();
  });

  it('renders FavoriteEmpty when offers is empty', () => {
    const { withStoreComponent } = withStore(withRoutes(<FavoritesPage />, AppRoute.Favorites), {...initialState,
      favorite: {
        offer: { entity: undefined, status: 'none' },
        offers: { entity: [], status: 'done' },
      }
    });

    const { getByText } = render(withStoreComponent);

    expect(getByText('Nothing yet saved.')).toBeInTheDocument();
  });

  it('renders FavoriteList when offers is not empty', () => {
    const { withStoreComponent } = withStore(withRoutes(<FavoritesPage />, AppRoute.Favorites), {...initialState,
      favorite: {
        offer: { entity: undefined, status: 'none' },
        offers: { entity: offers, status: 'done' },
      }
    });

    const { getByText } = render(withStoreComponent);

    expect(getByText('Saved listing')).toBeInTheDocument();
  });

  it('calls allFavorites selector', () => {
    const allFavoritesSpy = vi.spyOn(selectors, 'allFavorites');

    const { withStoreComponent } = withStore(withRoutes(<FavoritesPage />, AppRoute.Favorites), {...initialState,
      favorite: {
        offer: { entity: undefined, status: 'none' },
        offers: { entity: [], status: 'done' },
      }
    });
    render(withStoreComponent);

    expect(allFavoritesSpy).toHaveReturnedWith({ favorites: [], isLoading: false });
  });
});
