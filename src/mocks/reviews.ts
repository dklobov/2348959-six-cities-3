import {Review} from '../types/review';

const reviews: Review[] = [
  {
    id: '1',
    userName: 'Max',
    avatarUrl: '/img/avatar-max.jpg',
    rating: 4,
    comment: 'A quiet cozy and picturesque place that hides behind a river. The building is green and from 18th century.',
    date: '2019-04-24',
  },
  {
    id: '2',
    userName: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
    rating: 5,
    comment: 'The apartment is perfectly located, clean and very comfortable. I would definitely stay here again.',
    date: '2019-05-12',
  },
];

export {reviews};
