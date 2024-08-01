import { AppRoute, cityNames } from './const';

export const isEmpty = <T extends { length: number }>(data: T): boolean => data.length === 0;

export const getPageClass = (location: string, favoritesCount: number): string => {
  switch (location) {
    case AppRoute.Main: return 'page--gray page--main';
    case AppRoute.Login: return 'page--gray page--login';
    case AppRoute.Favorites: return favoritesCount === 0 ? 'page--favorites-empty' : '';
    default: return '';
  }
};

export const getHelmetTitle = (location: string): string => {
  switch (location) {
    case AppRoute.Offer: return '6 Cities: offer';
    case AppRoute.Login: return '6 Cities: authorization';
    case AppRoute.Favorites: return '6 Cities: favorites';
    default: return '6 Cities';
  }
};

export const getRandomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

export const getCapitalizedText = (text: string) => {
  const [firstLetter,...rest] = text;
  return `${firstLetter.toUpperCase()}${rest.join('')}`;
};

export const getOfferRoute = (id: string) => AppRoute.Offer.replace(':id', id);

export const getRandomCity = () => cityNames[getRandomInt(0, cityNames.length - 1)];
