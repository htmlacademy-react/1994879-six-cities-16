import { render, screen } from '@testing-library/react';
import { Footer } from './footer';
import { withRoutes } from '../../mock/mock-component';

describe('Footer component', () => {
  it('renders correctly, has testId', () => {
    const footerTestId = 'test-footer';

    render(withRoutes(<Footer />));
    const footer = screen.getByTestId(footerTestId);

    expect(footer).toBeInTheDocument();
  });

  it('renders correctly, has logo image', () => {
    render(withRoutes(<Footer />));
    const logo = screen.getByAltText('6 cities logo');
    expect(logo).toBeInTheDocument();
  });
});
