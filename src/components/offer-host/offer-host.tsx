
import { FC } from 'react';
import { User } from '../../types/user';
import { UserAvatar } from '../user-avatar';

type HostProps = {
  user: User;
  description: string;
}

export const OfferHost: FC<HostProps> = ({ user, description }) => {
  const sentences = description.split('. ').map((sentence, index) => (
    { id: index, text: sentence, }
  ));
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <UserAvatar type='offer' user={user} />
      <div className="offer__description">
        {sentences.map(({ id, text }) => <p key={id} className="offer__text">{text}</p>)}
      </div>
    </div>
  );
};
