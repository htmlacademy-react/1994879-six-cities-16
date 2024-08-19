import { FC } from 'react';
import { Logo } from '../logo';

export const Footer: FC = () => (
  <footer className="footer" data-testid="test-footer">
    <Logo type='footer' />
  </footer>
);
