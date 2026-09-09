import {AuthorizationStatusType} from '../../types/authorization-status';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import {Route, Routes} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {AppRoute} from '../../const';

type AppProps = {
  offers: Offer[];
  authorizationStatus: AuthorizationStatusType;
};


function App({offers, authorizationStatus}: AppProps): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage offers={offers} />}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginPage />}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <FavoritesPage offers={offers} />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Offer}
        element={<OfferPage offers={offers} />}
      />
      <Route
        path={AppRoute.NotFound}
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export default App;
