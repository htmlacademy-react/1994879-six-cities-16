import { render } from '@testing-library/react';
import { UserAvatar } from './user-avatar';
import { makeFakeUserWithEmail } from '../../mock/mock';

describe('UserAvatar', () => {
  const user = makeFakeUserWithEmail();

  it('renders correctly with default props', () => {
    const { getByText, container } = render(<UserAvatar type={'offer'} user={user} />);
    expect(getByText(user.name)).toBeInTheDocument();

    expect(container.querySelector('.offer__avatar-wrapper')).toBeInTheDocument();
    expect(container.querySelector('.offer__avatar')).toBeInTheDocument();
  });

  it('renders correctly with pro status when offer', () => {
    const { getByText } = render(<UserAvatar type={'offer'} user={{ ...user, isPro: true }} />);
    expect(getByText('Pro')).toBeInTheDocument();
  });

  it('renders correctly with pro status when reviews', () => {
    const { queryByText } = render(<UserAvatar type={'reviews'} user={{ ...user, isPro: true }} />);
    expect(queryByText('Pro')).not.toBeInTheDocument();
  });

  it('renders correctly without pro status', () => {
    const { queryByText } = render(<UserAvatar type={'offer'} user={{ ...user, isPro: false }} />);
    expect(queryByText('Pro')).not.toBeInTheDocument();
  });

  it('renders correctly with different user data', () => {
    const user2 = makeFakeUserWithEmail();
    const { getByText, rerender } = render(<UserAvatar type={'offer'} user={user} />);
    rerender(<UserAvatar type={'offer'} user={user2} />);
    expect(getByText(user2.name)).toBeInTheDocument();
  });
});
