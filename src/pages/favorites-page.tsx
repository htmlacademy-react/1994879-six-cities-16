import FavoriteEmpty from '../components/favorite-empty/favorite-empty';
import FavoriteList from '../components/favorite-list/favorite-list';
import Footer from '../components/footer/footer';
import { MockFavorites } from '../mock/favorites';
import { isEmpty } from '../utils';

const Favorites = () => {
  const offers = MockFavorites;
  const isEmptyFavorites = isEmpty(offers);
  const cities = [...new Set(offers.map((offer) => offer.city.name))];
  const favorites = cities.map((city) => ({
    city,
    offers: offers.filter((offer) => offer.city.name === city),
  }));

  return (
    <>
      {isEmptyFavorites ?
        <FavoriteEmpty /> :
        <FavoriteList list={favorites}/>}
      <Footer />
    </>
  );
};

export default Favorites;
