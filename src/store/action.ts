import {createAction} from '@reduxjs/toolkit';
import type {CityNameType} from '../const';
import type {Offer} from '../types/offer';

const changeCity = createAction<CityNameType>('city/changeCity');

const fillOffers = createAction<Offer[]>('offers/fillOffers');

const setOffersLoadingStatus = createAction<boolean>('offers/setOffersLoadingStatus');

export {changeCity, fillOffers, setOffersLoadingStatus};
