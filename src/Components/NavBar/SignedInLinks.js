import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import * as a from '../../actions';

function SignedInLinks() {
  const dispatch = useDispatch();
  const signout = () => dispatch(a.signOut())
  return (
    <div>
       <ul className="right">
        <li><a onClick={signout}>Log Out</a></li>
        <li><NavLink to='/dashboard'>Parent Dashboard</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks
