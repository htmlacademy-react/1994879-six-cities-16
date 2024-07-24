import { FC } from 'react';
import { Comment } from '../../types/comment';
import { ReviewForm } from '../review-form';
import { Review } from '../review/review';
import { MockedHeaderSettings } from '../../const';
import { REVIEWS_LIMIT, sortComments } from './utils';

type OfferReviewsProps = {
  reviews: Comment[];
}

export const OfferReviews: FC<OfferReviewsProps> = ({ reviews }) => {
  const { isLogged } = MockedHeaderSettings;
  const limitedReviews = [...reviews].sort(sortComments).slice(0, REVIEWS_LIMIT);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {limitedReviews.map((review) => <Review key={review.id} review={review} />)}
      </ul>
      {isLogged && <ReviewForm />}
    </section>
  );
};