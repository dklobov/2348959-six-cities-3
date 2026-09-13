import {createReducer} from '@reduxjs/toolkit';
import {fillOffers, setOffersLoadingStatus} from './action';
import type {Offer} from '../types/offer';

type OffersData = {
  offers: Offer[];
  isOffersLoading: boolean;
};

const initialState: OffersData = {
  offers: [],
  isOffersLoading: false,
};

const offersData = createReducer(initialState, (builder) => {
  builder
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    });
});

export {offersData};
