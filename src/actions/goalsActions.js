export const createNewGoal = (goal, kidId) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;
    const parentId = getState().firebase.auth.uid;
    firestore.collection('goals').add({
      ...goal,
      kidId: kidId,
      parentId: parentId
    }).then(() => {
      dispatch({ type: 'CREATE_GOAL_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_GOAL_ERROR' }, err);
    });
  }
};
