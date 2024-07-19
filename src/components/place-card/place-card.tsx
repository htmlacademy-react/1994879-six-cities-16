import { FC } from 'react';
import { Link } from 'react-router-dom';
import Premium from '../premium/premium';
import { Offer } from '../../types/offer';
import { AppRoute } from '../../const';
import { PlaceCardSettings, PlaceCardType } from './const';
import { BookmarkButton } from '../bookmark-button';
import { Rating } from '../rating';
import { Price } from '../price/price';

type PlaceCardProps = {
  offer: Offer;
  typeCard: PlaceCardType;
  onHover?: (offer: Offer | null) => void;
}

export const PlaceCard: FC<PlaceCardProps> = ({ offer, typeCard, onHover }) => {
  const { id, price, title, type, rating, previewImage, isPremium, isFavorite } = offer;
  const offerLink = AppRoute.Offer.replace(':id', id);
  const className = PlaceCardSettings[typeCard];

  const handleHover = (newOffer: Offer | null) => onHover?.(newOffer);

  return (
    <article
      className={`${className} place-card`}
      onMouseEnter={() => handleHover(offer)}
      onMouseLeave={() => handleHover(null)}
    >
      {isPremium && <Premium className='place-card__mark'/>}
      <div className={`${typeCard}__image-wrapper place-card__image-wrapper`}>
        <Link to={offerLink} >
          <img className="place-card__image" src={ previewImage } width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <Price type='place-card' price={price}/>
          <BookmarkButton type='place-card' isActive={isFavorite}/>
        </div>
        <Rating type='place-card' rating={rating}/>
        <h2 className="place-card__name">
          <Link to={offerLink} >{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
