import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { getToken, saveToken, dropToken } from './token';

describe('Token functions', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('getToken', () => {
    it('getToken returns an empty string when no token is stored in local storage', () => {
      expect(getToken()).toEqual('');
    });

    it('getToken returns the token when it is stored in local storage', () => {
      const token = 'my-token';
      saveToken(token);
      expect(getToken()).toEqual(token);
    });

    it('getToken returns an empty string when an empty string is stored in local storage', () => {
      saveToken('');
      expect(getToken()).toEqual('');
    });
  });

  describe('saveToken', () => {
    it('saveToken stores the token in local storage', () => {
      const token = 'my-token';
      saveToken(token);
      expect(localStorage.getItem('six-cities-token')).toEqual(token);
    });

    it('saveToken stores an empty string in local storage when an empty string is passed', () => {
      saveToken('');
      expect(localStorage.getItem('six-cities-token')).toEqual('');
    });
  });

  describe('dropToken', () => {
    it('dropToken removes the token from local storage', () => {
      const token = 'my-token';
      saveToken(token);
      dropToken();
      expect(localStorage.getItem('six-cities-token')).toBeNull();
    });

    it('dropToken does not throw an error when no token is stored in local storage', () => {
      expect(() => dropToken()).not.toThrow();
    });
  });
});
