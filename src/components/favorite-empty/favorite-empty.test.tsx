import { render, screen } from '@testing-library/react';
import { FavoriteEmpty } from './favorite-empty';

describe('FavoriteEmpty component', () => {
  it('renders correctly', () => {
    render(<FavoriteEmpty />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
    expect(screen.getByText('Save properties to narrow down search or plan your future trips.')).toBeInTheDocument();
  });

  it('has correct classes', () => {
    render(<FavoriteEmpty />);
    expect(screen.getByRole('main')).toHaveClass('page__main page__main--favorites page__main--favorites-empty');
  });
});
