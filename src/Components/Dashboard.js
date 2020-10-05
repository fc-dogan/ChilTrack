import React, { useState } from 'react';
import { connect } from 'react-redux'
import KidList from './KidList';
import { Link } from 'react-router-dom'


class Dashboard extends React.Component {
  
  handleChangingSelectedKid = (id) => {
    console.log("reach the id" + {id})
    // const action = selectKid(selectedKid);
    // dispatch(action);
  }

  render() {
 
      const { auth } = this.props;

    return (
      <div className="dashboard container">
        <h2>Parent Dashboard</h2>
        <p>Kids List</p>
        <KidList parentId={auth.uid} onKidSelection={this.handleChangingSelectedKid} />
        <Link to='/create'> + New Kid</Link>
    </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    auth: state.firebase.auth,
    kids: state.firestore.ordered.kids,
    selectedKid: state.selectedKid
    }
}
export default connect(mapStateToProps)(Dashboard);

// export default Dashboard