import {AxiosInstance} from 'axios';
import {AppDispatch, State} from './index';
import {adaptOfferToClient} from '../utils/adapter';
import {fillOffers, setOffersLoadingStatus} from './action';
import type {ServerOffer} from '../types/offer';

const OFFERS_ROUTE = '/offers';

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

export {fetchOffersAction};
