import { ComponentSize } from '../../types/component-size';

export type UserAvatarType = 'offer' | 'reviews';
type UserAvatarOption = ComponentSize & {
  alt: string;
  baseClass: string;
};

export const UserAvatarSettings: Record<UserAvatarType, UserAvatarOption > = {
  'offer': {
    baseClass: 'offer__host-user',
    width: 74,
    height: 74,
    alt: 'Host avatar'
  },
  'reviews': {
    baseClass: 'reviews__user',
    width: 54,
    height: 54,
    alt: 'Reviews avatar'
  }
} as const;
