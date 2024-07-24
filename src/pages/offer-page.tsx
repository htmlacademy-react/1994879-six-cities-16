import { FC } from 'react';
import { OfferGallery } from '../components/offer-gallery';
import { OfferHost } from '../components/offer-host';
import { OfferReviews } from '../components/offer-reviews/offer-reviews';
import { PlaceCard } from '../components/place-card';
import { Premium } from '../components/premium/premium';
import { Navigate, useParams } from 'react-router-dom';
import { MockComments } from '../mock/comment';
import { MockFavorites } from '../mock/favorites';
import { MockOfferFull } from '../mock/offers';
import { Offer, OfferFull } from '../types/offer';
import { BookmarkButton } from '../components/bookmark-button';
import { Price } from '../components/price/price';
import { Rating } from '../components/rating';
import { OfferFeatures } from '../components/offer-features';
import { OfferInside } from '../components/offer-inside';
import { Map } from '../components/map';
import { AppRoute } from '../const';

const tempFindOfferById = (id: string | undefined): OfferFull | undefined => MockOfferFull.id === id ? MockOfferFull : MockOfferFull;

const OfferPage: FC = () => {
  const { id } = useParams();
  const offer: OfferFull | undefined = tempFindOfferById(id);

  if (!offer) {
    return <Navigate to={AppRoute.NotFound} replace />;
  }

  const { type, bedrooms, maxAdults, images, title, rating, isFavorite, isPremium, price, goods, description, host } = offer;
  const nearOffers: Offer[] = MockFavorites;
  const mapOffers = [...nearOffers, offer];
  const comments = MockComments;

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <OfferGallery images={images}/>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium && <Premium className='offer__mark' />}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{title}</h1>
              <BookmarkButton type='offer' isActive={isFavorite}/>
            </div>
            <Rating type='offer' rating={rating} />
            <OfferFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>
            <Price type='offer' price={price} />
            <OfferInside goods={goods} />
            <OfferHost user={host} description={description} />
            <OfferReviews reviews={comments} />
          </div>
        </div>
        <section className="offer__map map">
          <Map city={offer.city} offers={mapOffers} selectedOffer={offer} />
        </section>
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {nearOffers.map((nearOffer) =>
              <PlaceCard key={nearOffer.id} typeCard='near-places' offer={nearOffer} />)}
          </div>
        </section>
      </div>
    </main>
  );
};

export default OfferPage;
