import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {CITIES, CityName} from '../../const';
import CitiesList from './cities-list';

describe('CitiesList', () => {
  it('should render city names and call callback after city click', async () => {
    const handleCityChange = vi.fn();

    render(
      <CitiesList
        cities={CITIES}
        currentCity={CityName.Paris}
        onCityChange={handleCityChange}
      />
    );

    await userEvent.click(screen.getByText(CityName.Amsterdam));

    expect(screen.getByText(CityName.Paris)).toBeInTheDocument();
    expect(handleCityChange).toHaveBeenCalledWith(CityName.Amsterdam);
  });
});
