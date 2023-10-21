import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

// import { rootSaga } from '../saga';
import authSaga from '../saga/auth.saga';
import rootReducer from '../slices';
import profileSaga from '../saga/profile.saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(logger, sagaMiddleware),
});

// sagaMiddleware.run(rootSaga);
sagaMiddleware.run(authSaga);
sagaMiddleware.run(profileSaga);

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
