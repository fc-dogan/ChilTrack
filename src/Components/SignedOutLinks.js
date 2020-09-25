import React from 'react'
import { NavLink } from 'react-router-dom'

function SignOutLinks() {
  return (
    <div>
       <ul className="right">
        <li><NavLink to='/signup'>Sign up</NavLink></li>
        <li><NavLink to='/signin'>Sign in</NavLink></li>
      </ul>
    </div>
  )
}

export default SignOutLinks