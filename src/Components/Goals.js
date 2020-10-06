import React, {useState} from 'react';
import PropTypes from'prop-types'

function Goals(props) {
  const { kidsPoint, reward, rewardPoint, toSpend} = props;

  const handleEditReward =() =>{
    console.log("editing reward")
  }

  return (
    <div onClick={handleEditReward}>
      <h5 style={{ color: '#e53935' }}><i class="material-icons left">star_rate</i>{reward }</h5>
      <p>{rewardPoint} points</p>
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
