import { describe, expect, it } from 'vitest';
import { isEmpty, getPageClass, getHelmetTitle, getRandomInt, getCapitalizedText, getOfferRoute, getRandomCity } from './utils';
import { AppRoute, cityNames } from './const';

describe('Utils', () => {
  describe('isEmpty', () => {
    it('returns true for empty array', () => {
      expect(isEmpty([])).toEqual(true);
    });

    it('returns false for non-empty array', () => {
      expect(isEmpty([1, 2, 3])).toEqual(false);
    });

    it('returns true for empty string', () => {
      expect(isEmpty('')).toEqual(true);
    });

    it('returns false for non-empty string', () => {
      expect(isEmpty('hello')).toEqual(false);
    });
  });

  describe('getPageClass', () => {
    it('getPageClass returns "page--gray page--main" for AppRoute.Main', () => {
      expect(getPageClass(AppRoute.Main, false)).toEqual('page--gray page--main');
    });

    it('getPageClass returns "page--gray page--login" for AppRoute.Login', () => {
      expect(getPageClass(AppRoute.Login, false)).toEqual('page--gray page--login');
    });

    it('getPageClass returns "page--favorites-empty" for AppRoute.Favorites with empty favorites', () => {
      expect(getPageClass(AppRoute.Favorites, true)).toEqual('page--favorites-empty');
    });

    it('getPageClass returns empty string for unknown page', () => {
      expect(getPageClass('unknown', false)).toEqual('');
    });
  });

  describe('getHelmetTitle', () => {
    it('returns correct title for main page', () => {
      expect(getHelmetTitle(AppRoute.Main)).toBe('6 Cities');
    });

    it('returns correct title for login page', () => {
      expect(getHelmetTitle(AppRoute.Login)).toBe('6 Cities: authorization');
    });

    it('returns correct title for favorites page', () => {
      expect(getHelmetTitle(AppRoute.Favorites)).toBe('6 Cities: favorites');
    });

    it('returns correct title for offer page', () => {
      expect(getHelmetTitle(AppRoute.Offer)).toBe('6 Cities: offer');
    });

    it('returns default title for unknown page', () => {
      expect(getHelmetTitle('unknown')).toBe('6 Cities');
    });
  });

  describe('getRandomInt', () => {
    it('returns a random integer within the specified range', () => {
      const min = 1;
      const max = 10;
      const result = getRandomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });
  });

  describe('getCapitalizedText', () => {
    it('capitalizes the first letter of the input string', () => {
      expect(getCapitalizedText('hello')).toBe('Hello');
    });

    it('leaves the rest of the string unchanged', () => {
      expect(getCapitalizedText('hello world')).toBe('Hello world');
    });
  });

  describe('getOfferRoute', () => {
    it('replaces the :id placeholder with the provided id', () => {
      const id = '123';
      expect(getOfferRoute(id)).toBe(`/offer/${id}`);
    });
  });

  describe('getRandomCity', () => {
    it('returns a random city from the cityNames array', () => {
      const result = getRandomCity();
      expect(cityNames.includes(result)).toBe(true);
    });
  });
});

