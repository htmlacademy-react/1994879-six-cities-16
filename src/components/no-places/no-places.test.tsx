import { render } from '@testing-library/react';
import { NoPlaces } from './no-places';
import { CityName } from '../../types/city';

describe('NoPlaces component', () => {
  it('renders correctly', () => {
    const city: CityName = 'Paris';
    const { getByText } = render(<NoPlaces city={city} />);
    expect(getByText('No places to stay available')).toBeInTheDocument();
    expect(getByText(`We could not find any property available at the moment in ${city}`)).toBeInTheDocument();
  });

  it('renders city name correctly', () => {
    const city: CityName = 'Dusseldorf';
    const { getByText } = render(<NoPlaces city={city} />);
    expect(getByText(`We could not find any property available at the moment in ${city}`)).toBeInTheDocument();
  });

  it('renders with correct class names', () => {
    const city: CityName = 'Brussels';
    const { container } = render(<NoPlaces city={city} />);
    expect(container.getElementsByClassName('cities__places-container').length).toBe(1);
    expect(container.getElementsByClassName('cities__places-container--empty').length).toBe(1);
    expect(container.getElementsByClassName('cities__no-places').length).toBe(1);
    expect(container.getElementsByClassName('cities__status-wrapper').length).toBe(1);
    expect(container.getElementsByClassName('cities__status').length).toBe(1);
    expect(container.getElementsByClassName('cities__status-description').length).toBe(1);
  });
});
