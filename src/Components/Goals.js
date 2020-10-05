import React, {useState} from 'react';
import PropTypes from'prop-types'

function Goals(props) {
  const { kidsPoint, reward, rewardPoint} = props;
  // const [showModal, setShowModal] = useState(false);


  

  // if(kidsPoint === rewardPoint){
  //    return setShowModal(true)
  // }

  // if(showModal === true){
  //   // <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
  //   return (
  //     <div id="modal1" class="modal">
  //     <div class="modal-content">
  //       <h4>Modal Header</h4>
  //       <p>A bunch of text</p>
  //     </div>
  //     <div class="modal-footer">
  //       <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
  //     </div>
  //   </div>
  //   )
  // }

  return (
    <div>
      <p> {reward } = {rewardPoint} points</p>
    </div>
  )
}

Goals.propTypes = {
  reward: PropTypes.string,
  rewardPoint: PropTypes.number,
  kidsPoint: PropTypes.number
}

export default Goals
