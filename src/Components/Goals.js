import React from 'react';
import PropTypes from'prop-types'

function Goals(props) {
  return (
    <div>
      <p> {props.reward } = {props.rewardPoint} points</p>
    </div>
  )
}

Goals.propTypes = {
  reward: PropTypes.string,
  rewardPoint: PropTypes.number
}

export default Goals
