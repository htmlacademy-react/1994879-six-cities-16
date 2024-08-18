import { render, screen } from '@testing-library/react';
import { CityLinkList } from './city-link-list';
import { cityNames } from '../../../const';
import { CityName } from '../../../types/city';
import { withRoutes, withStore } from '../../../mock/mock-component';
import { makeFakeInitState } from '../../../mock/mock';

describe('CityLinkList', () => {
  const initialState = makeFakeInitState();

  it('renders a list of city links', () => {
    const activeCity: CityName = 'Dusseldorf';
    const {withStoreComponent} = withStore(withRoutes(<CityLinkList activeCity={activeCity} />), initialState);
    render(withStoreComponent);

    const cityLinks = screen.getAllByRole('link');
    expect(cityLinks).toHaveLength(cityNames.length);

    cityNames.forEach((city) => {
      const cityLink = screen.getByText(city);
      expect(cityLink).toBeInTheDocument();
    });
  });
});
