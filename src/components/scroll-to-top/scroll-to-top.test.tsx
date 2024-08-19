import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { ScrollToTop } from './scroll-to-top';
import { withRoutes } from '../../mock/mock-component';

describe('ScrollToTop', () => {
  const scrollComponent = withRoutes(<ScrollToTop />);

  it('renders without errors', () => {
    render(scrollComponent);
  });

  it('spy scrollTo called 1 times', () => {
    const windowScrollToSpy = vi.spyOn(window, 'scrollTo');
    render(scrollComponent);

    expect(windowScrollToSpy).toHaveBeenCalledTimes(1);
  });
});
