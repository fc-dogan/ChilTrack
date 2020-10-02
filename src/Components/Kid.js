import React from 'react'
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function Kid(props) {

  useFirestoreConnect([
    { collection: 'goals' }
  ]);

  // let goals = props.goals.length < 1 ? `${props.name} has no goals setup` : props.goals.reward
  // console.log(props.goals)
  const goals = useSelector(state => state.firestore.ordered.goals);
  console.log(goals)
  console.log(props.id)
  // const oneGoal = goals[props.id] === undefined ? "yok" : goals[props.id]
  // console.log( oneGoal)
  let goalsForSelectedKid;
  if (isLoaded(goals)) {
      goalsForSelectedKid = goals.filter(goal => {
        return props.id === goal.kidId
      })
      console.log(goalsForSelectedKid[0])
  
  return (
    <Link to={{
      pathname:`/details/${props.id}`,
      props: { id: props.id}
      }} key={props.id}> 
      <div >
        <div className="card z-depth-0 event">

        <div className="card-action grey lighten-4 grey-text">
          <p>Name: {props.name} </p>
          <p>Total Point: <em>{props.totalPoint}</em></p>
          <p>Goals: {goalsForSelectedKid.map( goal =>{
             return <p>{goal.reward }</p>
          })}</p>
        </div>
        </div>
      </div>
    </Link>
  
  )
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

Kid.propTypes = {
  name: PropTypes.string,
  totalPoint: PropTypes.number,
  id: PropTypes.string
}

export default Kid
