import React from 'react'
import "./App.css"
import Sidebar from './Components/Sidebar/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbarr from './Components/Navbar/Navbarr'
import RightContainer from './Components/RightContainer/RightContainer'
import { useState, useEffect } from 'react'



const App = () => {

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data); 
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);


  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setFilteredUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleSearch = (searchQuery) => {
    if (!searchQuery) {
      setFilteredUsers(users); // If search is empty, show all users
      return;
    }

        // Filter users based on username only
        const filtered = users.filter(
          (user) =>
            user.username.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by username only
        );
        setFilteredUsers(filtered);
      };

  return (
    <>
      <Sidebar className="sidebar" />
      {/* <Navbarr className="ama"/> */}
      <RightContainer   setUsers={setUsers}  handleAddUser={handleAddUser} handleSearch={handleSearch} users={filteredUsers} />
      
  


    </>
  )
}

export default App




