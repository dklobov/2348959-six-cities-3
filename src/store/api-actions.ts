import {AxiosInstance} from 'axios';
import {AppDispatch, State} from './index';
import {adaptOfferToClient} from '../utils/adapter';
import {fillOffers, setOffersLoadingStatus} from './action';
import type {ServerOffer} from '../types/offer';
import {AuthorizationStatus} from '../const';
import {saveToken} from '../services/token';
import {requireAuthorization} from './action';
import type {AuthData} from '../types/auth-data';
import type {UserData} from '../types/user-data';

const OFFERS_ROUTE = '/offers';

const LOGIN_ROUTE = '/login';

function fetchOffersAction() {
  return async (
    dispatch: AppDispatch,
    _getState: () => State,
    api: AxiosInstance
  ): Promise<void> => {
    dispatch(setOffersLoadingStatus(true));

    try {
      const {data} = await api.get<ServerOffer[]>(OFFERS_ROUTE);
      const offers = data.map(adaptOfferToClient);

      dispatch(fillOffers(offers));
    } finally {
      dispatch(setOffersLoadingStatus(false));
    }
  };
}

function checkAuthAction() {
  return async (
    dispatch: AppDispatch,
    _getState: () => State,
    api: AxiosInstance
  ): Promise<void> => {
    try {
      await api.get(LOGIN_ROUTE);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  };
}

function loginAction(authData: AuthData) {
  return async (
    dispatch: AppDispatch,
    _getState: () => State,
    api: AxiosInstance
  ): Promise<void> => {
    const {data} = await api.post<UserData>(LOGIN_ROUTE, authData);

    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };
}

export {checkAuthAction, fetchOffersAction, loginAction};
