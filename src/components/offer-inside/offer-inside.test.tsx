import { render } from '@testing-library/react';
import { OfferInside } from './offer-inside';

describe('OfferInside component', () => {
  it('renders correctly', () => {
    const goods = ['Good 1', 'Good 2', 'Good 3'];
    const { container, getByText } = render(<OfferInside goods={goods} />);
    expect(getByText('What\'s inside')).toBeInTheDocument();
    expect(container.getElementsByClassName('offer__inside').length).toBe(1);
    expect(container.getElementsByClassName('offer__inside-title').length).toBe(1);
    expect(container.getElementsByClassName('offer__inside-list').length).toBe(1);
  });

  it('renders list of goods correctly', () => {
    const goods = ['Good 1', 'Good 2', 'Good 3'];
    const { getAllByRole } = render(<OfferInside goods={goods} />);
    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(goods.length);
    goods.forEach((good, index) => {
      expect(listItems[index]).toHaveTextContent(good);
    });
  });

  it('should not re-render when props do not change', () => {
    const goods = ['Good 1', 'Good 2', 'Good 3'];
    const { rerender, container } = render(<OfferInside goods={goods} />);
    rerender(<OfferInside goods={goods} />);
    expect(container.getElementsByClassName('offer__inside').length).toBe(1);
  });
});
