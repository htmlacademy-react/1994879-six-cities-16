import { render } from '@testing-library/react';
import { Layout } from './layout';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { withStore } from '../../mock/mock-component';
import { HelmetProvider } from 'react-helmet-async';

describe('Layout component', () => {
  it('renders correctly', () => {
    const expectedText = 'test outlet';

    const component = (
      <HelmetProvider>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<div>{expectedText}</div>} />
            </Route>
          </Routes>
        </MemoryRouter>
      </HelmetProvider>
    );
    const { withStoreComponent } = withStore(component);

    const { getByText } = render(withStoreComponent);
    expect(getByText(expectedText)).toBeInTheDocument();
  });
});
