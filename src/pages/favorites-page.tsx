import { FC } from 'react';
import FavoriteEmpty from '../components/favorite-empty/favorite-empty';
import { FavoriteList } from '../components/favorite-list';
import { Footer } from '../components/footer';
import { isEmpty } from '../utils';
import { useAppSelector } from '../hooks';
import { getFavorites } from '../store/favorite-slice/selectors';

export const FavoritesPage: FC = () => {
  const { value: offers = [] } = useAppSelector(getFavorites);
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
