import {render, screen} from '@testing-library/react';
import {makeFakeReview} from '../../utils/test-mocks';
import ReviewsList from './reviews-list';

describe('ReviewsList', () => {
  it('should render reviews count and reviews', () => {
    const reviews = [
      makeFakeReview('1'),
      makeFakeReview('2'),
    ];

    render(<ReviewsList reviews={reviews} />);

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getAllByText('Test review comment')).toHaveLength(2);
  });
});
