import React from 'react'
import "../Navbar/Navbar.css"
import { CiSearch } from "react-icons/ci";
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import face from "../../assets/face.jpg"
import download1222 from "../../assets/download122.png"
import { FaArrowDown } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const Navbarr = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value); // Passing the search value up to the parent component
  };

  return (

    <div className='nav'>
      <h2>View users</h2>

      <div className="search-bar">
        <CiSearch />
        <input
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for User"
        />

      </div>

      <div className="profile">
        <div className="active">
          <img src={face} alt="" />
        </div>


        <div className="wrapper">

          <div className="arrow-down">
            <FaArrowDown />
          </div>
          {/* profile inFo */}
          <div className="profile-container ">
            <div className="profile-info-wrap">
              <a href="/" class="profile-menu-link">
                <p>Logout</p>
                <IoIosLogOut className='logout-icon' />

              </a>
            </div>
          </div>
        </div>
      </div>

    </div>



  )
}

export default Navbarr
