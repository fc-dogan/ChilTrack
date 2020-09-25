import authReducer from './auth-reducer';
import kidListReducer from './kidList-reducer'
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  kidList: kidListReducer,
  firestore: firestoreReducer
})

export default rootReducer;