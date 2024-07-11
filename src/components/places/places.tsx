import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

interface PlacesProps {
  city: string;
  offers: Offer[];
}

const PlacesSorting = () => (
  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type" tabIndex={0}>
      Popular
      <svg className="places__sorting-arrow" width="7" height="4">
        <use href="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className="places__options places__options--custom ">  {/* places__options--opened */}
      <li className="places__option places__option--active" tabIndex={0} key="popular">Popular</li>
      <li className="places__option" tabIndex={0} key="price-low">Price: low to high</li>
      <li className="places__option" tabIndex={0} key="price-high">Price: high to low</li>
      <li className="places__option" tabIndex={0} key="top-rated">Top rated first</li>
    </ul>
  </form>
);

const Places = ({ city, offers }: PlacesProps) => (
  <div className="cities__places-container container">
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offers.length} places to stay in ${city}`}</b>
      <PlacesSorting />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <PlaceCard key={offer.id} className='cities__card' {...offer} />
        )}
      </div>
    </section>
    <div className="cities__right-section">
      <section className="cities__map map"></section>
    </div>
  </div>
);

export default Places;
