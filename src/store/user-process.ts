import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../const';
import {requireAuthorization} from './action';
import type {AuthorizationStatusType} from '../types/authorization-status';

type UserProcess = {
  authorizationStatus: AuthorizationStatusType;
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {userProcess};
