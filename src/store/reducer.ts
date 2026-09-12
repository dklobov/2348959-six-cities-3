import {changeCity, fillOffers, requireAuthorization, setOffersLoadingStatus} from './action';
import { AuthorizationStatusType } from '../types/authorization-status';
import {AuthorizationStatus, CityName} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import type {CityNameType} from '../const';
import type {Offer} from '../types/offer';


type InitialState = {
  city: CityNameType;
  offers: Offer[];
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatusType;
};

const initialState: InitialState = {
  city: CityName.Paris,
  offers: [],
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    });
});

export {reducer};
