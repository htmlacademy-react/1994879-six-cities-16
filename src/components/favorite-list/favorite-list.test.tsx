import { render, screen } from '@testing-library/react';
import { FavoriteList } from './favorite-list';
import { withRoutes, withStore } from '../../mock/mock-component';
import { FavoriteCityProps } from './favorite-city/favorite-city';
import { makeFakeInitState } from '../../mock/mock';

describe('FavoriteList', () => {
  const initialState = makeFakeInitState();

  it('renders a list of favorite cities', () => {
    const favoriteCities: FavoriteCityProps[] = [
      { city: 'Amsterdam', offers: [] },
      { city: 'Hamburg', offers: [] },
      { city: 'Paris', offers: [] },
    ];

    const {withStoreComponent} = withStore(withRoutes(<FavoriteList list={favoriteCities} />), initialState);
    render(withStoreComponent);

    expect(screen.getByText('Saved listing')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);

    favoriteCities.forEach((city) => {
      expect(screen.getByText(city.city)).toBeInTheDocument();
    });
  });
});
