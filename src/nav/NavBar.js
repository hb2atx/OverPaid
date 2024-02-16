import React from 'react'
import { Link } from "react-router-dom"

import Homepage from '../components/Homepage';
import Profile from '../components/Profile';

const NavBar = () => {
  return (
    <div>
        <li>
            <Link exact path="/">
                <Homepage />
            </Link>
        </li>
        <li>
            <Link exact path="/profile">
                <Profile />
            </Link>
        </li>
    </div>
  )
}

export default NavBar;