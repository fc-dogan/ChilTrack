  ///// auth actions ///////
export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email, 
      newUser.password
    ).then(resp => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      });
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err});
    });
  }
}

/////// kids actions /////

export const selectedKid = (id,  name, totalPoint) => {
  return {
    type: "SELECTED_KID",
    name: name,
    totalPoint: totalPoint,
    id: id
  }
};

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
      
    firestore.collection('kids').doc(id).update({
      totalPoint: kid.totalPoint + 1
    })
    .then(() => {
      dispatch({ type: 'INCREMENT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'INCREMENT_ERROR' }, err);
    });
  }
}  
export const decrementKidsPoints =  (id, amount) =>{
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const kid = getState().firestore.data.kids[id];
      
    firestore.collection('kids').doc(id).update({
      totalPoint: kid.totalPoint - amount
    })
    .then(() => {
      dispatch({ type: 'DECREMENT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'DECREMENT_ERROR' }, err);
    });
  }
}  

// export const reachTheGoalPoint = (id) => {
//    return (dispatch, getState, {getFirestore}) => {
//     const firestore = getFirestore();
//     const profile = getState().firebase.profile;
//     const parentId = getState().firebase.auth.uid;
    
//     }).then(() => {
//       dispatch({ type: 'CREATE_KID_SUCCESS' });
//     }).catch(err => {
//       dispatch({ type: 'CREATE_KID_ERROR' }, err);
//     });
//   }
// }


/////// goal actions /////

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
