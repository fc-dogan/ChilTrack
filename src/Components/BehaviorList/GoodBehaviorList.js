import React from 'react';
import PropTypes from 'prop-types'

const goodbehaviorList =[
  "Listening",
  "Respectful",
  "Kindness"
]

function GoodBehaviorList(props) {
  return (
    <React.Fragment>
      <div className="container">
        {goodbehaviorList.map( goodbehavior => {
       return (
        <div>
            <div className="divider"></div>
            <div className="section">
              <a class="waves-effect waves-light btn-large" onClick={() => props.onIncreasePoint()}>{goodbehavior}</a>
            </div>
        </div>
        ) 
        })}
      </div>
      
    </React.Fragment>
  )
}

GoodBehaviorList.propTypes = {
  onIncreasePoint: PropTypes.func
}

export default GoodBehaviorList
