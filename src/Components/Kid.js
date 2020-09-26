import React from 'react'
import PropTypes from "prop-types";

function Kid(props) {
  return (
    <div >
      <div className="card z-depth-0 event">

      <div className="card-action grey lighten-4 grey-text">
        <p>Name: {props.name} </p>
        {/* <p>{props.createdTime} </p> */}
        <p>Total Point: <em>{props.totalPoint}</em></p>
      </div>
      </div>
    </div>
  )
}

Kid.propTypes = {
  name: PropTypes.string,
  // createdTime: PropTypes.string,
  totalPoint: PropTypes.number,
  id: PropTypes.string
}

export default Kid
