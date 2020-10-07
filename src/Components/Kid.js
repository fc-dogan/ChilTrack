import React, { useEffect } from 'react'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import GoodBehaviorList from './BehaviorList/GoodBehaviorList'
import BadBehaviorList from './BehaviorList/BadBehaviorList'
import M from "materialize-css";
import * as a from './../actions';
import one from './../assets/avatars/one.png'

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
        <div className="col s12 m12">
           <div className="card deep-orange lighten-5">
            <div className="card-title ">
              </div>
              <div className="card-panel">
              <h4 >{name} </h4>
              <Link to={{
                pathname:`/details/${id}`,
                props: { id: id}
                }} key={id}>  
               { console.log(props.image)}
                  <div className="card-panel hoverable">
                    <img className="responsive-img" src={props.image}></img>
                    {/* <img class="profile-pic" src={image} /> */}
                    <p>Total Point: <em>{totalPoint}</em></p>
                    <a className="btn deep-purple lighten-1 right">{name}'s goals</a>
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