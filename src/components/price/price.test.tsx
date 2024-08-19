import { render } from '@testing-library/react';
import { Price } from './price';

describe('Price component', () => {
  const price = 400;
  const expectedPriceValueText = `€${price}`;
  const expectedPriceText = '/ night';

  it('renders the correct for an offer', () => {
    const { getByText, queryByText } = render(<Price price={price} type='offer' />);

    expect(getByText(expectedPriceValueText)).toBeInTheDocument();
    expect(queryByText(expectedPriceText)).not.toBeInTheDocument();
  });

  it('renders the correct for place-card', () => {
    const { getByText } = render(<Price price={price} type='place-card' />);

    expect(getByText(expectedPriceValueText)).toBeInTheDocument();
    expect(getByText(expectedPriceText)).toBeInTheDocument();
  });
});
