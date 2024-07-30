import { Cities } from '../../const';
import { FC } from 'react';
import { CityLink } from './city-link';
import { CityName } from '../../types/city';

type CityLinkListProps = {
  activeCity: CityName;
}

export const CityLinkList: FC<CityLinkListProps> = ({ activeCity }) => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {Object.keys(Cities).map((city) => (
        <li key={city} className="locations__item">
          <CityLink city={city as CityName} isActive={city === activeCity} />
        </li>
      ))}
    </ul>
  </section>
);
