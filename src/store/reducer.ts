import {createReducer} from '@reduxjs/toolkit';
import {CityName} from '../const';
import {changeCity, fillOffers} from './action';
import type {CityNameType} from '../const';
import type {Offer} from '../types/offer';

type InitialState = {
  city: CityNameType;
  offers: Offer[];
};

const initialState: InitialState = {
  city: CityName.Paris,
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
