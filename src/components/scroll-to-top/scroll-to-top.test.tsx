import { describe, expect, it, vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import { ScrollToTop } from './scroll-to-top';
import { withRoutes } from '../../mock/mock-component';
import { Location } from 'history';

describe('ScrollToTop', () => {
  const scrollComponent = withRoutes(<ScrollToTop />);
  const useLocationMock = vi.mocked(useLocation);
  const locationProps: Location = {
    pathname: '/old-path',
    state: undefined,
    key: '',
    search: '',
    hash: ''
  };

  it('renders without errors', () => {
    render(scrollComponent);
  });

  it('scrolls to the top of the page when the pathname changes', async () => {
    useLocationMock.mockReturnValue(locationProps);
    const windowScrollToSpy = vi.spyOn(window, 'scrollTo');

    render(scrollComponent);
    useLocationMock.mockReturnValue({ ...locationProps, pathname: '/new-path' });

    await waitFor(() => expect(windowScrollToSpy).toHaveBeenCalledTimes(1).toHaveBeenCalledWith(0, 0), { timeout: 1000 });
  });

  it('does not scroll to the top of the page when the pathname does not change', async () => {
    useLocationMock.mockReturnValue(locationProps);
    const windowScrollToSpy = vi.spyOn(window, 'scrollTo');

    render(scrollComponent);
    useLocationMock.mockReturnValue(locationProps);

    await waitFor(() => expect(windowScrollToSpy).not.toHaveBeenCalled(), { timeout: 1000 });
  });
});
