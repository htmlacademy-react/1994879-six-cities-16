import { FC } from 'react';

type RatingStarsProps = {
  value: number;
  title: string;
  onRatingChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RatingStars: FC<RatingStarsProps> = ({ value, title, onRatingChange }) => {
  const id = `${value}-stars`;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={id}
        type="radio"
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