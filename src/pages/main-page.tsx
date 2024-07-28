import { CityLinkList } from '../components/city-link';
import { NoPlaces } from '../components/no-places';
import { Places } from '../components/places';
import { isEmpty } from '../utils';
import { getActiveCity, selectCity } from '../store/app-slice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { CityName } from '../types/city';
import { getOffers } from '../store/offer-slice';


const MainPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { name: cityName } = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);

  const cityOffers = offers.filter((offer) => offer.city.name === cityName);
  const isEmptyOffers = isEmpty(cityOffers);

  const handleCityChange = (city: CityName) => dispatch(selectCity(city));

  return (
    <main className={`page__main page__main--index ${isEmptyOffers && 'page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityLinkList activeCity={cityName} onCityChange={handleCityChange} />
      </div>
      <div className="cities">
        {isEmptyOffers ?
          <NoPlaces city={cityName} /> :
          <Places city={cityName} offers={cityOffers}/>}
      </div>
    </main>
  );
};

export default MainPage;
