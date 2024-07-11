import FavoriteEmpty from '../components/favorite-empty/favorite-empty';
import FavoriteList from '../components/favorite-list/favorite-list';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { MockFavorites } from '../mock/favorites';
import { Offer } from '../types/offer';
import { isEmpty } from '../utils';

const Favorites = () => {
  const favorites = MockFavorites;
  const isEmptyFavorites = isEmpty(favorites);

  /* to-do: просто заготовка */
  const items: {
    city: string;
    offers: Offer[];
  }[] = [
    {
      city: favorites[0]?.city.name,
      offers: favorites,
    }
  ];

  return (
    <div className={`page ${isEmptyFavorites ? 'page--favorites-empty' : ''}`}>
      <Header isActiveClass={false} isLogged/>
      {isEmptyFavorites ? <FavoriteEmpty /> : <FavoriteList items={items}/>}
      <Footer />
    </div>);
};

export default Favorites;