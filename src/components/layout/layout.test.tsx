import { render } from '@testing-library/react';
import { Layout } from './layout';
import { withRoutes, withStore } from '../../mock/mock-component';
import { AppRoute } from '../../const';

describe('Layout component', () => {
  // it('renders correctly', () => {
  //   const layout = withRoutes(<Layout />, AppRoute.Login);
  //   const { withStoreComponent } = withStore(layout);
  //   const { getByText } = render(withStoreComponent);

  //   expect(getByText('Paris')).toBeInTheDocument();
  //   expect(getByText('Hamburg')).toBeInTheDocument();
  // });

  // it('renders correct page class', () => {
  //   const { container } = render(
  //     <MemoryRouter initialEntries={[{ pathname: '/favorites' }]}>
  //       <Layout />
  //     </MemoryRouter>,
  //     { initialState }
  //   );

  //   expect(screen.getByClass('page')).toHaveClass('page--favorites');
  // });

  // it('renders correct helmet title', () => {
  //   const { container } = render(
  //     <MemoryRouter initialEntries={[{ pathname: '/favorites' }]}>
  //       <Layout />
  //     </MemoryRouter>,
  //     { initialState }
  //   );

  //   expect(screen.getByText('Favorites')).toBeInTheDocument();
  // });

  // it('renders Header component', () => {
  //   const { getByText } = render(
  //     <MemoryRouter initialEntries={[{ pathname: '/' }]}>
  //       <Layout />
  //     </MemoryRouter>,
  //     { initialState }
  //   );

  //   expect(screen.getByText('Sign out')).toBeInTheDocument();
  // });

  // it('renders Outlet component', () => {
  //   const OutletComponent = () => <div>Outlet content</div>;
  //   const { getByText } = render(
  //     <MemoryRouter initialEntries={[{ pathname: '/' }]}>
  //       <Layout>
  //         <OutletComponent />
  //       </Layout>
  //     </MemoryRouter>,
  //     { initialState }
  //   );

  //   expect(screen.getByText('Outlet content')).toBeInTheDocument();
  // });
});
