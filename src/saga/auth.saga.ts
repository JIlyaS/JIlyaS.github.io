import { put, call, all, takeLatest, takeEvery } from 'redux-saga/effects';

import { fetchSignInRequest, fetchSignUpRequest } from '../api/rest/auth';
import { fetchSignIn, fetchSignUp, setToken } from '../slices/auth';

export function* signUp(action: any) {
  // IRegistrationRequest
  try {
    const { data } = yield call(fetchSignUpRequest, { ...action.payload });
    console.log('data', data, action.payload);
    yield call(storeToken, data.token);
    yield put(setToken(data));
  } catch (err) {
    console.error(err);
    // yield put(
    //   fetchTodoFailure({
    //     error: e.message,
    //   }),
    // );
  }
}

export function* signIn(action: any) {
  try {
    const { data } = yield call(fetchSignInRequest, { ...action.payload });
    console.log('data', data, action.payload);
    yield call(storeToken, data.token);
    yield put(setToken(data));
  } catch (err) {
    console.error(err);
  }
}

async function storeToken(token: string) {
  try {
    await localStorage.setItem('token', token);
  } catch (error) {
    console.log('Storage error during token store:', error);
  }
}

function* authSaga() {
  // yield all([takeLatest(fetchSignUp.type)]);
  yield takeLatest(fetchSignUp.type, signUp);
  yield takeLatest(fetchSignIn.type, signIn);
}

export default authSaga;
