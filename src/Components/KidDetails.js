import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestore} from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

function KidDetails(props) {
  const history = useHistory()
  const id = props.location.props.id
  const kids = useSelector(state => state.firestore.data.kids);
  const kid = kids[id]

 console.log('kid ' + kid.name)
 const firestore = useFirestore();
  
 const handleDeletingKidsProfile =() =>{
    firestore.delete({collection: 'kids', doc: id });
    history.push('/dashboard')
 }
  return (
    <div className="container section kid-details">
    <div className="card z-depth-0">
      <div className="card-content">
        <span className="card-title">{kid.name}</span>
      </div>
      <div className="card-action grey lighten-4 grey-text">
        <div>Total Point {kid.totalPoint} </div>
      </div>
      <div className="input-field">
        <button className="btn pink lighten-1">Create a new goal</button>
      </div>
    <div className="card-footer">
      <button onClick={handleDeletingKidsProfile}>Delete </button>
    </div>
    </div>
  </div>
  )
}

export default KidDetails
