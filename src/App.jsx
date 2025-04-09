import React from 'react'
import "./App.css"
import Sidebar from './Components/Sidebar/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbarr from './Components/Navbar/Navbarr'
import RightContainer from './Components/RightContainer/RightContainer'
import { useState, useEffect } from 'react'
import Login from './Components/Login/Login';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
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


       //  serach user

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
        console.log("dance")
      };
       


      // login
      const handleLogin = () => {
        setIsLoggedIn(true);
      };

  return (
    <>
  
    {!isLoggedIn ? (
      <Login onLogin={handleLogin} />
    ) : (
      <>
      <Router>
        <Sidebar className="sidebar"   /> 
        </Router>
        <RightContainer
          setUsers={setUsers}
          handleAddUser={handleAddUser}
          handleSearch={handleSearch}
          users={users}
          filteredUsers={filteredUsers}
        >
          

          </RightContainer>
      </>
    )}
    
  </>
  )
}

export default App




