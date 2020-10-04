import React from 'react'
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {incrementKidsPoints, decrementKidsPoints } from '../actions/kidsActions'

function Kid(props) {
  const dispatch = useDispatch();
  const increasePoint = () => {
    dispatch(incrementKidsPoints(props.id))
  }
  const decreasePoint = () => {
    dispatch(decrementKidsPoints(props.id))
  }
    return (
      <React.Fragment>

      <Link to={{
        pathname:`/details/${props.id}`,
        props: { id: props.id}
        }} key={props.id}>  
          <div className="card z-depth-0 ">
          <div className="card-action grey lighten-4 grey-text">
            <p>Name: {props.name} </p>
            <p>Total Point: <em>{props.totalPoint}</em></p>
          </div>
          </div>
      </Link>
          <div className="card-action pink lighten-4">
            <button onClick={increasePoint}>increase point</button>
            <button onClick={decreasePoint}>decrease point</button>
          </div>
      </React.Fragment>
    ) 
}

Kid.propTypes = {
  name: PropTypes.string,
  totalPoint: PropTypes.number,
  id: PropTypes.string
}

export default Kid
