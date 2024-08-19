import { FC, memo } from 'react';
import { OfferClassType } from '../../types/offer';

type PriceProps = {
  price: number;
  type: OfferClassType;
}

const PriceComponent: FC<PriceProps> = ({ price, type }) => (
  <div className={`${type}__price`}>
    <b className={`${type}__price-value`}>€{price}</b>
    <span className={`${type}__price-text`}>{type === 'offer' ? '' : '/'}&nbsp;night</span>
  </div>
);

export const Price = memo(PriceComponent);
