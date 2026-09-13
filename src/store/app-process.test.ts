import {CityName} from '../const';
import {changeCity} from './action';
import {appProcess} from './app-process';

describe('AppProcess reducer', () => {
  it('should return initial state with Paris city', () => {
    const state = appProcess(undefined, {type: ''});

    expect(state.city).toBe(CityName.Paris);
  });

  it('should change city', () => {
    const state = appProcess(undefined, changeCity(CityName.Amsterdam));

    expect(state.city).toBe(CityName.Amsterdam);
  });
});
