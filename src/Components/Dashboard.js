import React from 'react';

import KidList from './KidList';
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux';
// import { withFirestore, isLoaded } from 'react-redux-firebase';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard container">
        <h2>Parent Dashboard</h2>
        <p>Kids List</p>
        <KidList />
        <Link to='/create'> + New Kid</Link>
    </div>
    )
  }
}
// const mapStateToProps = state =>{
//   return {
//     // auth: state.firebase.auth,
//     // kidList: kidListReducer,

//   }
// }
// Dashboard = connect(mapStateToProps)(Dashboard);

export default Dashboard