import { FC } from 'react';
import { Comment } from '../../types/comment';
import { ReviewForm } from '../review-form';
import { Review } from '../review/review';
import { REVIEWS_LIMIT, sortComments } from './utils';
import { useAppSelector } from '../../hooks';
import { getUserInfo } from '../../store/user-slice/selectors';

type OfferReviewsProps = {
  reviews: Comment[];
}

export const OfferReviews: FC<OfferReviewsProps> = ({ reviews }) => {
  const { isLogged } = useAppSelector(getUserInfo);
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
