import { getBedroomsText, getAdultsText } from './utils';

describe('getBedroomsText function', () => {
  it('returns correct text for 1 bedroom', () => {
    expect(getBedroomsText(1)).toBe('1 Bedroom');
  });

  it('returns correct text for multiple bedrooms', () => {
    expect(getBedroomsText(2)).toBe('2 Bedrooms');
    expect(getBedroomsText(3)).toBe('3 Bedrooms');
  });
});

describe('getAdultsText function', () => {
  it('returns correct text for 1 adult', () => {
    expect(getAdultsText(1)).toBe('Max 1 adult');
  });

  it('returns correct text for multiple adults', () => {
    expect(getAdultsText(2)).toBe('Max 2 adults');
    expect(getAdultsText(3)).toBe('Max 3 adults');
  });
});
