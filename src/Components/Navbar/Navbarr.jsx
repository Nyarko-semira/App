import React from 'react'
import "../Navbar/Navbar.css"
import { CiSearch } from "react-icons/ci";
import { Form } from 'react-bootstrap';
import { useState } from 'react';

const Navbarr = ({handleSearch}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    console.log("heloef")
    setSearchQuery(e.target.value);
    handleSearch(e.target.value); // Passing the search value up to the parent component
  };

  return (
    <div className='nav'>


        <div className="search-bar">
          <CiSearch/>
         <input type='search'value={searchQuery}
         onChange={handleSearchChange} placeholder='Serach  for User'/> 

          
        </div>

    </div>


  )
}

export default Navbarr
