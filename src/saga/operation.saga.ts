/* eslint-disable @typescript-eslint/no-explicit-any */
import { put, call, takeLatest } from 'redux-saga/effects';

import {
  fetchAddOperationRequest,
  fetchDeleteOperationRequest,
  fetchOperationsRequest,
  fetchUpdateOperationRequest,
} from '../api/rest/operation';
import {
  fetchOperations,
  fetchOpeartionsSuccess,
  fetchOpeartionsFailure,
  fetchAddOperationSuccess,
  fetchAddOperationFailure,
  fetchAddOperation,
  fetchDeleteOperation,
  fetchDeleteOperationSuccess,
  fetchDeleteOperationFailure,
  fetchUpdateOperation,
  fetchUpdateOperationSuccess,
  fetchUpdateOperationFailure,
} from '../slices/operation';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function* getOperations(params: any) {
  // IRegistrationRequest
  try {
    const { data } = yield call(fetchOperationsRequest);
    yield put(fetchOpeartionsSuccess(data.data));
  } catch (err) {
    yield put(fetchOpeartionsFailure());
    console.error(err);
    // yield put(
    //   fetchTodoFailure({
    //     error: e.message,
    //   }),
    // );
  }
}

export function* createOperation(action: any) {
  // IRegistrationRequest
  try {
    const { data } = yield call(fetchAddOperationRequest, action.payload);
    yield put(fetchAddOperationSuccess(data));
  } catch (err) {
    yield put(fetchAddOperationFailure());
    console.error(err);
    // yield put(
    //   fetchTodoFailure({
    //     error: e.message,
    //   }),
    // );
  }
}

export function* updateOperation(action: any) {
  // IRegistrationRequest
  try {
    const { data } = yield call(fetchUpdateOperationRequest, action.payload);
    yield put(fetchUpdateOperationSuccess(data));
  } catch (err) {
    yield put(fetchUpdateOperationFailure());
    console.error(err);
    // yield put(
    //   fetchTodoFailure({
    //     error: e.message,
    //   }),
    // );
  }
}

export function* deleteOperation(action: any) {
  // IRegistrationRequest
  try {
    const { data } = yield call(fetchDeleteOperationRequest, action.payload);
    yield put(fetchDeleteOperationSuccess(data));
  } catch (err) {
    yield put(fetchDeleteOperationFailure());
    console.error(err);
    // yield put(
    //   fetchTodoFailure({
    //     error: e.message,
    //   }),
    // );
  }
}

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

function* operationSaga() {
  yield takeLatest(fetchOperations.type, getOperations);
  yield takeLatest(fetchUpdateOperation.type, updateOperation);
  yield takeLatest(fetchAddOperation.type, createOperation);
  yield takeLatest(fetchDeleteOperation.type, deleteOperation);
}

export default operationSaga;
