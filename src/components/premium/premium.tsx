import { FC, memo } from 'react';

type PremiumProps = {
  className: string;
}

const PremiumComponent: FC<PremiumProps> = ({ className }) => (
  <div className={className}>
    <span>Premium</span>
  </div>
);

export const Premium = memo(PremiumComponent);
