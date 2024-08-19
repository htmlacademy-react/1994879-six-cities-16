import { fireEvent, render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { FavoriteCity } from './favorite-city';
import { CityName } from '../../../types/city';
import { withRoutes, withStore } from '../../../mock/mock-component';
import { makeFakeInitState, makeFakeOffers } from '../../../mock/mock';
import { selectCity } from '../../../store/selectors';

describe('Favorite City Component', () => {
  const offers = makeFakeOffers();
  const initialState = makeFakeInitState();

  it('render correctly', () => {
    const cityName: CityName = 'Cologne';
    const favoriteCityComponent = withRoutes(<FavoriteCity city={cityName} offers={offers} />);

    render(withStore(favoriteCityComponent, initialState).withStoreComponent);

    expect(screen.getByText(cityName)).toBeInTheDocument();
  });

  it('renders PlaceCard components', () => {
    const favoriteCityComponent = withRoutes(<FavoriteCity city='Amsterdam' offers={offers} />);

    render(withStore(favoriteCityComponent, initialState).withStoreComponent);

    expect(screen.getAllByRole('article')).toHaveLength(offers.length);
  });

  it('calls dispatch when link is clicked', () => {
    const cityName: CityName = 'Amsterdam';
    const favoriteCityComponent = withRoutes(<FavoriteCity city={cityName} offers={offers} />);
    const { withStoreComponent, mockStore} = withStore(favoriteCityComponent, initialState);

    vi.spyOn(mockStore, 'dispatch');

    render(withStoreComponent);
    const link = screen.getByTestId('test-location');

    fireEvent.click(link);
    expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
    expect(mockStore.dispatch).toHaveBeenCalledWith(selectCity(cityName));
  });
});
