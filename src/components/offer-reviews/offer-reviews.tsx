import { FC, memo } from 'react';
import { Comment } from '../../types/comment';
import { ReviewForm } from '../review-form';
import { Review } from '../review/review';
import { REVIEWS_LIMIT, sortComments } from './utils';
import { useAuth } from '../../hooks/use-auth';

type OfferReviewsProps = {
  reviews: Comment[];
}

const OfferReviewsComponents: FC<OfferReviewsProps> = ({ reviews }) => {
  const { isAuthorized } = useAuth();
  const limitedReviews = [...reviews].sort(sortComments).slice(0, REVIEWS_LIMIT);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {limitedReviews.map((review) => <Review key={review.id} review={review} />)}
      </ul>
      {isAuthorized && <ReviewForm />}
    </section>
  );
};

export const OfferReviews = memo(OfferReviewsComponents,
  (prevProps, nextProps) => prevProps.reviews === nextProps.reviews
);
