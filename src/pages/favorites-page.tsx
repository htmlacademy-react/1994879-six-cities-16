import { FC, useEffect } from 'react';
import { FavoriteEmpty } from '../components/favorite-empty';
import { FavoriteList } from '../components/favorite-list';
import { Footer } from '../components/footer';
import { isEmpty } from '../utils';
import { useAppDispatch, useAppSelector } from '../hooks';
import { favoritesOffers } from '../store/selectors';
import { Spinner } from '../components/spinner';
import { fetchFavorites } from '../store/favorite-slice/thunk';

export const FavoritesPage: FC = () => {
  const dispatch = useAppDispatch();
  const { favorites: offers, isLoading } = useAppSelector(favoritesOffers);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner message='Loading favorites offers' />;
  }

  const isEmptyFavorites = isEmpty(offers);
  const groupedOffers = Array.from(new Set(offers.map((offer) => offer.city.name)))
    .map((city) => ({
      city,
      offers: offers.filter((offer) => offer.city.name === city),
    }));

  return (
    <>
      {isEmptyFavorites ?
        <FavoriteEmpty /> :
        <FavoriteList list={groupedOffers}/>}
      <Footer />
    </>
  );
};
