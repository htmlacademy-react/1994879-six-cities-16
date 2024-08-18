// CityLink.test.tsx
import { render, fireEvent, screen } from '@testing-library/react';
import { CityLink } from './city-link';
import { makeFakeInitState } from '../../mock/mock';
import { CityName } from '../../types/city';
import { withRoutes, withStore } from '../../mock/mock-component';

describe('CityLink component', () => {
  const initialState = makeFakeInitState();

  it('renders correctly', () => {
    const city: CityName = 'Paris';
    const { withStoreComponent } = withStore(withRoutes(<CityLink city={city} />), initialState);
    const { getByText } = render(withStoreComponent);
    expect(getByText(city)).toBeInTheDocument();
  });

  it('calls dispatch with selectCity action when clicked', () => {
    const city: CityName = 'Cologne';
    const { withStoreComponent, mockStore } = withStore(withRoutes(<CityLink city={city} />), initialState);
    vi.spyOn(mockStore, 'dispatch');

    const { getByText } = render(withStoreComponent);
    const link = getByText(city);
    fireEvent.click(link);
    expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
  });
});
