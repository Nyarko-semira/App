import React from 'react'
import "../Navbar/Navbar.css"
import { CiSearch } from "react-icons/ci";
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import face from "../../assets/face.jpg"
import download1222 from "../../assets/download122.png"
import { FaArrowDown } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useContext } from 'react';
import { UserContext } from '../ContextProvider';
import { Link } from 'react-router-dom';

const Navbarr = () => {
  const { searchQuery, setSearchQuery} = useContext(UserContext)
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value); // Passing the search value up to the parent component
  };

  const handleSearch = (searchQuery) => {
    if (!searchQuery) {
      setFilteredUsers(users); 
      return;
    }
        const filtered = users.filter(
          (user) =>
            user.username.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by username only
        );
        setFilteredUsers(filtered);
        console.log(setFilteredUsers)
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
               <Link to='/' className="profile-menu-link">
                <p>Logout</p>
                <IoIosLogOut className='logout-icon' />
                </Link>
            
            </div>
          </div>
        </div>
      </div>

    </div>



  )
}

export default Navbarr
