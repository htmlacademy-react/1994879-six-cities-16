import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Premium } from '../premium';
import { Offer } from '../../types/offer';
import { PlaceCardSettings, PlaceCardType } from './const';
import { BookmarkButton } from '../bookmark-button';
import { Rating } from '../rating';
import { Price } from '../price/price';
import { getCapitalizedText, getOfferRoute } from '../../utils';

type PlaceCardProps = {
  offer: Offer;
  typeCard: PlaceCardType;
  onCardHover?: (offer: Offer | undefined) => void;
}

export const PlaceCard: FC<PlaceCardProps> = ({ offer, typeCard, onCardHover }) => {
  const { id, price, title, type, rating, previewImage, isPremium, isFavorite } = offer;
  const offerLink = getOfferRoute(id);
  const { baseClass, infoClass, width, height } = PlaceCardSettings[typeCard];

  const handleMouseHover = (newOffer: Offer | undefined) => {
    if (onCardHover) {
      onCardHover(newOffer);
    }
  };

  return (
    <article
      className={`${baseClass} place-card`}
      onMouseEnter={() => handleMouseHover(offer)}
      onMouseLeave={() => handleMouseHover(undefined)}
    >
      {isPremium && <Premium className='place-card__mark'/>}
      <div className={`${typeCard}__image-wrapper place-card__image-wrapper`}>
        <Link to={offerLink} >
          <img className="place-card__image" src={previewImage} width={width} height={height} alt="Place image" />
        </Link>
      </div>
      <div className={`${infoClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <Price type='place-card' price={price}/>
          <BookmarkButton type='place-card' offerId={id} isActive={isFavorite}/>
        </div>
        <Rating type='place-card' rating={rating}/>
        <h2 className="place-card__name">
          <Link to={offerLink} >{title}</Link>
        </h2>
        <p className="place-card__type">{getCapitalizedText(type)}</p>
      </div>
    </article>
  );
};
