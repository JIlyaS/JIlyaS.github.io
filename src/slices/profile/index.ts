/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUpdateProfileRequest, Profile } from '@src/types/profile';

interface ProfileState {
  loadingProfile: boolean;
  loadingUpdateProfile: boolean;
  profile: Profile | null;
}

const initialState = {
  loadingProfile: false,
  loadingUpdateProfile: false,
  profile: null,
} as ProfileState;

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fetchProfile(state) {
      state.loadingProfile = true;
    },
    fetchProfileSuccess(state) {
      state.loadingProfile = false;
    },
    fetchProfileFailure(state) {
      state.loadingProfile = false;
    },

    fetchUpdateProfile(state, { payload }: PayloadAction<IUpdateProfileRequest>) {
      state.loadingUpdateProfile = true;
    },
    fetchUpdateProfileSuccess(state) {
      state.loadingUpdateProfile = false;
    },
    fetchUpdateProfileFailure(state) {
      state.loadingUpdateProfile = false;
    },

    setProfile(state, { payload }: PayloadAction<Profile>) {
      state.profile = payload;
    },
  },
});

export const {
  fetchProfile,
  fetchProfileSuccess,
  fetchProfileFailure,
  fetchUpdateProfile,
  fetchUpdateProfileSuccess,
  fetchUpdateProfileFailure,
  setProfile,
} = profileSlice.actions;

export default profileSlice.reducer;
