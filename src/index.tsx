import {BrowserRouter} from 'react-router-dom';
import {AuthorizationStatus} from './const';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import React from 'react';
import { fetchOffersAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffersAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App authorizationStatus={AuthorizationStatus.NoAuth} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
