import React from 'react';
import { useFirestore } from 'react-redux-firebase';

function CreateNewKidProfile() {

  const firestore = useFirestore();

  function addEventToFirestore(event){
    event.preventDefault();

    return firestore.collection('kids').add(
      {
        name: event.target.name.value,
        totalPoint: 0,
        createdTime: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <div className="container">
    <form className="white" onSubmit={addEventToFirestore}>
      <h5 className="grey-text text-darken-3">Add a new Kid Profile</h5>
      <div className="input-field">
        <input type="text" name='name' />
        <label htmlFor="name">Name</label>
      </div>
      <div className="input-field">
        <button className="btn pink lighten-1">Create</button>
      </div>
    </form>
    </div>
  )
}

export default CreateNewKidProfile

