import { render } from '@testing-library/react';
import { OfferFeatures } from './offer-features';
import { getCapitalizedText } from '../../utils';
import { getAdultsText, getBedroomsText } from './utils';

describe('OfferFeatures component', () => {
  it('renders correctly', () => {
    const type = 'apartment';
    const bedrooms = 2;
    const maxAdults = 4;
    const { getByText } = render(<OfferFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults} />);
    expect(getByText(getCapitalizedText(type))).toBeInTheDocument();
    expect(getByText(getBedroomsText(bedrooms))).toBeInTheDocument();
    expect(getByText(getAdultsText(maxAdults))).toBeInTheDocument();
  });

  it('renders type correctly', () => {
    const type = 'house';
    const bedrooms = 3;
    const maxAdults = 5;
    const { getByText } = render(<OfferFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults} />);
    expect(getByText(getCapitalizedText(type))).toBeInTheDocument();
  });

  it('renders bedrooms correctly', () => {
    const type = 'apartment';
    const bedrooms = 1;
    const maxAdults = 2;
    const { getByText } = render(<OfferFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults} />);
    expect(getByText(getBedroomsText(bedrooms))).toBeInTheDocument();
  });

  it('renders max adults correctly', () => {
    const type = 'house';
    const bedrooms = 4;
    const maxAdults = 6;
    const { getByText } = render(<OfferFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults} />);
    expect(getByText(getAdultsText(maxAdults))).toBeInTheDocument();
  });
});
