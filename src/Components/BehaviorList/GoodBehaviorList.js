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
      {goodbehaviorList.map( goodbehavior => {
       return  <a class="waves-effect waves-light btn-large" onClick={() => props.onIncreasePoint()}>{goodbehavior}</a>
      })}
    </React.Fragment>
  )
}

GoodBehaviorList.propTypes = {
  onIncreasePoint: PropTypes.func
}

export default GoodBehaviorList
