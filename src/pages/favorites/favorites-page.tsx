import { FC, useMemo } from 'react';
import { FavoriteEmpty } from '../../components/favorite-empty';
import { FavoriteList } from '../../components/favorite-list';
import { Footer } from '../../components/footer';
import { isEmpty } from '../../utils';
import { allFavorites } from '../../store/selectors';
import { Spinner } from '../../components/spinner';
import { useAppSelector } from '../../hooks';
import { LoadingMessage } from '../../const';

export const FavoritesPage: FC = () => {
  const { favorites: offers, isLoading } = useAppSelector(allFavorites);

  const isEmptyFavorites = useMemo(() => isEmpty(offers), [offers]);
  const groupedOffers = useMemo(() => Array.from(new Set(offers.map((offer) => offer.city.name)))
    .map((city) => ({
      city,
      offers: offers.filter((offer) => offer.city.name === city),
    })), [offers]);

  if (isLoading) {
    return <Spinner message={LoadingMessage.Favorites} />;
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
