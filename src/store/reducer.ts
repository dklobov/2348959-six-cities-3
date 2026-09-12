import {createReducer} from '@reduxjs/toolkit';
import {CityName} from '../const';
import {changeCity, fillOffers, setOffersLoadingStatus} from './action';
import type {CityNameType} from '../const';
import type {Offer} from '../types/offer';

type InitialState = {
  city: CityNameType;
  offers: Offer[];
  isOffersLoading: boolean;
};

const initialState: InitialState = {
  city: CityName.Paris,
  offers: [],
  isOffersLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    });
});

export {reducer};
