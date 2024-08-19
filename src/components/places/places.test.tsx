import { render } from '@testing-library/react';
import { Places } from './places';
import { CityName } from '../../types/city';
import { PlacesSortOptions, PlacesSortType } from './const';
import { Cities } from '../../const';
import { makeFakeInitState, makeFakeOffers } from '../../mock/mock';
import { withRoutes, withStore } from '../../mock/mock-component';
import { State } from '../../hooks';

describe('Places component', () => {
  const cityName: CityName = 'Cologne';
  const offers = makeFakeOffers();
  const sortType: PlacesSortType = 'price-low';
  const initialState = makeFakeInitState();
  const stubState: Partial<State> = {...initialState, app: {
    city: Cities[cityName],
    sortType: sortType,
  }};

  it('renders correctly', () => {
    const { withStoreComponent } = withStore(withRoutes(<Places city={cityName} offers={offers} />), stubState);
    const { getByText, container } = render(withStoreComponent);
    const list = container.querySelector('.cities__places-list');

    expect(getByText('Sort by')).toBeInTheDocument();
    expect(container.querySelector('.cities__right-section')).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(list?.childElementCount).toBe(offers.length);
  });

  it('sorts offers correctly', () => {
    const { withStoreComponent } = withStore(withRoutes(<Places city={cityName} offers={offers} />), stubState);
    const { getByText } = render(withStoreComponent);

    const sortedOffers = offers.slice().sort(PlacesSortOptions[sortType].sort);

    sortedOffers.forEach((offer) => {
      expect(getByText(offer.title)).toBeInTheDocument();
    });
  });
});
