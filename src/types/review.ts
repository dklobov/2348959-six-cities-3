type ReviewUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type Review = {
  id: string;
  user: ReviewUser;
  rating: number;
  comment: string;
  date: string;
};

type ReviewData = {
  rating: number;
  comment: string;
};

export type {Review, ReviewData};
