import { FC, useEffect } from 'react';
import { OfferGallery } from '../components/offer-gallery';
import { OfferHost } from '../components/offer-host';
import { OfferReviews } from '../components/offer-reviews/offer-reviews';
import { PlaceCard } from '../components/place-card';
import { Premium } from '../components/premium/premium';
import { useParams } from 'react-router-dom';
import { BookmarkButton } from '../components/bookmark-button';
import { Price } from '../components/price';
import { Rating } from '../components/rating';
import { OfferFeatures } from '../components/offer-features';
import { OfferInside } from '../components/offer-inside';
import { Map } from '../components/map';
import { NEARBY_LIMIT } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchNearOffers, fetchOffer } from '../store/offer-slice/thunk';
import { Spinner } from '../components/spinner';
import { fetchComments } from '../store/comment-slice/thunk';
import { allComments, allNearOffers, fullOffer } from '../store/selectors';
import { NotFoundPage } from './not-found/not-found-page';

export const OfferPage: FC = () => {
  const { id = '' } = useParams();
  const dispatch = useAppDispatch();
  const { offer, isLoading: isOfferLoading } = useAppSelector(fullOffer);
  const { comments, isLoading: isCommentsLoading } = useAppSelector(allComments);
  const { nearOffers, isLoading: isNearOffersLoading } = useAppSelector(allNearOffers);

  useEffect(() => {
    let isMounted = true;
    if (isMounted && id) {
      dispatch(fetchOffer(id));
      dispatch(fetchNearOffers(id));
      dispatch(fetchComments(id));
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, id]);

  if (isOfferLoading) {
    return <Spinner message='Offer loading' />;
  }

  if (!offer) {
    return <NotFoundPage />;
  }

  const { type, bedrooms, maxAdults, images, title, rating, isFavorite, isPremium, price, goods, description, host } = offer;
  const limitedNearOffers = nearOffers.slice(0, NEARBY_LIMIT);
  const mapOffers = [...limitedNearOffers, offer];

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
              <BookmarkButton type='offer' offerId={id} isActive={isFavorite}/>
            </div>
            <Rating type='offer' rating={rating} />
            <OfferFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>
            <Price type='offer' price={price} />
            <OfferInside goods={goods} />
            <OfferHost user={host} description={description} />
            {isCommentsLoading ?
              <Spinner /> :
              <OfferReviews reviews={comments} />}
          </div>
        </div>
        <section className="offer__map map">
          <Map city={offer.city} offers={mapOffers} selectedOffer={offer} />
        </section>
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          {isNearOffersLoading && <Spinner />}
          <div className="near-places__list places__list">
            {limitedNearOffers.map((nearOffer) =>
              <PlaceCard key={nearOffer.id} typeCard='near-places' offer={nearOffer} />)}
          </div>
        </section>
      </div>
    </main>
  );
};
