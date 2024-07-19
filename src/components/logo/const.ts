import { ComponentSize } from '../../types/common';

export type LogoType = 'header' | 'footer';

type LogoSize = ComponentSize;

export const LogoSettings: Record<LogoType, LogoSize> = {
  'header': {
    width: 81,
    height: 41
  },
  'footer': {
    width: 64,
    height: 33
  }
} as const;
