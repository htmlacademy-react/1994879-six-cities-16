import { FC } from 'react';

export const PlacesSorting: FC = () => {
  const isOpened: boolean = false;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        <li className="places__option places__option--active" tabIndex={0} key="popular">Popular</li>
        <li className="places__option" tabIndex={0} key="price-low">Price: low to high</li>
        <li className="places__option" tabIndex={0} key="price-high">Price: high to low</li>
        <li className="places__option" tabIndex={0} key="top-rated">Top rated first</li>
      </ul>
    </form>
  );
};
