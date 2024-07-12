import { DEFAULT_CITY } from '../const';
import { MockOffers } from '../mock/offers';
import LocationList from '../components/location-list/location-list';
import NoPlaces from '../components/no-places/no-places';
import Places from '../components/places/places';
import { isEmpty } from '../utils';

const Main = (): JSX.Element => {

  const city = DEFAULT_CITY;
  const cityOffers = MockOffers.filter((offer) => offer.city.name === city);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList />
        </div>
        <div className="cities">
          {isEmpty(cityOffers) ? <NoPlaces city={city} /> : <Places city={city} offers={cityOffers}/>}
        </div>
      </main>
    </div>);
};

export default Main;
