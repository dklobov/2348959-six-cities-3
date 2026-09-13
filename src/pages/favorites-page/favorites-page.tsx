import {changeFavoriteStatusAction} from '../../store/api-actions';
import OffersList from '../../components/offers-list/offers-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavoriteOffers} from '../../store/selectors';
import Header from '../../components/header/header';
import type {Offer} from '../../types/offer';
import {CITIES} from '../../const';

export default function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const handleFavoriteButtonClick = (offer: Offer) => {
    dispatch(changeFavoriteStatusAction(offer.id, offer.isFavorite));
  };

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {CITIES.map((city) => {
                const cityOffers = favoriteOffers.filter((offer) => offer.city.name === city);

                if (cityOffers.length === 0) {
                  return null;
                }

                return (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#todo">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <OffersList
                        offers={cityOffers}
                        cardClassName="favorites__card place-card"
                        onFavoriteButtonClick={handleFavoriteButtonClick}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}
