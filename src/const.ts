const DEFAULT_CITY = 'Paris';
const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const MockedHeaderSettings = {
  email: 'Oliver.conner@gmail.com',
  favoriteCount: 3,
  isLogged: true
};

const DateOptions: Intl.DateTimeFormatOptions = {
  month: 'long',
  year: 'numeric'
};

export { CITIES, DEFAULT_CITY, DateOptions, MockedHeaderSettings };
