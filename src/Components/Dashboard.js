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
        <h3 className="container center-align">My Kids</h3>
        <Link to='/create' className="btn-floating waves-effect waves-light red"><i className="material-icons">add</i>New Kid</Link>
        
        <KidList parentId={auth.uid} />
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