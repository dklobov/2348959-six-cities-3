import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
import {AuthorizationStatus} from './const';
import {offers} from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        offers={offers}
        authorizationStatus={AuthorizationStatus.NoAuth}
      />
    </BrowserRouter>
  </React.StrictMode>
);
