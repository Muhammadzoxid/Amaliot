import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
        <h2>Logo</h2>

        <ul>
        <Link to={'/'}>Home</Link>
        <Link to={'About'}>Ctreate user</Link>
        <Link to={'Services'}>Users</Link>
        </ul>
    </div>
  )
}

export default Navbar