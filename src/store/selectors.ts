import type {AuthorizationStatusType} from '../types/authorization-status';
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

export {getCity, getOffers, getFilteredOffers, getOffersLoadingStatus, getAuthorizationStatus};
