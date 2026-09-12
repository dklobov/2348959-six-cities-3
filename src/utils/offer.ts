import {SortType} from '../const';
import type {SortTypeName} from '../const';
import type {Offer} from '../types/offer';

function sortOffersByPriceLowToHigh(firstOffer: Offer, secondOffer: Offer): number {
  return firstOffer.price - secondOffer.price;
}

function sortOffersByPriceHighToLow(firstOffer: Offer, secondOffer: Offer): number {
  return secondOffer.price - firstOffer.price;
}

function sortOffersByRating(firstOffer: Offer, secondOffer: Offer): number {
  return secondOffer.rating - firstOffer.rating;
}

function getSortedOffers(offers: Offer[], sortType: SortTypeName): Offer[] {
  switch (sortType) {
    case SortType.PriceLowToHigh:
      return [...offers].sort(sortOffersByPriceLowToHigh);
    case SortType.PriceHighToLow:
      return [...offers].sort(sortOffersByPriceHighToLow);
    case SortType.TopRatedFirst:
      return [...offers].sort(sortOffersByRating);
    case SortType.Popular:
      return offers;
  }
}

export {getSortedOffers};
