import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';

function Navbar() {
  return (
    <nav >
      <div className="nav-wrapper">
        <Link to='/' className="brand-logo">ChilTrack</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><SignedInLinks/></li>
          <li><SignOutLinks /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar