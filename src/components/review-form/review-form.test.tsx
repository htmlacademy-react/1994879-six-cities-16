import { render, screen } from '@testing-library/react';
import { ReviewForm } from './review-form';
import { withStore } from '../../mock/mock-component';
import userEvent from '@testing-library/user-event';

describe('ReviewForm component when not Auth', () => {
  const {withStoreComponent} = withStore(<ReviewForm />);
  const stubReviewText = 'This is text area text. This is text area text. This is text area text.';

  it('renders correctly', () => {
    const { getByText, getByRole } = render(withStoreComponent);
    expect(getByText('Your review')).toBeInTheDocument();
    expect(getByRole('button')).toHaveTextContent('Submit');
  });

  it('render correctly when user enter review description', async () => {
    render(withStoreComponent);

    await userEvent.type(screen.getByTestId('test-textarea'), stubReviewText);

    expect(screen.getByDisplayValue(stubReviewText)).toBeInTheDocument();
  });
});
