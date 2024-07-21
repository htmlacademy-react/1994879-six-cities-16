import { CITIES } from '../../const';
import { FC } from 'react';
import { CityLink } from './city-link';

type CityLinkListProps = {
  activeCity: string;
  onCityChange: (city: string) => void;
}

export const CityLinkList: FC<CityLinkListProps> = ({ activeCity, onCityChange }) => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li key={city} className="locations__item">
          <CityLink city={city} isActive={city === activeCity} onCityChange={onCityChange}/>
        </li>
      ))}
    </ul>
  </section>
);
