import { FC } from 'react';
import { IMAGES_LIMIT } from './const';

type OfferGalleryProps = {
  images: string[];
}

export const OfferGallery: FC<OfferGalleryProps> = ({ images }) => (
  <div className="offer__gallery">
    {images.slice(0, IMAGES_LIMIT).map((image) => (
      <div key={image} className="offer__image-wrapper">
        <img className="offer__image" src={image} alt="Photo studio" />
      </div>
    ))}
  </div>
);
