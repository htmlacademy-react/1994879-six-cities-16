import { render } from '@testing-library/react';
import { OfferHost } from './offer-host';
import { makeFakeUserWithEmail } from '../../mock/mock';

describe('OfferHost component', () => {
  const user = makeFakeUserWithEmail();
  const description = 'This is a description of the host';

  it('renders correctly', () => {
    const { container, getByText } = render(<OfferHost user={user} description={description} />);
    expect(getByText('Meet the host')).toBeInTheDocument();
    expect(container.getElementsByClassName('offer__host').length).toBe(1);
    expect(container.getElementsByClassName('offer__host-title').length).toBe(1);
    expect(container.getElementsByClassName('offer__description').length).toBe(1);
  });

  it('renders user avatar correctly', () => {
    const { getByRole } = render(<OfferHost user={user} description={description} />);
    expect(getByRole('img')).toHaveAttribute('src', user.avatarUrl);
  });

  it('renders description correctly', () => {
    const { getByText } = render(<OfferHost user={user} description={description} />);
    expect(getByText(description)).toBeInTheDocument();
  });

  it('should not re-render when props do not change', () => {
    const { container, rerender } = render(<OfferHost user={user} description={description} />);
    rerender(<OfferHost user={user} description={description} />);
    expect(container.getElementsByClassName('offer__host').length).toBe(1);
  });

  it('should re-render when user prop changes', () => {
    const user2 = makeFakeUserWithEmail();
    const { rerender, getByRole } = render(<OfferHost user={user} description={description} />);
    rerender(<OfferHost user={user2} description={description} />);
    expect(getByRole('img')).toHaveAttribute('src', user2.avatarUrl);
  });

  it('should re-render when description prop changes', () => {
    const description2 = 'This is a new description of the host';
    const { rerender, getByText } = render(<OfferHost user={user} description={description} />);
    rerender(<OfferHost user={user} description={description2} />);
    expect(getByText(description2)).toBeInTheDocument();
  });
});
