import { ComponentSize } from '../../types/common';

export type BookmarkButtonType = 'place-card' | 'offer';

export const BookmarkButtonSettings: Record<BookmarkButtonType, ComponentSize> = {
  'place-card': {
    width: 18,
    height: 19
  },
  'offer': {
    width: 31,
    height: 33
  }
} as const;
