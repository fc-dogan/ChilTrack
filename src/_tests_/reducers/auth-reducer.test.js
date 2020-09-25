import authReducer from '../../reducers/auth-reducer';

describe('authReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(authReducer({}, { type: null })).toEqual({});
  });
})
