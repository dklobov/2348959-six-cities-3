import {render, screen} from '@testing-library/react';
import Spinner from './spinner';

describe('Component: Spinner', () => {
  it('should render loading text', () => {
    render(<Spinner />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
