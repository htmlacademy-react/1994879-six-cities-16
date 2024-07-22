import { FC } from 'react';

type PremiumProps = {
  className: string;
}

export const Premium: FC<PremiumProps> = ({ className }) => (
  <div className={className}>
    <span>Premium</span>
  </div>
);
