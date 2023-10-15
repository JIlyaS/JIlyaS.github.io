import { combineReducers } from 'redux';

import initReducer from './init';
import authReducer from './auth';
import profileReducer from './profile';

const rootReducer = combineReducers({
  init: initReducer,
  auth: authReducer,
  profile: profileReducer,
});

export default rootReducer;
