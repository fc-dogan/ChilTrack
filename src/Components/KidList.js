import React from 'react';
import Kid from './Kid'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function KidList() {

  useFirestoreConnect([
    { collection: 'kids' }
  ]);

  const kids = useSelector(state => state.firestore.ordered.kids);

  if (isLoaded(kids)) {
    return (
      <React.Fragment>
        <hr/>
        {kids.map((kid) => {
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
