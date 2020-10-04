import React from 'react'

const badbehaviorList= [
  "Lying",
  "Answering back",
  "Fighting"
]


function BadBehaviorList() {
  return (
    <React.Fragment>
      {badbehaviorList.map( badbehavior => {
       return  <a class="waves-effect waves-light btn-large" >{badbehavior}</a>
      })}
    </React.Fragment>
  )
}

export default BadBehaviorList
