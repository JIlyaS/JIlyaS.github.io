/* eslint-disable @typescript-eslint/no-explicit-any */
import { put, call, takeLatest } from 'redux-saga/effects';

import { fetchCategoriesRequest } from './../api/rest/category';

import {
  fetchCategories,
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from '@src/slices/category';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function* getCategories(params: any) {
  // IRegistrationRequest
  try {
    const { data } = yield call(fetchCategoriesRequest);
    yield put(fetchCategoriesSuccess(data.data));
  } catch (err) {
    yield put(fetchCategoriesFailure());
    console.error(err);
    // yield put(
    //   fetchTodoFailure({
    //     error: e.message,
    //   }),
    // );
  }
}

// export function* createOperation(action: any) {
//   // IRegistrationRequest
//   try {
//     const { data } = yield call(fetchAddOperationRequest, action.payload);
//     yield put(fetchAddOperationSuccess(data));
//   } catch (err) {
//     yield put(fetchAddOperationFailure());
//     console.error(err);
//     // yield put(
//     //   fetchTodoFailure({
//     //     error: e.message,
//     //   }),
//     // );
//   }
// }

// export function* updateProfile(action: any) {
//   try {
//     console.log('action', action);
//     const { data } = yield call(fetchUpdateProfileRequest, { ...action.payload });
//     yield put(fetchUpdateProfileSuccess());
//     yield put(setProfile(data));
//   } catch (err) {
//     console.error(err);
//   }
// }

function* categorySaga() {
  yield takeLatest(fetchCategories.type, getCategories);
  // yield takeLatest(fetchAddOperation.type, createOperation);
}

export default categorySaga;
