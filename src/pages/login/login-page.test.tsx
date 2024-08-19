import { render } from '@testing-library/react';
import { LoginPage } from './login-page';
import { withRoutes, withStore } from '../../mock/mock-component';
import { makeFakeNotAuthState } from '../../mock/mock';
import { AppRoute } from '../../const';

describe('LoginPage', () => {
  const { withStoreComponent } = withStore(withRoutes(<LoginPage />, AppRoute.Login), makeFakeNotAuthState());

  it('renders sign in form', () => {
    const { getByRole } = render(withStoreComponent);
    expect(getByRole('button')).toHaveTextContent('Sign in');
  });

  it('renders email input field', () => {
    const { getByPlaceholderText } = render(withStoreComponent);
    expect(getByPlaceholderText('Email')).toBeInTheDocument();
  });

  it('renders password input field', () => {
    const { getByPlaceholderText } = render(withStoreComponent);
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
  });
});
