import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth } = props;
  console.log(auth);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <React.Fragment >
       <nav >
      <div className="nav-wrapper">
      {/* <a href="#!" class="brand-logo">Logo</a> */}
      {/* <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
        <Link to='/' className="brand-logo">ChilTrack</Link>
      <ul class="right hide-on-med-and-down">
          {links}
      </ul>
      </div>
    </nav>

     {/* <ul class="sidenav" id="mobile-demo">
      {links}
    </ul> */}
    </React.Fragment>
   
  )
}
const mapStateToProps = (state) => {
  console.log(state);
  return{
    auth: state.firebase.auth,
    
  }
}

export default connect(mapStateToProps)(Navbar)