import {
  changeCity,
  fillOffers,
  requireAuthorization,
  setOffersLoadingStatus,
  fillNearbyOffers,
  fillReviews,
  setCurrentOffer,
  setOfferLoadingStatus} from './action';
import { AuthorizationStatusType } from '../types/authorization-status';
import {AuthorizationStatus, CityName} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import type {CityNameType} from '../const';
import type {Offer} from '../types/offer';
import type {Review} from '../types/review';

type InitialState = {
  city: CityNameType;
  offers: Offer[];
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatusType;
  currentOffer: Offer | null;
  nearbyOffers: Offer[];
  reviews: Review[];
  isOfferLoading: boolean;
};

const initialState: InitialState = {
  city: CityName.Paris,
  offers: [],
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  currentOffer: null,
  nearbyOffers: [],
  reviews: [],
  isOfferLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
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

export {reducer};
