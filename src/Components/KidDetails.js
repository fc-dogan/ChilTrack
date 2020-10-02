import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function KidDetails(props) {


  const id = props.location.props.id
  const kids = useSelector(state => state.firestore.data.kids);
  const kid = kids[id]

 console.log('kid ' + kid.name)

  return (
    <div className="container section kid-details">
    <div className="card z-depth-0">
      <div className="card-content">
        <span className="card-title">{kid.name}</span>
      </div>
      <div className="card-action grey lighten-4 grey-text">
        <div>Total Point {kid.totalPoint} </div>
      </div>
    </div>
  </div>
  )
}

export default KidDetails
