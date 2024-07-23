import { Offer } from '../types/offer';

export const MockFavorites: Offer[] = [
  {
    'id': '7c941d2d-fc4c-4325-ae80-6fa0db8525d2',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 166,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87961000000001,
      'longitude': 2.353499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': 'a64b6904-6879-455a-9ca8-2e9e0eec168a',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 109,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.3454990000000002,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 3.9
  },
  {
    'id': '1bef96d2-94a4-4da2-a737-031c94f7dbf1',
    'title': 'Wood and stone place',
    'type': 'house',
    'price': 979,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.842557,
      'longitude': 4.3536969999999995,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4.3
  },
];
