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
  const handleDeleteGoal = (GoalId) =>{
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
          <h4><span className="card-title">{kid.name}</span></h4>
          <p>Total Point: {kid.totalPoint} </p>
        </div>
        <div className="card-action ">
          <div className="row">
            <div className="col s12 m6">
              <h5 className="card-panel indigo lighten-5">Goals:</h5>
              {goalsForSelectedKid.map( goal =>{
                return (
                  <div>
                    <button onClick={()=> handleDeleteGoal(goal.id)}  className="right">delete</button>
                    <Goals
                      reward={goal.reward}
                      rewardPoint={goal.rewardPoint}
                      kidsPoint = {kid.totalPoint}
                      key={goal.id} />
                  </div>
                    )
                })}
            </div>
            <div className="col s12 m6">
              <h5 className="card-panel indigo lighten-5"> Available Rewards:</h5>
              {availableRewards.map( goal =>{
                return (
                  <div>
                    <Goals
                      reward={goal.reward}
                      rewardPoint={goal.rewardPoint}
                      kidsPoint = {kid.totalPoint}
                      key={`available${goal.id}`} />
                    <button onClick={()=>handleSpendingPointsForReward(goal.id, goal.rewardPoint, id)}
                            className="btn-small grey lighten-1"
                      ><i className="material-icons left">done_outline</i>spend points for {goal.reward}</button>
                  </div>)
                })}
            </div>
          </div>
        <div className="row ">
          <div className="col s6">
            <Link to={{ pathname: "/creategoal", selectedKid: { kid: kid, id: id} }} key={id} >
              <button className="btn pink lighten-1"><i className="material-icons left">add_circle</i> new goal</button>
            </Link>
          </div>
          <div className="col s6">
            <Link to='/dashboard'><button className="btn pink lighten-1"><i className="material-icons left">undo</i>Back to Kids</button></Link>
          </div>
        </div>
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