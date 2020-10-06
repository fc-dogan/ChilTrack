import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestore} from 'react-redux-firebase';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {incrementKidsPoints, decrementKidsPoints } from '../actions/kidsActions'
import {selectedKid} from '../actions/selectedKidActions'
import { Icon } from 'react-icons-kit'
import {checkmark } from 'react-icons-kit/icomoon/checkmark'
import {close} from 'react-icons-kit/ionicons/close'
import GoodBehaviorList from './BehaviorList/GoodBehaviorList'
import BadBehaviorList from './BehaviorList/BadBehaviorList'
import M from "materialize-css";
import {selectedGoals} from '../actions/selectedGoalsActions'


function Kid(props) {
  // const [availableRewards, setAvailableRewards] = useState([])
  // const firestore = useFirestore();
 const { name, totalPoint, id, whenKidClicked } = props;
  useEffect(() => {
      // Auto initialize all the things!
    M.AutoInit();
})
  const dispatch = useDispatch();
 
  const increasePoint = () => {
    dispatch(incrementKidsPoints(id));
    // isPointReachTheReward()
  }
  const decreasePoint = () => {
    dispatch(decrementKidsPoints(id, 1))
  }

  const selectKid = () => {
    dispatch(selectedKid(id, name, totalPoint))
  }
 

  useFirestoreConnect([
    { collection: 'goals' }
  ]);
  // const handleClick = () => {
    //   selectKid();
    //   return whenKidClicked(id)
    // }
    const goals = useSelector(state => state.firestore.ordered.goals);
    let goalsForSelectedKid;
    if (isLoaded(goals)) {
      goalsForSelectedKid = goals.filter(goal => {
        return id === goal.kidId
      })
    }
    // console.log(goalsForSelectedKid)
    // const isPointReachTheReward = () =>  goalsForSelectedKid.map(goal => {
    //   if(goal.rewarPoint === totalPoint){
    //     setAvailableRewards(goal.name)
    //   }
    // });
    // useEffect( isPointReachTheReward())
// console.log(showGoalModal)
  // let currentlyVisible;
  //  if(showGoalModal === true) {
  //    currentlyVisible = (
  //      <p>"reach the reward"</p>
  //    )
  //  } else {
  //    currentlyVisible = (
  // }
  
  return (
    <React.Fragment>  
       <div class="card"> 
        <div class="card-content">
          <Link to={{
            pathname:`/details/${id}`,
            props: { id: id }
            }} key={id}
            onClick={selectKid} >  
              <div className="card-panel hoverable grey lighten-4 grey-text">
                <p>Name: {name} </p>
                <p>Total Point: <em>{totalPoint}</em></p>
              </div>
          </Link>
        </div>
        <div class="card-tabs">
          <ul class="tabs ">
            <li class="tab"><a href={`#${name}-empty`} class="active"></a></li>
            
            <li class="tab"><a href={`#${name}-goodList`}><i className="material-icons right" id="good" style={{ color: '#F4A261' }}>done_outline</i></a></li>

            <li class="tab"><a href={`#${name}-badList`}><i className="material-icons left" style={{ color: '#F4A261' }}>thumb_down</i></a></li>

          </ul>
        </div>
        <div class="card-content grey lighten-4">
          <div id={`${name}-empty`}></div>
          <div id={`${name}-goodList`}>
            <GoodBehaviorList onIncreasePoint={increasePoint} />
          </div>
          <div id={`${name}-badList`}>
            <BadBehaviorList onDecreasePoint={decreasePoint} />
          </div>
        </div>
      </div>
  </React.Fragment>
 )
    
    
}

Kid.propTypes = {
  name: PropTypes.string,
  totalPoint: PropTypes.number,
  id: PropTypes.string,
  // goalList: PropTypes.object
}

export default Kid
