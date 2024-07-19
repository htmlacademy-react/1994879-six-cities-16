import { DEFAULT_CITY } from '../const';
import { MockOffers } from '../mock/offers';
import LocationList from '../components/location-list/location-list';
import NoPlaces from '../components/no-places/no-places';
import Places from '../components/places/places';
import { isEmpty } from '../utils';

const MainPage = (): JSX.Element => {

  const city = DEFAULT_CITY;
  const cityOffers = MockOffers.filter((offer) => offer.city.name === city);
  const isEmptyOffers = isEmpty(cityOffers);

  return (
    <main className={`page__main page__main--index ${isEmptyOffers && 'page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationList />
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
