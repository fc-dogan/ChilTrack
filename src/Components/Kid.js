import React, { useEffect } from 'react'
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import GoodBehaviorList from './BehaviorList/GoodBehaviorList'
import BadBehaviorList from './BehaviorList/BadBehaviorList'
import M from "materialize-css";
import * as a from './../actions';

function Kid(props) {
 const { name, totalPoint, id } = props;
  useEffect(() => {
      // Auto initialize all the things!
    M.AutoInit();
})
  const dispatch = useDispatch();
 
  const increasePoint = () => {
    dispatch(a.incrementKidsPoints(id))
  }
  const decreasePoint = () => {
    dispatch(a.decrementKidsPoints(id, 1))
  }
    return (
      <React.Fragment>  
           <div class="card">
            <div class="card-content">
              <Link to={{
                pathname:`/details/${id}`,
                props: { id: id}
                }} key={id}>  
                  <div className="card-panel hoverable grey lighten-4 grey-text">
                    <p>Name: {name} </p>
                    <p>Total Point: <em>{totalPoint}</em></p>
                  </div>
              </Link>
            </div>
            <div class="card-tabs">
              <ul class="tabs ">
                <li class="tab"><a href={`#${name}-empty`} class="active"></a></li>
                
                <li class="tab"><a href={`#${name}-goodList`}><i className="material-icons right" id="good" style={{ color: '#F4A261' }}>done_outline</i></a></li>

                <li class="tab"><a href={`#${name}-badList`}><i className="material-icons left" style={{ color: '#F4A261' }}>thumb_down</i></a></li>

              </ul>
            </div>
            <div class="card-content grey lighten-4">
              <div id={`${name}-empty`}></div>
              <div id={`${name}-goodList`}>
                <GoodBehaviorList onIncreasePoint={increasePoint} />
              </div>
              <div id={`${name}-badList`}>
                <BadBehaviorList onDecreasePoint={decreasePoint} />
              </div>
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