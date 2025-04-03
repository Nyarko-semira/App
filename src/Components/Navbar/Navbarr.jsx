import React from 'react'
import "../Navbar/Navbar.css"
import { CiSearch } from "react-icons/ci";

const Navbarr = () => {
  return (
    <div className='nav'>

      <div></div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li>News</li>
      </ul>

        <div className="search-bar">
          <CiSearch/>
          <input type='search' placeholder='Serach  for User'/>
        </div>

    </div>


  )
}

export default Navbarr
