import { FC } from 'react';
import { ratingToPercent } from './utils';
import { RatingType } from './const';

type RatingProps = {
  type: RatingType;
  rating: number;
}

export const Rating: FC<RatingProps> = ({ type, rating }) => (
  <div className={`${type}__rating rating`}>
    <div className={`${type}__stars rating__stars`}>
      <span style={{ width: ratingToPercent(rating) }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  </div>
);
