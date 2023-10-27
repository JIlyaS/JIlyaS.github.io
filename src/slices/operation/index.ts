/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Operation } from '@src/entities/operation';
// import { IUpdateProfileRequest, Profile } from '@src/entities/profile';

interface OperationState {
  loadingOperations: boolean;
  loadingAddOperation: boolean;
  loadingUpdateOperation: boolean;
  loadingDeleteOperation: boolean;
  operations: Operation[];
}

const initialState = {
  loadingOperations: false,
  loadingAddOperation: false,
  loadingUpdateOperation: false,
  loadingDeleteOperation: false,
  operations: [],
} as OperationState;

export const operationSlice = createSlice({
  name: 'operation',
  initialState,
  reducers: {
    fetchOperations(state) {
      state.loadingOperations = true;
    },
    fetchOpeartionsSuccess(state, { payload }: PayloadAction<any>) {
      state.loadingOperations = false;
      state.operations = payload;
    },
    fetchOpeartionsFailure(state) {
      state.loadingOperations = false;
    },

    fetchAddOperation(state, { payload }: PayloadAction<any>) {
      state.loadingAddOperation = true;
    },
    fetchAddOperationSuccess(state, { payload }: PayloadAction<any>) {
      state.loadingAddOperation = false;
      state.operations = [payload, ...state.operations];
    },
    fetchAddOperationFailure(state) {
      state.loadingAddOperation = false;
    },

    fetchUpdateOperation(state, { payload }: PayloadAction<any>) {
      state.loadingUpdateOperation = true;
    },
    fetchUpdateOperationSuccess(state, { payload }: PayloadAction<any>) {
      state.loadingUpdateOperation = false;
      const indexOperation = state.operations.findIndex((operation) => operation.id === payload.id);
      const updatedOperations = [
        ...state.operations.slice(0, indexOperation),
        payload,
        ...state.operations.slice(indexOperation + 1),
      ];
      state.operations = updatedOperations;
    },
    fetchUpdateOperationFailure(state) {
      state.loadingUpdateOperation = false;
    },

    fetchDeleteOperation(state, { payload }: PayloadAction<string>) {
      state.loadingDeleteOperation = true;
    },
    fetchDeleteOperationSuccess(state, { payload }: PayloadAction<any>) {
      state.loadingDeleteOperation = false;

      state.operations = state.operations.filter((operation) => operation.id !== payload.id);
    },
    fetchDeleteOperationFailure(state) {
      state.loadingDeleteOperation = false;
    },

    // fetchUpdateProfile(state, { payload }: PayloadAction<IUpdateProfileRequest>) {
    //   state.loadingUpdateProfile = true;
    // },
    // fetchUpdateProfileSuccess(state) {
    //   state.loadingUpdateProfile = false;
    // },
    // fetchUpdateProfileFailure(state) {
    //   state.loadingUpdateProfile = false;
    // },

    // setProfile(state, { payload }: PayloadAction<Profile>) {
    //   state.operation = payload;
    // },
  },
});

export const {
  fetchOperations,
  fetchOpeartionsSuccess,
  fetchOpeartionsFailure,
  fetchAddOperation,
  fetchAddOperationSuccess,
  fetchAddOperationFailure,
  fetchUpdateOperation,
  fetchUpdateOperationSuccess,
  fetchUpdateOperationFailure,
  fetchDeleteOperation,
  fetchDeleteOperationSuccess,
  fetchDeleteOperationFailure,
} = operationSlice.actions;

export default operationSlice.reducer;
