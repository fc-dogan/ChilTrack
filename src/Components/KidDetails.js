import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useFirestore} from 'react-redux-firebase';
import { Link, useHistory } from 'react-router-dom';
import CreateNewGoal from './CreateNewGoal'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import Goals from './Goals'
import {selectedGoals} from '../actions/selectedGoalsActions'
import { useDispatch } from 'react-redux'
import {incrementKidsPoints, decrementKidsPoints } from '../actions/kidsActions'

function KidDetails(props) {
  const history = useHistory();
  const id = props.location.props.id;
  const kids = useSelector(state => state.firestore.data.kids);
  const kid = kids[id]

 const firestore = useFirestore();
 const dispatch = useDispatch();

 const handleDeletingKidsProfile =() =>{
    firestore.delete({collection: 'kids', doc: id });
    history.push('/dashboard')
 }
 const handleSpendingPointsForReward =(GoalId, rewardPoint, kidId) => {
   firestore.delete({collection: 'goals', doc: GoalId });
   dispatch(decrementKidsPoints(kidId, rewardPoint))
  
   console.log("spend")
 }

 useFirestoreConnect([
  { collection: 'goals' }
]);

// const [availableRewards, setAvailableRewards] = useState([])
const goals = useSelector(state => state.firestore.ordered.goals);
console.log(goals)
console.log(id)

const selectGoals = (goalsForKid) => {
  dispatch(selectedGoals(goalsForKid))
}

  let goalsForSelectedKid;
  let availableRewards;
  if (isLoaded(goals)) {
    goalsForSelectedKid = goals.filter(goal => {
      return id === goal.kidId;
    })
  
    availableRewards =  goalsForSelectedKid.filter( goal => {
        return goal.rewardPoint <= kid.totalPoint
    })
      
      console.log(availableRewards);


    selectGoals(goalsForSelectedKid)
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
                <Goals
                  reward={goal.reward}
                  rewardPoint={goal.rewardPoint}
                  kidsPoint = {kid.totalPoint}
                  key={goal.id}
                />
              )
            })}
          <h5> Available Rewards:</h5>
          {availableRewards.map( goal =>{
              return (
                <div>

                  <Goals
                    reward={goal.reward}
                    rewardPoint={goal.rewardPoint}
                    kidsPoint = {kid.totalPoint}
                    key={goal.id}
                    // toSpend={handleSpendingPointsForReward}
                  />
                  <button onClick={()=>handleSpendingPointsForReward(goal.id, goal.rewardPoint, id)}>Spend1</button>
                </div>
              )
            })}
        </div>
        <div className="input-field">
          <Link to={{ pathname: "/creategoal", selectedKid: { kid: kid, id: id} }} key={id} >
          <button className="btn pink lighten-1">Add a new goal</button>
          </Link>
        </div>
      <div className="card-footer">
        <button className="btn grey lighten-1" onClick={handleDeletingKidsProfile}>Delete </button>
        <Link to='/dashboard'>Back to Dashboard</Link>
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