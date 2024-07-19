
import { FC } from 'react';
import { User } from '../../types/user';
import { UserAvatar } from '../user-avatar';

type HostProps = {
  user: User;
  description: string;
  title: string;
}

const OfferHost: FC<HostProps> = ({ user, description, title }) => (
  <div className="offer__host">
    <h2 className="offer__host-title">Meet the host</h2>
    <UserAvatar type='offer' user={user} />
    <div className="offer__description">
      <p className="offer__text">{description}</p>
      <p className="offer__text">{title}</p>
    </div>
  </div>
);

export default OfferHost;
