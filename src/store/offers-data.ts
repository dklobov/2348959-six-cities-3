import {fillOffers, setOffersLoadingStatus, updateOffer} from './action';
import {createReducer} from '@reduxjs/toolkit';
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
    })
    .addCase(updateOffer, (state, action) => {
      const offerIndex = state.offers.findIndex((offer) => offer.id === action.payload.id);

      if (offerIndex !== -1) {
        state.offers[offerIndex] = action.payload;
      }
    });
});

export {offersData};
