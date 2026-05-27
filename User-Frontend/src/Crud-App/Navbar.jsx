import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul>
        <li><Link to="/">  Home    </Link></li>
        <li><Link to="/Get">  Get     </Link></li>
        <li><Link to="/Post">  Post    </Link></li>
        <li><Link to="/Put">  Put     </Link></li>
        <li><Link to="/Delete">  Delete  </Link></li>
      </ul>
    </div>
  )
}

export default Navbar
