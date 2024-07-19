import { AppRoute } from './const';

export const isEmpty = <T extends { length: number }>(data: T): boolean => data.length === 0;

export const getPageClass = (location: string): string => {
  switch (location) {
    case AppRoute.Main: return 'page--gray page--main';
    case AppRoute.Login: return 'page--gray page--login';
    default: return '';
  }
};

export const getRandomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
