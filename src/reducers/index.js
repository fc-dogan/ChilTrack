import authReducer from './auth-reducer';
import kidListReducer from './kidList-reducer'
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  // kidList: kidListReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer;