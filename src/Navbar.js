import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <ul>
            <li><Link to="/Form">Voters</Link></li>
            <li><Link to="/VotingOptions">Parties</Link></li>
            <li><Link to="/Results">Counting</Link></li>
            <li><Link to="/Results">Contact Us</Link></li>
            <li><Link to="/Results">Election Schedule</Link></li>
            
        </ul>
      </nav>
    </div>
  )
}
