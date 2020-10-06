import React, { useState } from 'react';
import { connect } from 'react-redux'
import KidList from './KidList';
import { Link } from 'react-router-dom'


function Dashboard (props) {
  // const [goalsForSelectedKid, setGoalsForSelectedKid] = useState({});

  const handleChangingSelectedKid = (id) => {
    console.log("reach the id" + {id})
    // const action = selectKid(selectedKid);
    // dispatch(action);
  }
//  console.log(props.goals)
//    const handleSeeGoalsForSelectedKid = (id) => {
//      console.log("goal from dashboard and id " + id)
//     const goals = props.goals.filter(goal => {
//       console.log(goal.kidID)
//           return id === goal.kidId
//         })
//       setGoalsForSelectedKid( goals);
//   }



//  console.log(goalsForSelectedKid);
 
      const { auth, selectedGoals, selectedKid, kids, goals } = props;
      const goalsForSelectedKid = (kidId) => {
          props.goals.filter(goal => {
          return kidId === goal.kidId
        })
      }

    return (
      <div className="dashboard container">
        {  console.log( selectedKid ? "selected kid " + selectedKid.name : "null")}
        {console.log(selectedGoals ? "selectedGoals " + selectedGoals : "goal yok")}
        {/* {console.log( selectedKid ? "goals " + goals.kidId[props.selectedKid.id] : "null")} */}
        <h2>Parent Dashboard</h2>
        <p>Kids List</p>
        <KidList parentId={auth.uid} goalList={goals} />
        <Link to='/create'> + New Kid</Link>
    </div>
    )
  }


const mapStateToProps = state =>{
  return {
    auth: state.firebase.auth,
    kids: state.firestore.ordered.kids,
    goals: state.firestore.ordered.goals,
    selectedKid: state.selectedKid,
    selectedGoals: state.selectedGoals
    }
}
export default connect(mapStateToProps)(Dashboard);

// export default Dashboard