const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
  NotFound: '*',
} as const;

const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

const CityName = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

const CITIES = [
  CityName.Paris,
  CityName.Cologne,
  CityName.Brussels,
  CityName.Amsterdam,
  CityName.Hamburg,
  CityName.Dusseldorf,
] as const;

const SortType = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
} as const;

const ServerConfig = {
  Url: 'https://15.design.htmlacademy.pro/six-cities',
  Timeout: 5000,
} as const;

const FavoriteStatus = {
  Add: 1,
  Remove: 0,
} as const;

type SortTypeName = typeof SortType[keyof typeof SortType];

type CityNameType = typeof CityName[keyof typeof CityName];

type FavoriteStatusValue = typeof FavoriteStatus[keyof typeof FavoriteStatus];

export {AppRoute, AuthorizationStatus, CityName, CITIES, FavoriteStatus, SortType, ServerConfig};
export type {CityNameType, FavoriteStatusValue, SortTypeName};
