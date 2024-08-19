import { ratingToPercent } from './utils';

describe('ratingToPercent', () => {
  it('converts rating to percent', () => {
    expect(ratingToPercent(4.5)).toBe('100%');
    expect(ratingToPercent(4.2)).toBe('80%');
    expect(ratingToPercent(3.8)).toBe('80%');
    expect(ratingToPercent(5)).toBe('100%');
  });

  it('converts rating to percent', () => {
    expect(ratingToPercent(6)).toBe('100%');
    expect(ratingToPercent(0)).toBe('20%');
  });
});
