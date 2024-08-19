import { render, screen } from '@testing-library/react';
import { NotFoundPage } from './not-found-page';
import { MemoryRouter } from 'react-router-dom';

describe('NotFoundPage', () => {
  it('renders 404 Not Found header', () => {
    render(<NotFoundPage />, { wrapper: MemoryRouter });
    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });

  it('renders link to home page', () => {
    render(<NotFoundPage />, { wrapper: MemoryRouter });
    expect(screen.getByText('home page')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
