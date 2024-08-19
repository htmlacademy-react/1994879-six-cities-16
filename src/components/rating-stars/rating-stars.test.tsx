import { render } from '@testing-library/react';
import { RatingStars } from './rating-stars';

describe('RatingStars component', () => {
  const onChange = vi.fn();
  const value = 5;
  const title = '5 stars';
  const isChecked = true;
  const isDisabled = false;

  it('renders correctly', () => {
    const { getByRole } = render(
      <RatingStars
        value={value}
        title={title}
        isChecked={isChecked}
        isDisabled={isDisabled}
        onChange={onChange}
      />
    );

    expect(getByRole('radio')).toBeInTheDocument();
    expect(getByRole('radio')).toBeChecked();
    expect(getByRole('radio')).not.toBeDisabled();
  });

  it('renders correctly when isDisabled is true', () => {
    const { getByRole } = render(
      <RatingStars
        value={value}
        title={title}
        isChecked={isChecked}
        isDisabled
        onChange={onChange}
      />
    );

    expect(getByRole('radio')).toBeDisabled();
  });

  it('renders correctly when isChecked is false', () => {
    const { getByRole } = render(
      <RatingStars
        value={value}
        title={title}
        isChecked={false}
        isDisabled={isDisabled}
        onChange={onChange}
      />
    );

    expect(getByRole('radio')).not.toBeChecked();
  });
});
