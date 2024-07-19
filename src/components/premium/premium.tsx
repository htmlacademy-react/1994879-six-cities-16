import { FC } from 'react';

type PremiumProps = {
  className: string;
}

const Premium: FC<PremiumProps> = ({ className }) => (
  <div className={className}>
    <span>Premium</span>
  </div>
);

export default Premium;
