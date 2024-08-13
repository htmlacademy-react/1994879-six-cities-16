import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer component', () => {
  it('renders correctly', () => {
    render(<Footer />);
    expect(screen.getByRole('footer')).toBeInTheDocument();
  });

  it('renders the logo with type "footer"', () => {
    render(<Footer />);
    expect(screen.getByRole('img', { name: 'Logo' })).toHaveAttribute('type', 'footer');
  });
});
