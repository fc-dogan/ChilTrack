import React from 'react'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

function Kid(props) {

  let goals = props.goals.length < 1 ? `${props.name} has no goals setup` : props.goals.reward
  console.log(props.goals)
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
          <p>Goals: {goals}</p>
        </div>
        </div>
      </div>
    </Link>
    
  )
}

Kid.propTypes = {
  name: PropTypes.string,
  totalPoint: PropTypes.number,
  id: PropTypes.string
}

export default Kid
