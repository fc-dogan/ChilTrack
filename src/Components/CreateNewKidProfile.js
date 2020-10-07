import React from 'react';
import { useFirestore } from 'react-redux-firebase';
import { useDispatch } from 'react-redux'
import * as a from './../actions';
import { useHistory } from 'react-router-dom';

function CreateNewKidProfile() {
  const history = useHistory()
  const firestore = useFirestore();
  const dispatch = useDispatch();
  
  function addKidToFirestore(event){
    event.preventDefault();
    console.log(event.target)
    dispatch(a.createNewKid(
      {
        name: event.target.name.value,
        image: event.target.image.value,
        totalPoint: 0,
        createdTime: firestore.FieldValue.serverTimestamp()
      }
    ))
    history.push("/dashboard")
  }
  
  return (
    <div className="container">
    <form className="white" onSubmit={addKidToFirestore} >
      <h5 className="grey-text text-darken-3">Add a new Kid Profile</h5>
      <div className="input-field">
        <input type="text" name='name' required/>
        <label htmlFor="name">Name</label>
      </div>
      {/* <img class="profile-pic" src="http://cdn.cutestpaw.com/wp-content/uploads/2012/07/l-Wittle-puppy-yawning.jpg" /> */}
      <div class="upload-button">Upload Image</div>
        <input class="file-upload" type="file"  name='image'/>
      <div className="input-field">
        <button className="btn pink lighten-1">Create</button>
      </div>
    </form>
    </div>
  )
}

export default CreateNewKidProfile

