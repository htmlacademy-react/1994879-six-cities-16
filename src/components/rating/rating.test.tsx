import { render } from '@testing-library/react';
import { Rating } from './rating';
import { ratingToPercent } from './utils';
import { RatingType } from './const';

describe('Rating component', () => {
  it('renders correctly', () => {
    const rating = 4;
    const { getByText, container } = render(<Rating type="offer" rating={rating} />);
    expect(getByText(String(rating))).toBeInTheDocument();
    expect(container.getElementsByClassName('offer__rating').length).toBe(1);
    expect(container.getElementsByClassName('rating__stars').length).toBe(1);
    expect(container.getElementsByClassName('offer__rating-value').length).toBe(1);
  });

  it('renders correct rating value for offer', () => {
    const rating = 4;
    const { queryByText } = render(<Rating type="offer" rating={rating} />);
    expect(queryByText(String(rating))).toBeInTheDocument();
  });

  it('renders correct rating value for none-offer type', () => {
    const rating = 4;
    const { queryByText } = render(<Rating type="place-card" rating={rating} />);
    expect(queryByText(String(rating))).not.toBeInTheDocument();
  });

  it('renders correct rating percentage', () => {
    const rating = 3;
    const { getByTestId } = render(<Rating type="offer" rating={rating} />);
    const ratingPercent = ratingToPercent(rating);
    const element = getByTestId('test-style-with');
    expect(element.style.width).toBe(ratingPercent);
  });

  it('renders differently for different types', () => {
    const type: RatingType = 'reviews';
    const { container } = render(<Rating type={type} rating={1} />);
    expect(container.getElementsByClassName(`${type}__rating`).length).toBe(1);
  });
});
