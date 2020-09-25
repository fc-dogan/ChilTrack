import React from 'react';

// import KidList from './KidList';
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard container">
        <h2>Parent Dashboard</h2>
        <p>Kids List</p>
        {/* <KidList /> */}
        <Link to='/create'> + New Kid</Link>
    </div>
    )
  }
}

export default Dashboard