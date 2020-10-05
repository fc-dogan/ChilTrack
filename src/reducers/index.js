import authReducer from './auth-reducer';
import kidsReducer from './kids-reducer'
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import selectedKidReducer from './selectedKid-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  kid: kidsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  selectedKid: selectedKidReducer
})

export default rootReducer;