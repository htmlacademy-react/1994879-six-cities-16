import { FC, useMemo } from 'react';
import { BookmarkButtonSettings, BookmarkButtonType } from './const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { applyFavorite } from '../../store/favorite-slice/thunk';
import { useAuth } from '../../hooks/use-auth';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { isNewFavoriteLoading } from '../../store/selectors';

type BookmarkButtonProps = {
  type: BookmarkButtonType;
  offerId: string;
  isActive: boolean;
}

export const BookmarkButton: FC<BookmarkButtonProps> = ({ type, offerId, isActive }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthorized = useAuth();
  const isLoading = useAppSelector(isNewFavoriteLoading);

  const { width, height } = BookmarkButtonSettings[type];

  const className = useMemo(() => {
    const buttonClassName = `${type}__bookmark-button`;
    return isActive ? `${buttonClassName} ${buttonClassName}--active` : buttonClassName;
  }, [isActive, type]);

  const handleButtonClick = () => {
    if (!isAuthorized) {
      navigate(AppRoute.Login);
      return ;
    }
    dispatch(applyFavorite({ offerId, status: !isActive }));
  };

  return (
    <button
      className={`${className} button`}
      type="button"
      onClick={handleButtonClick}
      disabled={isLoading}
    >
      <svg className={`${type}__bookmark-icon`} width={width} height={height}>
        <use href="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isActive ? 'In' : 'To'} bookmarks</span>
    </button>
  );
};
