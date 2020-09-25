import authReducer from './auth-reducer';
import kidListReducer from './kidList-reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  kidList: kidListReducer
})

export default rootReducer;