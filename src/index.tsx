import {BrowserRouter} from 'react-router-dom';
import {AuthorizationStatus} from './const';
import {fillOffers} from './store/action';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {Provider} from 'react-redux';
import {store} from './store';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fillOffers(offers));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App authorizationStatus={AuthorizationStatus.NoAuth} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
