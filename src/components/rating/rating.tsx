import { FC, memo } from 'react';
import { ratingToPercent } from './utils';
import { RatingType } from './const';

type RatingProps = {
  type: RatingType;
  rating: number;
}

const RatingComponent: FC<RatingProps> = ({ type, rating }) => {
  const valueComponent = <span className="offer__rating-value rating__value">{rating}</span>;

  return (
    <div className={`${type}__rating rating`}>
      <div className={`${type}__stars rating__stars`}>
        <span style={{ width: ratingToPercent(rating) }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {type === 'offer' && valueComponent}
    </div>
  );
};

export const Rating = memo(RatingComponent);
