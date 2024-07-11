import { Comment } from '../../types/comment';
import ReviewForm from '../review-form/review-form';
import Review from '../review/review';

type OfferReviewProps = {
  comments: Comment[];
  isLogged: boolean;
}

const OfferReview = ({comments, isLogged}: OfferReviewProps) => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
    <ul className="reviews__list">
      {comments.map((comment) => <Review key={comment.id} comment={comment} />)}
    </ul>

    {isLogged ? <ReviewForm /> : null}
  </section>
);

export default OfferReview;
