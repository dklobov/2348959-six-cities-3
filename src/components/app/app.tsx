import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import {AuthorizationStatusType} from '../../types/authorization-status';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  offersCount: number;
  authorizationStatus: AuthorizationStatusType;
};

function App({offersCount, authorizationStatus}: AppProps): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage offersCount={offersCount} />}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginPage />}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Offer}
        element={<OfferPage />}
      />
      <Route
        path={AppRoute.NotFound}
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export default App;
