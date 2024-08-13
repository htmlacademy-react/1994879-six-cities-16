
import { FC, memo } from 'react';
import { User } from '../../types/user';
import { UserAvatar } from '../user-avatar';

type HostProps = {
  user: User;
  description: string;
}

const OfferHostComponent: FC<HostProps> = ({ user, description }) => (
  <div className="offer__host">
    <h2 className="offer__host-title">Meet the host</h2>
    <UserAvatar type='offer' user={user} />
    <div className="offer__description">
      <p className="offer__text">{description}</p>
    </div>
  </div>
);

export const OfferHost = memo(OfferHostComponent);
