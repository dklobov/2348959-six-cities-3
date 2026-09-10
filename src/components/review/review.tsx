import {Review as ReviewType} from '../../types/review';

const RATING_PERCENT_MULTIPLIER = 20;

type ReviewProps = {
  review: ReviewType;
};

function getRatingWidth(rating: number): string {
  return `${Math.round(rating) * RATING_PERCENT_MULTIPLIER}%`;
}

function getFormattedReviewDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

function Review({review}: ReviewProps): JSX.Element {
  const {
    userName,
    avatarUrl,
    rating,
    comment,
    date,
  } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingWidth(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>
          {getFormattedReviewDate(date)}
        </time>
      </div>
    </li>
  );
}

export default Review;
