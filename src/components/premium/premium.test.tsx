import { render, screen } from '@testing-library/react';
import { Premium } from './premium';
import { OfferClassType } from '../../types/offer';

describe('Premium component', () => {
  const testId = 'test-premium';
  const expectedText = 'Premium';

  it('render correctly, "place-card"', () => {
    const offerClass: OfferClassType = 'place-card';
    render(<Premium type={offerClass} />);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByTestId(testId).className).toBe(`${offerClass}__mark`);
  });

  it('render correctly, "offer"', () => {
    const offerClass: OfferClassType = 'offer';
    render(<Premium type={offerClass} />);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByTestId(testId).className).toBe(`${offerClass}__mark`);
  });
});
