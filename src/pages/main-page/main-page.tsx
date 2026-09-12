import {getCity, getFilteredOffers, getOffersLoadingStatus} from '../../store/selectors';
import SortingOptions from '../../components/sorting-options/sorting-options';
import CitiesList from '../../components/cities-list/cities-list';
import OffersList from '../../components/offers-list/offers-list';
import type {CityNameType, SortTypeName} from '../../const';
import Spinner from '../../components/spinner/spinner';
import {useDispatch, useSelector} from 'react-redux';
import {getSortedOffers} from '../../utils/offer';
import {changeCity} from '../../store/action';
import {CITIES, SortType} from '../../const';
import Map from '../../components/map/map';
import {cities} from '../../mocks/cities';
import {useState} from 'react';

function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  const [currentSortType, setCurrentSortType] = useState<SortTypeName>(SortType.Popular);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const currentCity = useSelector(getCity);
  const filteredOffers = useSelector(getFilteredOffers);
  const isOffersLoading = useSelector(getOffersLoadingStatus);

  const currentCityData = cities.find((city) => city.name === currentCity) ?? cities[0];
  const offersCount = filteredOffers.length;
  const sortedOffers = getSortedOffers(filteredOffers, currentSortType);

  const handleCityChange = (city: CityNameType) => {
    dispatch(changeCity(city));
    setCurrentSortType(SortType.Popular);
  };

  const handleSortTypeChange = (sortType: SortTypeName) => {
    setCurrentSortType(sortType);
  };

  const handleOfferMouseEnter = (offerId: string) => {
    setActiveOfferId(offerId);
  };

  const handleOfferMouseLeave = () => {
    setActiveOfferId(null);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active" href="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          cities={CITIES}
          currentCity={currentCity}
          onCityChange={handleCityChange}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in {currentCity}</b>
              <SortingOptions
                currentSortType={currentSortType}
                onSortTypeChange={handleSortTypeChange}
              />
              <div className="cities__places-list places__list tabs__content">
                {isOffersLoading ? (
                  <Spinner />
                ) : (
                  <OffersList
                    offers={sortedOffers}
                    onOfferMouseEnter={handleOfferMouseEnter}
                    onOfferMouseLeave={handleOfferMouseLeave}
                  />
                )}
              </div>
            </section>
            <div className="cities__right-section">
              {!isOffersLoading && (
                <Map
                  city={currentCityData}
                  offers={sortedOffers}
                  selectedOfferId={activeOfferId}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
