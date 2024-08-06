import { FC, memo } from 'react';
import { UserAvatarSettings, UserAvatarType } from './const';
import { User } from '../../types/user';

type UserAvatarProps = {
  type: UserAvatarType;
  user: User;
}

const UserAvatarComponent: FC<UserAvatarProps> = ({ type, user }) => {
  const { width, height, alt, baseClass } = UserAvatarSettings[type];

  return (
    <div className={`${baseClass} user`}>
      <div className={`${type}__avatar-wrapper ${type}__avatar-wrapper--pro user__avatar-wrapper`}>
        <img className={`${type}__avatar user__avatar`} src={user.avatarUrl} width={width} height={height} alt={alt} />
      </div>
      <span className={`${type}__user-name`}>
        {user.name}
      </span>
      {type === 'offer' && user.isPro && <span className={`${type}__user-status`}>Pro</span>}
    </div>
  );
};

export const UserAvatar = memo(UserAvatarComponent);
