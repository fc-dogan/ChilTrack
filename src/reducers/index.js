import authReducer from './auth-reducer';
import kidsReducer from './kids-reducer'
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  kid: kidsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer;