import React, { useState } from 'react'
import { useFirestore} from 'react-redux-firebase';
import { useDispatch } from 'react-redux'
import { createNewGoal } from '../actions/goalsActions';

function CreateNewGoal(props) { 
  // const  [reward, setReward] = useState("")
  // const  [rewardPoint, setRewardPoint] = useState(0)
  // const  [newgoal, setnewgoal] = useState({})

  // const firestore = useFirestore();

  // let kid = props.location.selectedKid.kid;
  let id = props.location.selectedKid.id;

  // console.log(kid.goals)

  // function handleGoalFormSubmission(event){
  //   event.preventDefault();
  //   console.log(event.target.reward.value)
  //   setnewgoal({
  //       reward: event.target.reward.value,
  //       rewardPoint: event.target.rewardPoint.value
  //     })
  //   // setnewgoal(event.target.reward.value)
  //   console.log("newgoal" + newgoal);
  //   let propertiesToUpdate = {
  //           goals: [ ...kid.goals, newgoal]
  //         };
  //   return firestore.update({collection: 'kids', doc: id}, propertiesToUpdate);
  // }

  
  // const history = useHistory()
  const firestore = useFirestore();
  const dispatch = useDispatch();
  
  function addGoalToFirestore(event){
    event.preventDefault();
    dispatch(createNewGoal(
      {
        reward: event.target.reward.value,
        rewardPoint: event.target.rewardPoint.value,
      },
      id
    ))
    // history.push("/dashboard")
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
