import { FC } from 'react';
import { FavoriteCity, FavoriteCityProps } from './favorite-city';

type FavoriteListProps = {
  list: FavoriteCityProps[];
}

export const FavoriteList: FC<FavoriteListProps> = ({ list }) => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {list.map(({city, offers}) =>
            <FavoriteCity key={city} city={city} offers={offers} />)}
        </ul>
      </section>
    </div>
  </main>
);
