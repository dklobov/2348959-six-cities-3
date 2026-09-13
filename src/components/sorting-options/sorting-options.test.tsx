import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {SortType} from '../../const';
import SortingOptions from './sorting-options';

describe('SortingOptions', () => {
  it('should call callback after sort option click', async () => {
    const handleSortTypeChange = vi.fn();

    render(
      <SortingOptions
        currentSortType={SortType.Popular}
        onSortTypeChange={handleSortTypeChange}
      />
    );

    await userEvent.click(screen.getByText(SortType.Popular, {selector: '.places__sorting-type'}));
    await userEvent.click(screen.getByText(SortType.PriceLowToHigh));

    expect(handleSortTypeChange).toHaveBeenCalledWith(SortType.PriceLowToHigh);
  });
});
