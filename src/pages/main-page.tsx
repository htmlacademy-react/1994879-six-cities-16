import { DEFAULT_CITY } from '../const';
import { MockOffers } from '../mock/offers';
import { CityLinkList } from '../components/city-link';
import { NoPlaces } from '../components/no-places';
import { Places } from '../components/places';
import { isEmpty } from '../utils';
import { useState } from 'react';

const MainPage = (): JSX.Element => {
  const [ city, setCity ] = useState(DEFAULT_CITY);
  const cityOffers = MockOffers.filter((offer) => offer.city.name === city);
  const isEmptyOffers = isEmpty(cityOffers);

  return (
    <main className={`page__main page__main--index ${isEmptyOffers && 'page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityLinkList activeCity={city} onCityChange={setCity}/>
      </div>
      <div className="cities">
        {isEmptyOffers ?
          <NoPlaces city={city} /> :
          <Places city={city} offers={cityOffers}/>}
      </div>
    </main>
  );
};

export default MainPage;
