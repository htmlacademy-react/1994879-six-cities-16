import { FC, memo } from 'react';
import { IMAGES_LIMIT } from './const';

type OfferGalleryProps = {
  images: string[];
}

const OfferGalleryComponent: FC<OfferGalleryProps> = ({ images }) => {
  const limitedImages = images.slice(0, IMAGES_LIMIT);

  return (
    <div className="offer__gallery">
      {limitedImages.map((image) => (
        <div key={image} className="offer__image-wrapper">
          <img className="offer__image" src={image} alt="Photo studio" />
        </div>
      ))}
    </div>
  );
};

export const OfferGallery = memo(OfferGalleryComponent,
  (prevProps, nextProps) => prevProps.images === nextProps.images);
