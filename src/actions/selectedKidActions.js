export const selectedKid = (kidData) => {
  const { name, totalPoint, id } = kidData;
  return {
    type: "SELECTED_KID",
    name: name,
    totalPoint: totalPoint,
    id: id
  }
  // return (dispatch, getState, {getFirestore}) => {
  //   const firestore = getFirestore();
  //   const profile = getState().firebase.profile;
  //   const parentId = getState().firebase.auth.uid;

  //   const kid = firestore.collection('kids').doc(id)
  //   const goal =firestore.collection('goals').doc(goalId)


    // firestore.collection('kids').add({
    //   ...kid,
    //   parentFirstName: profile.firstName,
    //   parentLastName: profile.lastName,
    //   parentId: parentId
    // }).then(() => {
    //   dispatch({ type: 'CREATE_KID_SUCCESS' });
    // }).catch(err => {
    //   dispatch({ type: 'CREATE_KID_ERROR' }, err);
    // });
  
};
