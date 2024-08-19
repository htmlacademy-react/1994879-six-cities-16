import { render } from '@testing-library/react';
import { MainPage } from './main-page';
import { CityName } from '../../types/city';
import { makeFakeInitState, makeFakeOffers } from '../../mock/mock';
import { withRoutes, withStore } from '../../mock/mock-component';
import { AppRoute, LoadingMessage } from '../../const';

describe('MainPage', () => {
  const initialState = makeFakeInitState();

  it('renders main page with offers', () => {
    const cityName: CityName = 'Paris';
    const offers = makeFakeOffers();

    const { withStoreComponent } = withStore(withRoutes(<MainPage />, AppRoute.Main), {...initialState,
      offers: {
        offer: { entity: undefined, status: 'none' },
        offers: { entity: offers, status: 'done' },
        nearOffers: { entity: [], status: 'none' },
      }
    });

    const { getByText } = render(withStoreComponent);

    expect(getByText(cityName)).toBeInTheDocument();
  });

  it('renders loading spinner when offers are loading', () => {
    const { withStoreComponent } = withStore(withRoutes(<MainPage />), {...initialState,
      offers: {
        offer: { entity: undefined, status: 'none' },
        offers: { entity: [], status: 'loading' },
        nearOffers: { entity: [], status: 'none' },
      }
    });

    const { getByText } = render(withStoreComponent);
    expect(getByText(LoadingMessage.Offers)).toBeInTheDocument();
  });

  it('renders no places component when there are no offers', () => {
    const { withStoreComponent } = withStore(withRoutes(<MainPage />), {...initialState,
      offers: {
        offer: { entity: undefined, status: 'none' },
        offers: { entity: [], status: 'done' },
        nearOffers: { entity: [], status: 'none' },
      }
    });

    const { getByText } = render(withStoreComponent);

    expect(getByText('No places to stay available')).toBeInTheDocument();
  });
});
