import type {AuthorizationStatusType} from '../types/authorization-status';
import type {Review} from '../types/review';
import type {CityNameType} from '../const';
import type {Offer} from '../types/offer';
import type {State} from './index';

function getCity(state: State): CityNameType {
  return state.city;
}

function getOffers(state: State): Offer[] {
  return state.offers;
}

function getFilteredOffers(state: State): Offer[] {
  return state.offers.filter((offer) => offer.city.name === state.city);
}

function getOffersLoadingStatus(state: State): boolean {
  return state.isOffersLoading;
}

function getAuthorizationStatus(state: State): AuthorizationStatusType {
  return state.authorizationStatus;
}

function getCurrentOffer(state: State): Offer | null {
  return state.currentOffer;
}

function getNearbyOffers(state: State): Offer[] {
  return state.nearbyOffers;
}

function getReviews(state: State): Review[] {
  return state.reviews;
}

function getOfferLoadingStatus(state: State): boolean {
  return state.isOfferLoading;
}

export {
  getAuthorizationStatus,
  getCity,
  getCurrentOffer,
  getFilteredOffers,
  getNearbyOffers,
  getOfferLoadingStatus,
  getOffers,
  getOffersLoadingStatus,
  getReviews
};
