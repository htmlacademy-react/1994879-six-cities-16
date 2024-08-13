import { FC, memo, useCallback } from 'react';
import { ratingToPercent } from './utils';
import { RatingType } from './const';

type RatingProps = {
  type: RatingType;
  rating: number;
}

const RatingComponent: FC<RatingProps> = ({ type, rating }) => {
  const ratingValue = type === 'offer' ? <span className="offer__rating-value rating__value">{rating}</span> : null;
  const ratingPercent = useCallback(() => ratingToPercent(rating), [rating]);

  return (
    <div className={`${type}__rating rating`}>
      <div className={`${type}__stars rating__stars`}>
        <span style={{ width: ratingPercent() }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {ratingValue}
    </div>
  );
};

export const Rating = memo(RatingComponent);
