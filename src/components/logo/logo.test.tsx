import { render, fireEvent } from '@testing-library/react';
import { Logo } from './logo';
import { AppRoute } from '../../const';
import { withRoutes } from '../../mock/mock-component';
import { LogoSettings, LogoType } from './const';

describe('Logo component', () => {
  it('renders correctly', () => {
    const { getByRole } = render(withRoutes(<Logo type="footer" />));
    expect(getByRole('link')).toBeInTheDocument();
    expect(getByRole('img')).toBeInTheDocument();
  });

  it('renders with active class when isActive is true', () => {
    const { getByRole } = render(withRoutes(<Logo type="header" isActive />));
    expect(getByRole('link')).toHaveClass('header__logo-link--active');
  });

  it('renders with correct image dimensions', () => {
    const type: LogoType = 'header';
    const { height, width } = LogoSettings[type];
    const { getByRole } = render(withRoutes(<Logo type="header" />));
    expect(getByRole('img')).toHaveAttribute('width', String(width));
    expect(getByRole('img')).toHaveAttribute('height', String(height));
  });

  it('links to the main route when clicked', () => {
    const { getByRole } = render(withRoutes(<Logo type="footer" />));
    const link = getByRole('link');
    fireEvent.click(link);
    expect(window.location.pathname).toBe(AppRoute.Main);
  });
});
