import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {makeFakeOffer} from '../../utils/test-mocks';
import OffersList from './offers-list';

describe('OffersList', () => {
  it('should render offers list', () => {
    const offers = [
      makeFakeOffer('1'),
      makeFakeOffer('2'),
    ];

    render(
      <MemoryRouter>
        <OffersList offers={offers} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test offer 1')).toBeInTheDocument();
    expect(screen.getByText('Test offer 2')).toBeInTheDocument();
  });
});
