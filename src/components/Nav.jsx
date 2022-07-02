import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
    <ul>
        <li><Link to="/" >Accueil</Link> </li>
        <li><Link to="/home" >Home</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
    </ul>
</nav>

  )
}

export default Nav