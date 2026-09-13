import {AuthorizationStatus} from '../const';
import {requireAuthorization} from './action';
import {userProcess} from './user-process';

describe('UserProcess reducer', () => {
  it('should return initial authorization status', () => {
    const state = userProcess(undefined, {type: ''});

    expect(state.authorizationStatus).toBe(AuthorizationStatus.Unknown);
  });

  it('should set authorization status', () => {
    const state = userProcess(undefined, requireAuthorization(AuthorizationStatus.Auth));

    expect(state.authorizationStatus).toBe(AuthorizationStatus.Auth);
  });
});
