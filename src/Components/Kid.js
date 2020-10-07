import React, { useEffect } from 'react'
import PropTypes from "prop-types";
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
           <div className="card deep-orange lighten-5">
            <div className="card-content ">
              <Link to={{
                pathname:`/details/${id}`,
                props: { id: id}
                }} key={id}>  
                  <div className="card-panel hoverable">
                    <h4 >{name} </h4>
                    <a class="btn deep-purple lighten-1 right">{name}'s goals</a>
                    <p>Total Point: <em>{totalPoint}</em></p>
                  </div>
              </Link>
            </div>
            <div className="card-tabs right">
              <ul className="tabs ">
                <li className="tab"><a href={`#${name}-empty`}  className="active"><i className=" material-icons" style={{ color: '##e53935',fontSize:"50px" }}>expand_less</i></a></li>
                
                <li className="tab"><a href={`#${name}-goodList`}><i className="material-icons hoverable" id="good" style={{ color: '#006064  ',fontSize:"50px" }}>sentiment_very_satisfied</i></a></li>

                <li className="tab"><a href={`#${name}-badList`}><i className="material-icons hoverable" style={{ color: '#e65100 ', fontSize:"50px" }}>sentiment_very_dissatisfied</i></a></li>

              </ul>
            </div>
            <div className="card-content ">
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