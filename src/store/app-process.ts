import {createReducer} from '@reduxjs/toolkit';
import {CityName} from '../const';
import {changeCity} from './action';
import type {CityNameType} from '../const';

type AppProcess = {
  city: CityNameType;
};

const initialState: AppProcess = {
  city: CityName.Paris,
};

const appProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export {appProcess};
