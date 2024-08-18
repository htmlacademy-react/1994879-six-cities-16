import { cityNames } from '../../../const';
import { FC, memo } from 'react';
import { CityLink } from '../city-link';
import { CityName } from '../../../types/city';

type CityLinkListProps = {
  activeCity: CityName;
}

const CityLinkListComponent: FC<CityLinkListProps> = ({ activeCity }) => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {cityNames.map((city) => (
        <li key={city} className="locations__item">
          <CityLink city={city} isActive={city === activeCity} />
        </li>
      ))}
    </ul>
  </section>
);

export const CityLinkList = memo(CityLinkListComponent);
