import { Range } from './const';
import { inRange } from './utils';

describe('inRange function', () => {
  const range: Range = { min: 1, max: 10 };

  it('returns true when value is within the range', () => {
    expect(inRange(5, range)).toBe(true);
  });

  it('returns false when value is below the range', () => {
    expect(inRange(0, range)).toBe(false);
  });

  it('returns false when value is above the range', () => {
    expect(inRange(11, range)).toBe(false);
  });

  it('returns true when value is equal to the minimum of the range', () => {
    expect(inRange(1, range)).toBe(true);
  });

  it('returns true when value is equal to the maximum of the range', () => {
    expect(inRange(10, range)).toBe(true);
  });
});
