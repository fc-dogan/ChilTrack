import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedInLinks() {
  return (
    <div>
       <ul className="right">
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/dashboard'>Parent Dashboard</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks
