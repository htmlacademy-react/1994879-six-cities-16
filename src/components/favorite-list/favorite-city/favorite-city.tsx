import { Link } from 'react-router-dom';
import { Offer } from '../../../types/offer';
import { PlaceCard } from '../../place-card';
import { AppRoute } from '../../../const';
import { CityName } from '../../../types/city';
import { FC } from 'react';
import { useAppDispatch } from '../../../hooks';
import { selectCity } from '../../../store/selectors';


export type FavoriteCityProps = {
  city: CityName;
  offers: Offer[];
}

export const FavoriteCity: FC<FavoriteCityProps> = ({ city, offers }) => {
  const dispatch = useAppDispatch();

  const handleLinkClick = () => dispatch(selectCity(city));
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={AppRoute.Main} className="locations__item-link" onClick={handleLinkClick} data-testId='test-location'>
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
};
