/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAuthResponse, ILoginRequest, IRegistrationRequest } from '@src/entities/auth';
import { NavigateFunction } from 'react-router-dom';

interface AuthState {
  loadingRegistration: boolean;
  loadingLogin: boolean;
  token: string | null;
  isLoggedIn: boolean;
}

const initialState = {
  loadingRegistration: false,
  token: null,
  isLoggedIn: false || !!localStorage.getItem('token'),
  loadingLogin: false,
} as AuthState;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchSignUp(
      state,
      { payload }: PayloadAction<{ data: IRegistrationRequest; navigate: NavigateFunction }>,
    ) {
      state.loadingRegistration = true;
    },
    fetchSignUpSuccess(state) {
      state.loadingRegistration = false;
    },
    fetchSignUpFailure(state) {
      state.loadingRegistration = false;
    },

    fetchSignIn(
      state,
      { payload }: PayloadAction<{ data: ILoginRequest; navigate: NavigateFunction }>,
    ) {
      state.loadingLogin = true;
    },
    fetchSignInSuccess(state) {
      state.loadingLogin = false;
    },
    fetchSignInFailure(state) {
      state.loadingLogin = false;
    },

    setToken(state, { payload }: PayloadAction<IAuthResponse>) {
      state.token = payload.token;
      state.isLoggedIn = !!payload.token;
    },
    logout(state) {
      state.token = null;
      state.isLoggedIn = null;
      localStorage.removeItem('token');
    },
  },
});

export const {
  fetchSignUp,
  fetchSignUpSuccess,
  fetchSignUpFailure,
  fetchSignIn,
  fetchSignInSuccess,
  fetchSignInFailure,
  setToken,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
