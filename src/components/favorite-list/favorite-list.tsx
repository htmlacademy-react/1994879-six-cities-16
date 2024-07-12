import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type FavoriteCityProps = {
  city: string;
  offers: Offer[];
}

type FavoriteListProps = {
  items: FavoriteCityProps[];
}

const FavoriteCity = ({city, offers}: FavoriteCityProps) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{city}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {offers.map((offer) =>
        <PlaceCard key={offer.id} className='favorites__card' {...offer} />)}
    </div>
  </li>
);

const FavoriteList = ({items}: FavoriteListProps) => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {items.map(({city, offers}) =>
            <FavoriteCity key={city} city={city} offers={offers} />)}
        </ul>
      </section>
    </div>
  </main>
);

export default FavoriteList;
