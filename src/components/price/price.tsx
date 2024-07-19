import { FC } from 'react';

type PriceProps = {
  price: number;
  type: 'place-card' | 'offer';
}

export const Price: FC<PriceProps> = ({ price, type }) => (
  <div className={`${type}__price`}>
    <b className={`${type}__price-value`}>€{price}</b>
    <span className={`${type}__price-text`}>{type === 'offer' ? '' : '/'}&nbsp;night</span>
  </div>
);
