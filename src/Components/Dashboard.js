import React, { useState } from 'react';
import { connect } from 'react-redux'
import KidList from './KidList';
import { Link } from 'react-router-dom'


function Dashboard (props) {
  const [goalsForSelectedKid, setGoalsForSelectedKid] = useState();

  const handleChangingSelectedKid = (id) => {
    console.log("reach the id" + {id})
    // const action = selectKid(selectedKid);
    // dispatch(action);
  }

   const handleSeeGoalsForSelectedKid = (id) => {
    let goalsForSelectedKid = props.goals.filter(goal => {
          return id === goal.kidId
        })
        return goalsForSelectedKid;
  }


 
      const { auth } = props;

    return (
      <div className="dashboard container">
        {  console.log( props.selectedKid ? "selected kid " + props.selectedKid.name : "null")}
        {/* {console.log( props.selectedKid ? "goals " + props.goals.kidId[props.selectedKid.id] : "null")} */}
        <h2>Parent Dashboard</h2>
        <p>Kids List</p>
        <KidList parentId={auth.uid} onKidSelection={handleChangingSelectedKid} />
        <Link to='/create'> + New Kid</Link>
    </div>
    )
  }


const mapStateToProps = state =>{
  return {
    auth: state.firebase.auth,
    kids: state.firestore.ordered.kids,
    goals: state.firestore.ordered.goals,
    selectedKid: state.selectedKid
    }
}
export default connect(mapStateToProps)(Dashboard);

// export default Dashboard