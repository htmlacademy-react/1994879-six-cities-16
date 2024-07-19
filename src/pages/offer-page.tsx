import OfferGallery from '../components/offer-gallery/offer-gallery';
import OfferHost from '../components/offer-host/offer-host';
import OfferReview from '../components/offer-review/offer-review';
import PlaceCard from '../components/place-card/place-card';
import Premium from '../components/premium/premium';
import {useParams} from 'react-router-dom';
import { MockComments } from '../mock/comment';
import { MockFavorites } from '../mock/favorites';
import { MockOfferFull } from '../mock/offers';
import { Offer, OfferFull } from '../types/offer';
import { FC } from 'react';
import { BookmarkButton } from '../components/bookmark-button';
import { Price } from '../components/price/price';

const tempFindOfferById = (id: string | undefined): OfferFull => MockOfferFull.id === id ? MockOfferFull : MockOfferFull;

const OfferPage: FC = () => {
  const { id } = useParams();
  const offer: OfferFull = tempFindOfferById(id);

  const nearOffers: Offer[] = MockFavorites;
  const comments = MockComments;

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <OfferGallery images={offer.images}/>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {offer.isPremium && <Premium className='offer__mark' />}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{offer.title}</h1>
              <BookmarkButton type='offer' isActive={offer.isFavorite}/>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: '80%' }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {offer.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {`${offer.bedrooms} Bedrooms`}
              </li>
              <li className="offer__feature offer__feature--adults">
                {`Max ${offer.maxAdults} adults`}
              </li>
            </ul>
            <Price type='offer' price={offer.price} />
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {offer.goods.map((good) => <li key={good} className="offer__inside-item">{good}</li>)}
              </ul>
            </div>
            <OfferHost user={offer.host} description={offer.description} title={offer.title} />
            <OfferReview comments={comments} isLogged/>
          </div>
        </div>
        <section className="offer__map map"></section>
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {nearOffers.map((nearOffer) => <PlaceCard key={nearOffer.id} typeCard='near-places' offer={nearOffer} />)}
          </div>
        </section>
      </div>
    </main>
  );
};

export default OfferPage;
