export const DEFAULT_CITY = 'Paris';
export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const MockedHeaderSettings = {
  email: 'Oliver.conner@gmail.com',
  favoriteCount: 3,
  isLogged: true
};

export const DateOptions: Intl.DateTimeFormatOptions = {
  month: 'long',
  year: 'numeric'
};

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  All = '*'
}

export enum AuthenticationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
