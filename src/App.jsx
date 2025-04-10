import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Login from './Components/Login/Login';
import Cardd from './Components/Card/Card';
import Adduser from './Components/Adduser/Adduser';
import Editpage from './Components/Editpage/Editpage';
import Sidebar from './Components/Sidebar/Sidebar';
import Maincontainer from './Components/Main-container/mainContainer';


const App = () => {
  // const [users, setUsers] = useState([]);
  // const [filteredUsers, setFilteredUsers] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers(data);
  //       setFilteredUsers(data); 
  //     })
  //     .catch((error) => console.error("Error fetching users:", error));
  // }, []);


  // const handleAddUser = (newUser) => {
  //   setUsers((prevUsers) => [...prevUsers, newUser]);
  //   setFilteredUsers((prevUsers) => [...prevUsers, newUser]);
  // };


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
        console.log(setFilteredUsers)
      };


  return (
    <>

<Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Maincontainer/>}>
          <Route
            path="/cards"
            element={<Cardd />}
          />
          <Route
            path="/Adduser"
            element={<Adduser />}
          />
          <Route
            path="/Editname/:id"
            element={<Editpage/>}
          />
        </Route>
      </Routes>
    </Router>
  </>
  )
}

export default App




