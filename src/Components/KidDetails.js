import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useFirestore} from 'react-redux-firebase';
import { Link, useHistory } from 'react-router-dom';
import CreateNewGoal from './CreateNewGoal'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import Goals from './Goals'
import { useDispatch } from 'react-redux'
import * as a from './../actions';

function KidDetails(props) {
  const history = useHistory();
  const firestore = useFirestore();
  const dispatch = useDispatch();
  const id = props.location.props.id;
  const kids = useSelector(state => state.firestore.data.kids);
  const kid = kids[id]
  useFirestoreConnect([
    { collection: 'goals' }
  ]);
  const goals = useSelector(state => state.firestore.ordered.goals);

  const handleDeletingKidsProfile =() =>{
      firestore.delete({collection: 'kids', doc: id });
      history.push('/dashboard')
  }
  const handleSpendingPointsForReward =(GoalId, rewardPoint, kidId) => {
    dispatch(a.decrementKidsPoints(kidId, rewardPoint));
    firestore.delete({collection: 'goals', doc: GoalId });
  }

  let goalsForSelectedKid;
  let availableRewards;
  if (isLoaded(goals)) {
    goalsForSelectedKid = goals.filter(goal => { return id === goal.kidId })
    availableRewards =  goalsForSelectedKid.filter( goal => { return goal.rewardPoint <= kid.totalPoint })
    return (
      <div className="container section kid-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <h3><span className="card-title">{kid.name}</span></h3>
        </div>
        <div className="card-action ">
          <p>Total Point: {kid.totalPoint} </p>
          <h5>Goals:</h5>
          {goalsForSelectedKid.map( goal =>{
              return (
                <Goals
                  reward={goal.reward}
                  rewardPoint={goal.rewardPoint}
                  kidsPoint = {kid.totalPoint}
                  key={goal.id} />)
            })}
          <h5> Available Rewards:</h5>
          {availableRewards.map( goal =>{
              return (
                <div>
                  <Goals
                    reward={goal.reward}
                    rewardPoint={goal.rewardPoint}
                    kidsPoint = {kid.totalPoint}
                    key={`available${goal.id}`} />
                  <button onClick={()=>handleSpendingPointsForReward(goal.id, goal.rewardPoint, id)}>Spend</button>
                </div>)
            })}
        </div>
        <div className="input-field center-align">
          <Link to={{ pathname: "/creategoal", selectedKid: { kid: kid, id: id} }} key={id} >
          <button className="btn pink lighten-1">Add a new goal</button>
          </Link>
          <Link to='/dashboard'><button className="btn pink lighten-1"><i class="material-icons left">cloud</i>Back to Dashboard</button></Link>
        </div>
      <div className="card-footer">
        <button className="btn grey lighten-1" onClick={handleDeletingKidsProfile}>Delete {kid.name}'s profile </button>
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