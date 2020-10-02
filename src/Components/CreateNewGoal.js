import React, { useState } from 'react'
import { useFirestore} from 'react-redux-firebase';
import { useDispatch } from 'react-redux'
import { createNewGoal } from '../actions/goalsActions';
import { Link, useHistory } from 'react-router-dom';

function CreateNewGoal(props) { 
  const history = useHistory();
  const dispatch = useDispatch();
  let id = props.location.selectedKid.id;
  
  function addGoalToFirestore(event){
    event.preventDefault();
    dispatch(createNewGoal(
      {
        reward: event.target.reward.value,
        rewardPoint: event.target.rewardPoint.value,
      },
      id
    ))
    history.push("/dashboard")
  }

  return (
    <div className="container" onSubmit={addGoalToFirestore}>
    <form className="white" >
      <h5 className="grey-text text-darken-3">Add a new Goal</h5>
      <div className="input-field">
        <input type="text" name='reward' />
        <label htmlFor="reward">What is the reward for this goal?</label>
      </div>
      <div className="input-field">
        <input type="text" name='rewardPoint' />
        <label htmlFor="rewardPoint">How many points?</label>
      </div>
      <div className="input-field">
        <button className="btn pink lighten-1">Create</button>
      </div>
    </form>
    </div>
  )
  
}

export default CreateNewGoal
