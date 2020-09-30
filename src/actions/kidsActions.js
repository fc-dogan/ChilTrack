export const createNewKid = (kid) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const parentId = getState().firebase.auth.uid;
    firestore.collection('kids').add({
      ...kid,
      parentFirstName: profile.firstName,
      parentLastName: profile.lastName,
      parentId: parentId
    }).then(() => {
      dispatch({ type: 'CREATE_KID_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_KID_ERROR' }, err);
    });
  }
};
