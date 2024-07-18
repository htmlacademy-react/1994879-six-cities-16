import { AppRoute } from './const';

export const isEmpty = <T extends { length: number }>(data: T): boolean => data.length === 0;

export const getPageClass = (location: string): string => {
  switch (location) {
    case AppRoute.Main: return 'page--gray page--main';
    case AppRoute.Login: return 'page--gray page--login';
    default: return '';
  }
};
