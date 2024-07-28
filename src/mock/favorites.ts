import { Offer } from '../types/offer';

export const MockFavorites: Offer[] = [
  {
    'id': '6ba1dd4b-66cc-40b4-97cd-c965b0fe4434',
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
    'id': '7ff1b879-6ec3-4153-916a-d8e6ece36799',
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

export const MockNearOffers: Offer[] = [
  {
    'id': '941cf58c-e73f-47dc-b4df-3fa1fb2b11c6',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 635,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
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
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.5
  },
  {
    'id': 'bcf2f2a7-e3fb-4485-8777-e60c94365848',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'hotel',
    'price': 272,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.843610000000005,
      'longitude': 2.338499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.3
  },
  {
    'id': '3fbc98e6-6c9e-4b0c-9c0a-ba8cd5a0eb37',
    'title': 'Loft Studio in the Central Area',
    'type': 'house',
    'price': 916,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.84461,
      'longitude': 2.374499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.6
  },
];
