import { FC, useCallback, useState } from 'react';
import { CommentLimit, DEFAULT_RATING, RatingLimit, Ratings } from './const';
import { RatingStars } from '../rating-stars';
import { inRange } from './utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CommentPost, postComment } from '../../store/comment-slice/thunk';
import { useParams } from 'react-router-dom';
import { newComment } from '../../store/selectors';

export const ReviewForm: FC = () => {
  const { id = '' } = useParams();
  const dispatch = useAppDispatch();
  const { isPosting } = useAppSelector(newComment);
  const [ rating, setRating ] = useState(DEFAULT_RATING);
  const [ text, setText ] = useState('');
  const isValidData = inRange(rating, RatingLimit) && inRange(text.length, CommentLimit);

  const handleInputChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setRating(Number(value));
  }, [setRating]);

  const handleTextareaChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;
    setText(value);
  };

  const handleSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const data: CommentPost = {
      offerId: id,
      data: {
        rating,
        comment: text,
      }
    };
    dispatch(postComment(data))
      .unwrap()
      .then(() => {
        setRating(DEFAULT_RATING);
        setText('');
      });
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmitForm}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Ratings.map(({ value, title }) =>
          (
            <RatingStars
              key={value}
              value={value}
              isChecked={value === rating}
              title={title}
              onRatingChange={handleInputChange}
            />
          ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={text}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextareaChange}
        disabled={isPosting}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValidData || isPosting} >Submit</button>
      </div>
    </form>
  );
};
