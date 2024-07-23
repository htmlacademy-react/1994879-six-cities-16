import { FC } from 'react';
import { BookmarkButtonSettings, BookmarkButtonType } from './const';

type BookmarkButtonProps = {
  type: BookmarkButtonType;
  isActive?: boolean;
}

export const BookmarkButton: FC<BookmarkButtonProps> = ({ type, isActive }) => {
  const { width, height } = BookmarkButtonSettings[type];
  const baseClass = `${type}__bookmark-button`;
  const className = isActive ? `${baseClass} ${baseClass}--active` : baseClass;

  return (
    <button className={`${className} button`} type="button">
      <svg className={`${type}__bookmark-icon`} width={width} height={height}>
        <use href="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isActive ? 'In' : 'To'} bookmarks</span>
    </button>
  );
};
