import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import { AppRoute } from '../../const';
import { CityName } from '../../types/city';

type FavoriteCityProps = {
  city: CityName;
  offers: Offer[];
}

type FavoriteListProps = {
  list: FavoriteCityProps[];
}

const FavoriteCity = ({ city, offers }: FavoriteCityProps) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link to={AppRoute.Main} className="locations__item-link">
          <span>{city}</span>
        </Link>
      </div>
    </div>
    <div className="favorites__places">
      {offers.map((offer) =>
        <PlaceCard key={offer.id} typeCard='favorites' offer={offer} />)}
    </div>
  </li>
);

const FavoriteList = ({ list }: FavoriteListProps) => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {list.map(({city, offers}) =>
            <FavoriteCity key={city} city={city} offers={offers} />)}
        </ul>
      </section>
    </div>
  </main>
);

export default FavoriteList;
