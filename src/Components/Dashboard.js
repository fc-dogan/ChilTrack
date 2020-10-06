import React from 'react';
import { connect } from 'react-redux'
import KidList from './KidList';
import { Link, Redirect } from 'react-router-dom'


class Dashboard extends React.Component {
  render() {
    const { auth } = this.props;
    console.log(auth.uid)
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="dashboard container">
        <h2>My Kids</h2>
        <KidList parentId={auth.uid} />
        <Link to='/create'> + New Kid</Link>
    </div>
    )
  }
}
const mapStateToProps = state =>{
  return {
    auth: state.firebase.auth,
    }
}
export default connect(mapStateToProps)(Dashboard);