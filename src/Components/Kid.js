import React from 'react'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

function Kid(props) {
  return (
    <Link to={`/details/${props.id}`} key={props.id}> 
      <div >
        <div className="card z-depth-0 event">

        <div className="card-action grey lighten-4 grey-text">
          <p>Name: {props.name} </p>
          {/* <p>{props.createdTime} </p> */}
          <p>Total Point: <em>{props.totalPoint}</em></p>
        </div>
        </div>
      </div>
    </Link>
    
  )
}

Kid.propTypes = {
  name: PropTypes.string,
  // createdTime: PropTypes.string,
  totalPoint: PropTypes.number,
  id: PropTypes.string
}

export default Kid
