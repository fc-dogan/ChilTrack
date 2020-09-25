import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import kidListReducer from '../../reducers/kidList-reducer';

describe("rootReducer", () => {
  let store = createStore(rootReducer)

  test('Check that initial state of kidListReducer matches root reducer', () => {
    expect(store.getState().kidList).toEqual(kidListReducer({}, { type: null }))
  });

  // test('Should return default state if no action type is recognized', () => {
  //   expect(rootReducer({}, { type: null })).toEqual({
  //     kidList: {},
  //     auth: {},
  //     firestore: {}
  //   });
  // });

});