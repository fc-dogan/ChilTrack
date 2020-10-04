import React from 'react'
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {incrementKidsPoints, decrementKidsPoints } from '../actions/kidsActions'
import { Icon } from 'react-icons-kit'
import {checkmark } from 'react-icons-kit/icomoon/checkmark'
import {close} from 'react-icons-kit/ionicons/close'

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
        <div className="card z-depth-0 ">

      <Link to={{
        pathname:`/details/${props.id}`,
        props: { id: props.id}
        }} key={props.id}>  
          <div className="card-panel hoverable grey lighten-4 grey-text">
            <p>Name: {props.name} </p>
            <p>Total Point: <em>{props.totalPoint}</em></p>
          </div>
      </Link>
          <div className="card-action ">
            <p className='btn-floating btn-large waves-effect waves-light yellow darken-2'  onClick={increasePoint} >
              <Icon size={30} icon={checkmark}/>
            </p>
            {/* <button onClick={increasePoint}>increase point</button> */}
            <p class="waves-effect waves-teal btn-flat" onClick={decreasePoint} style={{ color: '#F4A261' }}>
              <Icon size={30} icon={close} />
            </p>
          </div>
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
