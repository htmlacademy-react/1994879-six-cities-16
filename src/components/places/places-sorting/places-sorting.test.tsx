import { render, fireEvent } from '@testing-library/react';
import { PlacesSorting } from './places-sorting';
import { withStore } from '../../../mock/mock-component';
import { makeFakeInitState } from '../../../mock/mock';
import { PlacesSortOptions, PlacesSortType } from '../const';
import { State } from '../../../hooks';
import { Cities } from '../../../const';

describe('PlacesSorting component', () => {
  const sortType: PlacesSortType = 'price-low';
  const initialState = makeFakeInitState();
  const stubState: Partial<State> = {...initialState, app: {
    city: Cities['Cologne'],
    sortType: sortType,
  }};
  const { withStoreComponent } = withStore(<PlacesSorting />, stubState);

  it('renders correctly', () => {
    const expectedText = PlacesSortOptions[sortType].text;
    const { getByText, getAllByText } = render(withStoreComponent);

    expect(getByText('Sort by')).toBeInTheDocument();
    expect(getAllByText(expectedText).length).toBe(2);
  });

  it('toggles the options list when clicked', () => {
    const { getByText, container } = render(withStoreComponent);

    const sortingCaption = getByText('Sort by');

    fireEvent.click(sortingCaption);
    expect(container.getElementsByClassName('places__options--opened').length).toBe(1);

    fireEvent.click(sortingCaption);
    expect(container.getElementsByClassName('places__options--opened').length).toBe(0);
  });
});
