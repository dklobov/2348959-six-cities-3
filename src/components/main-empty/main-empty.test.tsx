import {render, screen} from '@testing-library/react';
import {CityName} from '../../const';
import MainEmpty from './main-empty';

describe('Component: MainEmpty', () => {
  it('should render empty message with city name', () => {
    render(<MainEmpty cityName={CityName.Paris} />);

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
    expect(screen.getByText(/Paris/)).toBeInTheDocument();
  });
});
