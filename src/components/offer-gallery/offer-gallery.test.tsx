import { render } from '@testing-library/react';
import { OfferGallery } from './offer-gallery';
import { IMAGES_LIMIT } from './const';

describe('OfferGallery component', () => {
  it('renders correctly with limited images when length = 4', () => {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
    const { container } = render(<OfferGallery images={images} />);
    expect(container.getElementsByClassName('offer__image-wrapper').length).toBeLessThanOrEqual(IMAGES_LIMIT);
  });

  it('renders correctly with limited images when length = 7', () => {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg'];
    const { container } = render(<OfferGallery images={images} />);
    expect(container.getElementsByClassName('offer__image-wrapper').length).toBeLessThanOrEqual(IMAGES_LIMIT);
  });

  it('renders correctly with []', () => {
    const images: string[] = [];
    const { container } = render(<OfferGallery images={images} />);
    expect(container.getElementsByClassName('offer__image-wrapper')).toHaveLength(images.length);
  });
});
