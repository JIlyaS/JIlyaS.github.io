import { combineReducers } from 'redux';

import initReducer from './init';
import authReducer from './auth';
import profileReducer from './profile';
import operationReducer from './operation';
import categoryReducer from './category';

const rootReducer = combineReducers({
  init: initReducer,
  auth: authReducer,
  profile: profileReducer,
  operation: operationReducer,
  category: categoryReducer,
});

export default rootReducer;
