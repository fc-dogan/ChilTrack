import React, {useEffect} from 'react';
import { useFirestore } from 'react-redux-firebase';
import { useDispatch } from 'react-redux'
import * as a from './../actions';
import { useHistory } from 'react-router-dom';
import M from "materialize-css";
import a1 from './../assets/avatars/a1.png'
import a2 from './../assets/avatars/a2.png'
import a3 from './../assets/avatars/a3.png'

// import one from './../assets/avatars/one.png'

function CreateNewKidProfile() {
  const history = useHistory()
  const firestore = useFirestore();
  const dispatch = useDispatch();
  useEffect(() => {
    let selects = document.querySelectorAll('select');
    // Auto initialize all the things!
    M.FormSelect.init(selects, {});
})

const imageList=[a1, a2, a3]
const generateImage =() =>{
  return Math.floor(Math.random() * imageList.length);
}
  
  function addKidToFirestore(event){
    event.preventDefault();
    console.log(event.target)
    dispatch(a.createNewKid(
      {
        name: event.target.name.value,
        image: generateImage(),
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
      {/* <div class="input-field">
        <select class="icons" name="icons">
          <option value="" disabled selected>Choose your option</option>
          <option value="one.png" data-icon="./../assets/avatars/one.png" class="left"> 1</option>
          <option value="" data-icon="./../assets/avatars/2.png" class="left">example 2</option>
          <option value="" data-icon="" class="left">example 3</option>
        </select>
        <label>Images in select</label>
      </div> */}
      <div className="input-field">
        <input type="text" name='name' required/>
        <label htmlFor="name">Name</label>
      </div>
      {/* <div class="input-field ">
        <select>
          <option value="" disabled selected>Choose your option</option>
          <option value="1"><img className="responsive-img" src={one}></img></option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label>Materialize Select</label>
      </div> */}
      <div className="input-field">
        <button className="btn pink lighten-1">Create</button>
      </div>
    </form>
    </div>
  )
}

export default CreateNewKidProfile

