import { FC, memo, useState } from 'react';
import { PlacesSortType, PlacesSortOptions } from '../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { activeSortType, selectSortType } from '../../../store/selectors';

const PlacesSortingComponent: FC = () => {
  const dispatch = useAppDispatch();
  const [ isOpened, setIsOpened ] = useState(false);
  const activeSort = useAppSelector(activeSortType);

  const handleSortOptionClick = (sortType: PlacesSortType) => {
    dispatch(selectSortType(sortType));
    setIsOpened(!isOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => setIsOpened(!isOpened)} >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {PlacesSortOptions[activeSort].text}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`} >
        {Object.keys(PlacesSortOptions).map((key) => (
          <li
            className={`places__option ${activeSort === key && 'places__option--active'}`}
            tabIndex={0}
            key={key}
            onClick={() => handleSortOptionClick(key as PlacesSortType)}
          >
            {PlacesSortOptions[key as PlacesSortType].text}
          </li>
        ))}
      </ul>
    </form>
  );
};

export const PlacesSorting = memo(PlacesSortingComponent);
