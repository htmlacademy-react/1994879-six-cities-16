import { FC, memo } from 'react';

type RatingStarsProps = {
  value: number;
  title: string;
  isChecked: boolean;
  onRatingChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const RatingStarsComponent: FC<RatingStarsProps> = ({ value, title, isChecked, onRatingChange }) => {
  const id = `${value}-stars`;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={id}
        type="radio"
        checked={isChecked}
        onChange={onRatingChange}
      />
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use href="#icon-star"></use>
        </svg>
      </label>
    </>
  );
};

export const RatingStars = memo(RatingStarsComponent);
