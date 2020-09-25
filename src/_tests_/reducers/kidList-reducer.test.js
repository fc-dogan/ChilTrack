import kidListReducer from '../../reducers/kidList-reducer';

describe('kidListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kidListReducer({}, { type: null })).toEqual({});
  });
})
