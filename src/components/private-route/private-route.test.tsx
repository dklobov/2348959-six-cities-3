import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import {store} from '../../store';
import {requireAuthorization} from '../../store/action';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from './private-route';

describe('PrivateRoute', () => {
  it('should render children when user is authorized', () => {
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[AppRoute.Favorites]}>
          <Routes>
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <span>Private content</span>
                </PrivateRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Private content')).toBeInTheDocument();
  });

  it('should redirect to login when user is not authorized', () => {
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[AppRoute.Favorites]}>
          <Routes>
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <span>Private content</span>
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Login} element={<span>Login page</span>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Login page')).toBeInTheDocument();
  });

  it('should render spinner while authorization status is unknown', () => {
    store.dispatch(requireAuthorization(AuthorizationStatus.Unknown));

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[AppRoute.Favorites]}>
          <Routes>
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <span>Private content</span>
                </PrivateRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
