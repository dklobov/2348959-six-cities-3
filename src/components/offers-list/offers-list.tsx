import {memo} from 'react';
import OfferCard from '../offer-card/offer-card';
import type {Offer} from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
  cardClassName?: string;
  onFavoriteButtonClick?: (offer: Offer) => void;
  onOfferMouseEnter?: (offerId: string) => void;
  onOfferMouseLeave?: () => void;
};

function OffersList({
  offers,
  cardClassName,
  onFavoriteButtonClick,
  onOfferMouseEnter,
  onOfferMouseLeave,
}: OffersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          className={cardClassName}
          onFavoriteButtonClick={onFavoriteButtonClick}
          onOfferMouseEnter={onOfferMouseEnter}
          onOfferMouseLeave={onOfferMouseLeave}
        />
      ))}
    </>
  );
}

const MemoizedOffersList = memo(OffersList);

export default MemoizedOffersList;
