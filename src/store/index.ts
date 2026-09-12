import {configureStore} from '@reduxjs/toolkit';
import {ServerConfig} from '../const';
import {createApi} from '../services/api';
import {reducer} from './reducer';

const api = createApi(ServerConfig.Url, ServerConfig.Timeout);

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
