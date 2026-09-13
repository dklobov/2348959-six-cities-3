import {render, screen} from '@testing-library/react';
import {makeFakeReview} from '../../utils/test-mocks';
import Review from './review';

describe('Review', () => {
  it('should render review data', () => {
    render(<Review review={makeFakeReview()} />);

    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Test review comment')).toBeInTheDocument();
    expect(screen.getByText('April 2024')).toBeInTheDocument();
  });
});
