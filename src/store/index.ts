import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';

const store = configureStore({
  reducer,
});

type State = ReturnType<typeof store.getState>;

export {store};
export type {State};
