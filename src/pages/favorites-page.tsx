import { FC, useMemo } from 'react';
import { FavoriteEmpty } from '../components/favorite-empty';
import { FavoriteList } from '../components/favorite-list';
import { Footer } from '../components/footer';
import { isEmpty } from '../utils';
import { favoritesOffers } from '../store/selectors';
import { Spinner } from '../components/spinner';
import { useAppSelector } from '../hooks';

export const FavoritesPage: FC = () => {
  const { favorites: offers, isLoading } = useAppSelector(favoritesOffers);

  const isEmptyFavorites = useMemo(() => isEmpty(offers), [offers]);
  const groupedOffers = useMemo(() => Array.from(new Set(offers.map((offer) => offer.city.name)))
    .map((city) => ({
      city,
      offers: offers.filter((offer) => offer.city.name === city),
    })), [offers]);

  if (isLoading) {
    return <Spinner message='Loading favorites offers' />;
  }

  return (
    <>
      {isEmptyFavorites ?
        <FavoriteEmpty /> :
        <FavoriteList list={groupedOffers}/>}
      <Footer />
    </>
  );
};
