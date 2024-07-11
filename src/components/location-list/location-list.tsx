import { CITIES, DEFAULT_CITY } from '../../const';

interface LocationProps {
  city: string;
  isSelected: boolean;
}

const Location = ({ city, isSelected }: LocationProps): JSX.Element => (
  <li key={city} className="locations__item">
    <a className={`locations__item-link tabs__item ${isSelected ? 'tabs__item--active' : ''}`} href="#">
      <span>{city}</span>
    </a>
  </li>
);

const LocationList = (): JSX.Element => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <Location key={city} city={city} isSelected={city === DEFAULT_CITY} />
      ))}
    </ul>
  </section>
);

export default LocationList;
