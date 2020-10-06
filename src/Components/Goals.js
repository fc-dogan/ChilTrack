import React, {useState} from 'react';
import PropTypes from'prop-types'

function Goals(props) {
  const { kidsPoint, reward, rewardPoint, toSpend} = props;

  const handleEditReward =() =>{
    console.log("editing reward")
  }

  return (
    <div onClick={handleEditReward}>
      <li> {reward } = {rewardPoint} points</li>
    </div>
    
  )
}

Goals.propTypes = {
  reward: PropTypes.string,
  rewardPoint: PropTypes.number,
  kidsPoint: PropTypes.number,
  // toSpend: PropTypes.func
}

export default Goals
