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
      <div className="container">
        {badbehaviorList.map( badbehavior => {
        return ( 
          <div key={badbehavior}>
            <div className="divider"></div>
            <div className="section">
              <a className="waves-effect waves-light btn-large" onClick={() => props.onDecreasePoint()}>{badbehavior}</a>
            </div>
          </div>
        )
        })}
      </div>
    </React.Fragment>
  )
}

BadBehaviorList.propTypes = {
  onDecreasePoint: PropTypes.func
}

export default BadBehaviorList
