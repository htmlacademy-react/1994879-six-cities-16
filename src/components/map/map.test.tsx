import { render } from '@testing-library/react';
import { Map } from './map';
import { Offer } from '../../types/offer';
import { City } from '../../types/city';
import { makeFakeOffers } from '../../mock/mock';
import { getRandomCity } from '../../utils';
import { Cities } from '../../const';
import { withRoutes } from '../../mock/mock-component';

describe('Map component', () => {
  const city: City = Cities[getRandomCity()];
  const offers: Offer[] = makeFakeOffers();

  it('renders map container', () => {
    const map = withRoutes(<Map city={city} offers={offers} selectedOffer={undefined} />);
    const { getByTestId } = render(map);
    expect(getByTestId('test-map')).toBeInTheDocument();
  });
});
