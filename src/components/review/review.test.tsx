import { render } from '@testing-library/react';
import { Review } from './review';
import { makeFakeComment } from '../../mock/mock';
import { ratingToPercent } from '../rating/utils';

describe('Review component', () => {
  const comment = makeFakeComment();

  it('renders correctly', () => {
    const { getByText } = render(<Review review={comment} />);

    expect(getByText(comment.comment)).toBeInTheDocument();
    expect(getByText(comment.user.name)).toBeInTheDocument();
  });

  it('renders correct date format', () => {
    const { getByText } = render(<Review review={{...comment, date: '2022-01-02T12:00:00.000Z'}} />);

    expect(getByText('January 2022')).toBeInTheDocument();
  });

  it('renders correct rating', () => {
    const rating = 3;
    const { getByTestId } = render(<Review review={{...comment, rating: rating}} />);
    const ratingPercent = ratingToPercent(rating);
    const element = getByTestId('test-style-with');
    expect(element.style.width).toBe(ratingPercent);
  });
});
