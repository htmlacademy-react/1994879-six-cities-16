import { render } from '@testing-library/react';
import { OfferReviews } from './offer-reviews';
import { Comment } from '../../types/comment';
import { makeFakeComment, makeFakeComments, makeFakeInitState, makeFakeNotAuthState } from '../../mock/mock';
import { withStore } from '../../mock/mock-component';
import { State } from '../../hooks';
import { REVIEWS_LIMIT } from './utils';

describe('OfferReviews component', () => {
  const reviews: Comment[] = makeFakeComments();
  const initialState = makeFakeInitState();
  const stubState: Partial<State> = {...initialState, comment: {
    comments: { entity: reviews, status: 'none'},
    newComment: { entity: undefined, status: 'none'}
  }};

  it('renders correctly', () => {
    const { withStoreComponent } = withStore(<OfferReviews reviews={reviews} />, stubState);

    const { container, getByText } = render(withStoreComponent);
    const element = getByText('Reviews ·');

    expect(element).toHaveTextContent(`${reviews.length}`);
    expect(container.querySelector('.offer__reviews')).toBeInTheDocument();
  });

  it('renders limited number of reviews', () => {
    const reviewsOverLimit: Comment[] = Array.from({ length: REVIEWS_LIMIT + 5 }, makeFakeComment);
    const { withStoreComponent } = withStore(<OfferReviews reviews={reviewsOverLimit} />, stubState);
    const { getAllByRole } = render(withStoreComponent);
    const reviewItems = getAllByRole('listitem');
    expect(reviewItems).toHaveLength(REVIEWS_LIMIT);
  });

  it('renders ReviewForm when user is authorized', () => {
    const { withStoreComponent } = withStore(<OfferReviews reviews={reviews} />, stubState);
    const { getByText } = render(withStoreComponent);
    expect(getByText('Your review')).toBeInTheDocument();
  });

  it('does not render ReviewForm when user is not authorized', () => {
    const notAuthState = makeFakeNotAuthState();
    const { withStoreComponent } = withStore(<OfferReviews reviews={reviews} />, notAuthState);
    const { queryByText } = render(withStoreComponent);
    expect(queryByText('Your review')).not.toBeInTheDocument();
  });
});
