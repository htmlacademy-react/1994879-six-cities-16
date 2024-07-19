import { CITIES, DEFAULT_CITY } from '../../const';
import { FC } from 'react';
import { CityLink } from './city-link';

export const CityLinkList: FC = () => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li key={city} className="locations__item">
          <CityLink city={city} isActive={city === DEFAULT_CITY}/>
        </li>
      ))}
    </ul>
  </section>
);
