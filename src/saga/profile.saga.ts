import { put, call, all, takeLatest } from 'redux-saga/effects';

import { fetchProfileRequest, fetchUpdateProfileRequest } from '../api/rest/profile';
import {
  fetchProfile,
  fetchProfileFailure,
  fetchProfileSuccess,
  fetchUpdateProfile,
  fetchUpdateProfileSuccess,
  setProfile,
} from '../slices/profile';

export function* getProfile() {
  // IRegistrationRequest
  try {
    const { data } = yield call(fetchProfileRequest);
    yield put(fetchProfileSuccess());
    yield put(setProfile(data));
  } catch (err) {
    yield put(fetchProfileFailure());
    console.error(err);
    // yield put(
    //   fetchTodoFailure({
    //     error: e.message,
    //   }),
    // );
  }
}

export function* updateProfile(action: any) {
  try {
    console.log('action', action);
    const { data } = yield call(fetchUpdateProfileRequest, { ...action.payload });
    yield put(fetchUpdateProfileSuccess());
    yield put(setProfile(data));
  } catch (err) {
    console.error(err);
  }
}

function* profileSaga() {
  yield takeLatest(fetchProfile.type, getProfile);
  yield takeLatest(fetchUpdateProfile.type, updateProfile);
}

export default profileSaga;
