import { render } from '@testing-library/react';
import { OfferPage } from './offer-page';
import { withRoutes, withStore } from '../../mock/mock-component';
import { makeFakeInitState, makeFakeOfferFull, makeFakeOffers } from '../../mock/mock';
import { LoadingMessage } from '../../const';
import { getOfferRoute } from '../../utils';

describe('OfferPage', () => {
  const initialState = makeFakeInitState();

  it('renders offer page with data', () => {
    const offer = makeFakeOfferFull();
    const nearOffers = makeFakeOffers();

    const { withStoreComponent } = withStore(withRoutes(<OfferPage />, getOfferRoute(offer.id)), {...initialState,
      offers: {
        offers: { entity: [], status: 'done' },
        offer: { entity: offer, status: 'done' },
        nearOffers: { entity: nearOffers, status: 'done' },
      }
    });
    const { getByText } = render(withStoreComponent);

    expect(getByText(offer.title)).toBeInTheDocument();
    expect(getByText(offer.description)).toBeInTheDocument();
    expect(getByText(nearOffers[0].title)).toBeInTheDocument();
  });

  it('renders loading spinner when data is loading', () => {
    const { withStoreComponent } = withStore(<OfferPage />, {...initialState,
      offers: {
        offers: { entity: [], status: 'none' },
        offer: { entity: undefined, status: 'loading' },
        nearOffers: { entity: [], status: 'none' },
      }
    });
    const { getByText } = render(withStoreComponent);

    expect(getByText(LoadingMessage.Offer)).toBeInTheDocument();
  });

  it('renders not found page when offer is not found', () => {
    const { withStoreComponent } = withStore(withRoutes(<OfferPage />, '/offer/123'));
    const { getByText } = render(withStoreComponent);

    expect(getByText('404 Not Found')).toBeInTheDocument();
  });
});
