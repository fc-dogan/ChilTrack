import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';

function Navbar() {
  return (
    <nav className="nav-wrapper purple darken-3">
      <div className="container">
        <h1>ChilTrack</h1>
        <Link to='/' >Parent Dashboard</Link>
        <SignedInLinks/>
        <SignOutLinks />
      </div>
    </nav>
  )
}

export default Navbar