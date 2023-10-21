import { all, fork } from 'redux-saga/effects';

import authSaga from './auth.saga';
import profileSaga from './profile.saga';

export function* rootSaga() {
  yield all([fork(authSaga)]);
  yield all([fork(profileSaga)]);
}
