import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {appProcess} from './app-process';
import {offerData} from './offer-data';
import {offersData} from './offers-data';
import {userProcess} from './user-process';
import {ServerConfig} from '../const';
import {createApi} from '../services/api';

const api = createApi(ServerConfig.Url, ServerConfig.Timeout);

const reducer = combineReducers({
  app: appProcess,
  offer: offerData,
  offers: offersData,
  user: userProcess,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

type State = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export {store};
export type {AppDispatch, State};
