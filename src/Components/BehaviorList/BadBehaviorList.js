import React from 'react'
import PropTypes from 'prop-types'

const badbehaviorList= [
  "Lying",
  "Answering back",
  "Fighting"
]


function BadBehaviorList(props) {
  return (
    <React.Fragment>
      {badbehaviorList.map( badbehavior => {
       return  <a class="waves-effect waves-light btn-large" >{badbehavior}</a>
      })}
    </React.Fragment>
  )
}

BadBehaviorList.propTypes = {
  onDecreasePoint: PropTypes.func
}

export default BadBehaviorList
