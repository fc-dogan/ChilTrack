import React from 'react';
import Kid from './Kid'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function KidList(props) {

  useFirestoreConnect([
    { collection: 'kids' }
  ]);

  const kids = useSelector(state => state.firestore.ordered.kids);
  let kidsBelongToParent;
  
  if (isLoaded(kids)) {
    kidsBelongToParent = kids.filter(kid =>{
      return  props.parentId === kid.parentId
    })
    return (
      <React.Fragment>
        <hr/>
        {kidsBelongToParent.map((kid) => {
          console.log(kid.parentId)
          return <Kid
            name={kid.name}
            // createdTime={kid.createdTime}
            totalPoint={kid.totalPoint}
            id={kid.id}
            key={kid.id}/>
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

export default KidList
