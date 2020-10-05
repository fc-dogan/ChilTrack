import React, { useState } from 'react';
import { connect } from 'react-redux'
import KidList from './KidList';
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  
  render() {
    // const { selectedkid, setSelectedKid } = useState(null);
      const { auth } = this.props;

    return (
      <div className="dashboard container">
        <h2>Parent Dashboard</h2>
        <p>Kids List</p>
        <KidList parentId={auth.uid} />
        <Link to='/create'> + New Kid</Link>
    </div>
    )
  }
}
const mapStateToProps = state =>{
  return {
    auth: state.firebase.auth,
    kids: state.firestore.ordered.kids
    }
}
export default connect(mapStateToProps)(Dashboard);

// export default Dashboard