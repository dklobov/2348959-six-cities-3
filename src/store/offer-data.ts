import {createReducer} from '@reduxjs/toolkit';
import {
  fillNearbyOffers,
  fillReviews,
  setCurrentOffer,
  setOfferLoadingStatus,
} from './action';
import type {Offer} from '../types/offer';
import type {Review} from '../types/review';

type OfferData = {
  currentOffer: Offer | null;
  nearbyOffers: Offer[];
  reviews: Review[];
  isOfferLoading: boolean;
};

const initialState: OfferData = {
  currentOffer: null,
  nearbyOffers: [],
  reviews: [],
  isOfferLoading: false,
};

const offerData = createReducer(initialState, (builder) => {
  builder
    .addCase(setOfferLoadingStatus, (state, action) => {
      state.isOfferLoading = action.payload;
    })
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(fillNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(fillReviews, (state, action) => {
      state.reviews = action.payload;
    });
});

export {offerData};
