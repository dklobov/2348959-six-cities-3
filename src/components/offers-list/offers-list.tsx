import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
  cardClassName?: string;
  onOfferMouseEnter?: (offerId: string) => void;
  onOfferMouseLeave?: () => void;
};

function OffersList({
  offers,
  cardClassName,
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
          onOfferMouseEnter={onOfferMouseEnter}
          onOfferMouseLeave={onOfferMouseLeave}
        />
      ))}
    </>
  );
}

export default OffersList;
