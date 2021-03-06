import React, { useState } from 'react'
import { useFirestore} from 'react-redux-firebase';
import { useDispatch } from 'react-redux'
import * as a from './../actions';
import { Link, useHistory } from 'react-router-dom';

function CreateNewGoal(props) { 
  const history = useHistory();
  const dispatch = useDispatch();
  let id = props.location.selectedKid.id;
  
  function addGoalToFirestore(event){
    event.preventDefault();
    dispatch(a.createNewGoal(
      {
        reward: event.target.reward.value,
        rewardPoint: parseInt(event.target.rewardPoint.value),
      },
      id
    ))
    history.push("/dashboard")
  }

  return (
    <div className="container" onSubmit={addGoalToFirestore}>
    <form >
      <h5 className="grey-text text-darken-3">Add a new Goal</h5>
      <div className="input-field">
        <input type="text" name='reward' required/>
        <label htmlFor="reward">What is the reward for this goal?</label>
      </div>
      <div className="input-field">
        <input type="text" name='rewardPoint' required/>
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
