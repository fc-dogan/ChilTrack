import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestore} from 'react-redux-firebase';
import { Link, useHistory } from 'react-router-dom';
import CreateNewGoal from './CreateNewGoal'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function KidDetails(props) {
  const history = useHistory();
  const id = props.location.props.id;
  const kids = useSelector(state => state.firestore.data.kids);
  const kid = kids[id]

 const firestore = useFirestore();
  
 const handleDeletingKidsProfile =() =>{
    firestore.delete({collection: 'kids', doc: id });
    history.push('/dashboard')
 }

 useFirestoreConnect([
  { collection: 'goals' }
]);

const goals = useSelector(state => state.firestore.ordered.goals);
console.log(goals)
console.log(id)

  let goalsForSelectedKid;
  if (isLoaded(goals)) {
      goalsForSelectedKid = goals.filter(goal => {
        return id === goal.kidId
      })

    return (
      <div className="container section kid-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{kid.name}</span>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <p>Total Point {kid.totalPoint} </p>
          <h5>Goals:</h5>
          {goalsForSelectedKid.map( goal =>{
              return (
                <p> {goal.reward } = {goal.rewardPoint} points</p>
              )
            })}
        </div>
        <div className="input-field">
          <Link to={{ pathname: "/creategoal", selectedKid: { kid: kid, id: id} }} key={id} >
          <button className="btn pink lighten-1">Create a new goal</button>
          </Link>
        </div>
      <div className="card-footer">
        <button className="btn grey lighten-1" onClick={handleDeletingKidsProfile}>Delete </button>
      </div>
      </div>
    </div>
    )
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

export default KidDetails