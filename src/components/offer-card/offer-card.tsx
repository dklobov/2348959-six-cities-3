import {memo} from 'react';
import {getOfferRoute} from '../../utils/route';
import type {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import {MouseEvent} from 'react';

const DEFAULT_CARD_CLASS_NAME = 'cities__card place-card';
const RATING_PERCENT_MULTIPLIER = 20;

type OfferCardProps = {
  offer: Offer;
  className?: string;
  onFavoriteButtonClick?: (offer: Offer) => void;
  onOfferMouseEnter?: (offerId: string) => void;
  onOfferMouseLeave?: () => void;
};

function getRatingWidth(rating: number): string {
  return `${Math.round(rating) * RATING_PERCENT_MULTIPLIER}%`;
}

function getFormattedOfferType(type: Offer['type']): string {
  return type[0].toUpperCase() + type.slice(1);
}

function OfferCard({
  offer,
  className = DEFAULT_CARD_CLASS_NAME,
  onFavoriteButtonClick,
  onOfferMouseEnter,
  onOfferMouseLeave,
}: OfferCardProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    isFavorite,
    isPremium,
    rating,
    previewImage,
  } = offer;

  const handleCardMouseEnter = () => {
    onOfferMouseEnter?.(id);
  };

  const handleCardMouseLeave = () => {
    onOfferMouseLeave?.();
  };

  const handleFavoriteButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    onFavoriteButtonClick?.(offer);
  };

  return (
    <article
      className={className}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={getOfferRoute(id)}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
            onClick={handleFavoriteButtonClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingWidth(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={getOfferRoute(id)}>{title}</Link>
        </h2>

        <p className="place-card__type">{getFormattedOfferType(type)}</p>
      </div>
    </article>
  );
}

const MemoizedOfferCard = memo(OfferCard);

export default MemoizedOfferCard;
