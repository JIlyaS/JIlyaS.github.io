import { all, fork } from 'redux-saga/effects';

import authSaga from './auth.saga';
import profileSaga from './profile.saga';
import operationSaga from './operation.saga';
import categorySaga from './category.saga';

export function* rootSaga() {
  yield all([fork(authSaga)]);
  yield all([fork(profileSaga)]);
  yield all([fork(operationSaga)]);
  yield all([fork(categorySaga)]);
}
