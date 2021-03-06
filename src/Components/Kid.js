import React, { useEffect } from 'react'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import GoodBehaviorList from './BehaviorList/GoodBehaviorList'
import BadBehaviorList from './BehaviorList/BadBehaviorList'
import M from "materialize-css";
import * as a from './../actions';
import a1 from './../assets/avatars/a1.png'
import a2 from './../assets/avatars/a2.png'
import a3 from './../assets/avatars/a3.png'
import a4 from './../assets/avatars/a4.png'
import a5 from './../assets/avatars/a5.png'
import a6 from './../assets/avatars/a6.png'
import a7 from './../assets/avatars/a7.png'
import a8 from './../assets/avatars/a8.png'
import a9 from './../assets/avatars/a9.png'

function Kid(props) {
 const { name, totalPoint, id, image } = props;
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

  const imageList=[a1, a2, a3,a4,a5,a6,a7,a8,a9]
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
                    <img className=" circle responsive-img" src={imageList[image]}  style={{ height:"100px" }}></img>
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