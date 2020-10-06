import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'
// import {Navbar, Nav} from 'react-bootstrap'
import M from "materialize-css";

const NavBar = (props) => {
  const { auth } = props;
  console.log(auth);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  })

  return (
   <React.Fragment >
       <nav >
      <div className="nav-wrapper">
      {/* <a href="#!" class="brand-logo">Logo</a> */}
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <Link to='/dashboard' className="brand-logo">ChilTrack</Link>
      <ul className="right hide-on-med-and-down">
          {links}
      </ul>
      </div>
    </nav>

     <ul class="sidenav" id="mobile-demo">
      {links}
    </ul>
    </React.Fragment>
   
  )
}
const mapStateToProps = (state) => {
  console.log(state);
  return{
    auth: state.firebase.auth,
    
  }
}

export default connect(mapStateToProps)(NavBar)



// <Navbar collapseOnSelect fixed="top" expand="lg" >
   
{/* <Navbar.Brand  href='/'> Chiltrack</Navbar.Brand>
<Navbar.Toggle aria-controls='responsive-navbar-nav' />
<Navbar.Collapse id='responsive-navbar-nav'>
  <Nav className='ml-auto'>
    {links}
  </Nav>
</Navbar.Collapse>

</Navbar> */}
