import type {AuthorizationStatusType} from '../types/authorization-status';
import {createAction} from '@reduxjs/toolkit';
import type {CityNameType} from '../const';
import type {Offer} from '../types/offer';

const changeCity = createAction<CityNameType>('city/changeCity');

const fillOffers = createAction<Offer[]>('offers/fillOffers');

const setOffersLoadingStatus = createAction<boolean>('offers/setOffersLoadingStatus');

const requireAuthorization = createAction<AuthorizationStatusType>('user/requireAuthorization');

export {changeCity, fillOffers, requireAuthorization, setOffersLoadingStatus};
