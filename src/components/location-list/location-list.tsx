import { NavLink } from 'react-router-dom';
import { AppRoute, CITIES } from '../../const';
import { FC } from 'react';

interface LocationProps {
  city: string;
}

const Location: FC<LocationProps> = ({ city }) => (
  <li key={city} className="locations__item">
    <NavLink
      to={AppRoute.Main}
      className={({ isActive }) => `locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
    >
      <span>{city}</span>
    </NavLink>
  </li>
);

const LocationList: FC = () => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => <Location key={city} city={city} />)}
    </ul>
  </section>
);

export default LocationList;
