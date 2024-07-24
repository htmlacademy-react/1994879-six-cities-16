import { FC } from 'react';
import { DateOptions } from '../../const';
import { Comment } from '../../types/comment';
import { Rating } from '../rating';
import { UserAvatar } from '../user-avatar';

type ReviewProps = {
  review: Comment;
}

export const Review: FC<ReviewProps> = ({ review }) => {
  const { comment, date, rating, user } = review;
  const formattedDate = new Intl.DateTimeFormat('en-US', DateOptions).format(new Date(date));
  const dateTime = date.toISOString().split('T')[0];

  return (
    <li className="reviews__item">
      <UserAvatar type='reviews' user={user} />
      <div className="reviews__info">
        <Rating type='reviews' rating={rating} />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={dateTime}>{formattedDate}</time>
      </div>
    </li>
  );
};
