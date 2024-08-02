import { FC } from 'react';
import { BookmarkButtonSettings, BookmarkButtonType } from './const';
import { useAppDispatch } from '../../hooks';
import { applyFavorite } from '../../store/favorite-slice/thunk';

type BookmarkButtonProps = {
  type: BookmarkButtonType;
  offerId: string;
  isActive: boolean;
}

export const BookmarkButton: FC<BookmarkButtonProps> = ({ type, offerId, isActive }) => {
  const dispatch = useAppDispatch();
  const { width, height } = BookmarkButtonSettings[type];
  const baseClass = `${type}__bookmark-button`;
  const className = isActive ? `${baseClass} ${baseClass}--active` : baseClass;

  const handleButtonClick = () => {
    dispatch(applyFavorite({ offerId, status: !isActive }));
  };

  return (
    <button className={`${className} button`} type="button" onClick={handleButtonClick}>
      <svg className={`${type}__bookmark-icon`} width={width} height={height}>
        <use href="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isActive ? 'In' : 'To'} bookmarks</span>
    </button>
  );
};
