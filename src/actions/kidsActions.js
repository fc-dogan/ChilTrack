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

// export const deleteKidProfile = (id) =>{
//   return (dispatch, getState, {getFirestore}) => {
//     const firestore = getFirestore();
//     firestore.delete({collection: 'kids', doc: id }).then(() => {
//       console.log("Profile successfully deleted!");
//       dispatch({ type: 'DELETE_KID_SUCCESS' })
//     }).catch((err) => {
//       dispatch({ type: 'DELETE_KID_ERROR', err})
//     })
//   }  
// }

export const incrementKidsPoints =  (id) =>{
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const kid = getState().firestore.data.kids[id];
  
    // const kidId = Object.keys(kid)[0];
      
    firestore.collection('kids').doc(id).update({
      totalPoint: kid.totalPoint + 1
    }).then(() => {
      dispatch({ type: 'INCREMENT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'INCREMENT_ERROR' }, err);
    });
  }
}  

// const increasePoint = () => {
//     const increasedPoint = props.totalPoint + 1
//     return 
//   }