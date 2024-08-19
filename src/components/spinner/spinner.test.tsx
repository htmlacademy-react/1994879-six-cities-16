import { render } from '@testing-library/react';
import { Spinner } from './spinner';
import { DEFAULT_MESSAGE } from './const';

describe('Spinner', () => {
  it('renders correctly with default message', () => {
    const { getByText } = render(<Spinner />);

    expect(getByText(DEFAULT_MESSAGE)).toBeInTheDocument();
  });

  it('renders correctly with custom message', () => {
    const customMessage = 'Loading Test...';
    const { getByText } = render(<Spinner message={customMessage} />);

    expect(getByText(customMessage)).toBeInTheDocument();
  });
});
