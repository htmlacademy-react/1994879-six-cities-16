import { FC, memo } from 'react';
import { OfferClassType } from '../../types/offer';

type PremiumProps = {
  type: OfferClassType;
}

const PremiumComponent: FC<PremiumProps> = ({ type }) => (
  <div className={`${type}__mark`} data-testid="test-premium">
    <span>Premium</span>
  </div>
);

export const Premium = memo(PremiumComponent);
