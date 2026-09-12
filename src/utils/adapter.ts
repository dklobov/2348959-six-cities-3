import type {Offer, ServerOffer} from '../types/offer';

function adaptOfferToClient(offer: ServerOffer): Offer {
  return {
    id: offer.id,
    title: offer.title,
    type: offer.type,
    price: offer.price,
    city: offer.city,
    location: offer.location,
    isFavorite: offer.isFavorite,
    isPremium: offer.isPremium,
    rating: offer.rating,
    previewImage: offer.previewImage,
    images: offer.images,
    bedrooms: offer.bedrooms,
    maxAdults: offer.maxAdults,
    goods: offer.goods,
    host: offer.host,
    description: offer.description,
  };
}

export {adaptOfferToClient};
