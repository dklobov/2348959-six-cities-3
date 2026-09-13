import type {AuthorizationStatusType} from '../types/authorization-status';
import {createAction} from '@reduxjs/toolkit';
import type {Review} from '../types/review';
import type {CityNameType} from '../const';
import type {Offer} from '../types/offer';

const changeCity = createAction<CityNameType>('city/changeCity');

const fillOffers = createAction<Offer[]>('offers/fillOffers');

const setOffersLoadingStatus = createAction<boolean>('offers/setOffersLoadingStatus');

const requireAuthorization = createAction<AuthorizationStatusType>('user/requireAuthorization');

const setOfferLoadingStatus = createAction<boolean>('offer/setOfferLoadingStatus');

const setCurrentOffer = createAction<Offer | null>('offer/setCurrentOffer');

const fillNearbyOffers = createAction<Offer[]>('offer/fillNearbyOffers');

const fillReviews = createAction<Review[]>('reviews/fillReviews');

export {
  changeCity,
  fillNearbyOffers,
  fillOffers,
  fillReviews,
  requireAuthorization,
  setCurrentOffer,
  setOfferLoadingStatus,
  setOffersLoadingStatus
};
