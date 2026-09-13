import {createReducer} from '@reduxjs/toolkit';
import {fillFavoriteOffers, updateOffer} from './action';
import type {Offer} from '../types/offer';

type FavoritesData = {
  favoriteOffers: Offer[];
};

const initialState: FavoritesData = {
  favoriteOffers: [],
};

const favoritesData = createReducer(initialState, (builder) => {
  builder
    .addCase(fillFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(updateOffer, (state, action) => {
      const updatedOffer = action.payload;
      const offerIndex = state.favoriteOffers.findIndex((offer) => offer.id === updatedOffer.id);

      if (updatedOffer.isFavorite && offerIndex === -1) {
        state.favoriteOffers.push(updatedOffer);
        return;
      }

      if (updatedOffer.isFavorite && offerIndex !== -1) {
        state.favoriteOffers[offerIndex] = updatedOffer;
        return;
      }

      if (!updatedOffer.isFavorite && offerIndex !== -1) {
        state.favoriteOffers.splice(offerIndex, 1);
      }
    });
});

export {favoritesData};
