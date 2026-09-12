import type {CityNameType} from '../const';

type OfferTypeName = 'apartment' | 'room' | 'house' | 'hotel';

type City = {
  name: CityNameType;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type Offer = {
  id: string;
  title: string;
  type: OfferTypeName;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  images: string[];
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: Host;
  description: string;
};

type ServerOffer = {
  id: string;
  title: string;
  type: OfferTypeName;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  images: string[];
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: Host;
  description: string;
};

export type {City, Offer, ServerOffer};
