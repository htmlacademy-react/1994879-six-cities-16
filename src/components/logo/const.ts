export type LogoType = 'header' | 'footer';

type LogoSize = {
  width: number;
  height: number;
}

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
