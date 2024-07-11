import Header from '../components/header/header';
import OfferGallery from '../components/offer-gallery/offer-gallery';
import OfferHost from '../components/offer-host/offer-host';
import OfferReview from '../components/offer-review/offer-review';
import PlaceCard from '../components/place-card/place-card';
import { MockComments } from '../mock/comment';
import { MockFavorites } from '../mock/favorites';
import { Offer, OfferFull } from '../types/offer';

type OfferProps = {
  offer: OfferFull;
}

const OfferPage = ({offer}: OfferProps) => {
  const nearOffers: Offer[] = MockFavorites;
  const comments = MockComments;

  return (
    <div className="page">
      <Header isActiveClass={false} isLogged />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGallery images={offer.images}/>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
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
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((good) => <li key='good' className="offer__inside-item">{good}</li>)}
                </ul>
              </div>
              <OfferHost host={offer.host} description={offer.description} title={offer.title} />
              <OfferReview comments={comments} isLogged/>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearOffers.map((nearOffer) => <PlaceCard key={nearOffer.id} className='near-places__card' {...nearOffer} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default OfferPage;
