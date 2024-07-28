import { FC, useState } from 'react';
import { OfferSortFunction, PlacesOptionType, PlacesOptions } from './const';

type PlacesSortingProps = {
  onSort: (sortFunction: OfferSortFunction) => void;
}

export const PlacesSorting: FC<PlacesSortingProps> = ({ onSort }) => {
  const [ isOpened, setIsOpened ] = useState(false);
  const [ activeOption, setActiveOption ] = useState<PlacesOptionType>('popular');

  const handleOptionClick = (option: PlacesOptionType) => {
    setActiveOption(option);
    onSort(PlacesOptions[option].sort);
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => setIsOpened(!isOpened)} >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {PlacesOptions[activeOption].text}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`} >
        {Object.keys(PlacesOptions).map((key) => (
          <li
            className={`places__option ${activeOption === key && 'places__option--active'}`}
            tabIndex={0}
            key={key}
            onClick={() => handleOptionClick(key as PlacesOptionType)}
          >
            {PlacesOptions[key as PlacesOptionType].text}
          </li>
        ))}
      </ul>
    </form>
  );
};
