import { FC } from 'react';
import { Comment } from '../../types/comment';
import ReviewForm from '../review-form/review-form';
import Review from '../review/review';
import { MockedHeaderSettings } from '../../const';

type OfferReviewsProps = {
  reviews: Comment[];
}

export const OfferReviews: FC<OfferReviewsProps> = ({ reviews }) => {
  const {isLogged} = MockedHeaderSettings;
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <Review key={review.id} review={review} />)}
      </ul>
      {isLogged && <ReviewForm />}
    </section>
  );
};
