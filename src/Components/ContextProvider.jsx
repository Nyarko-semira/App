import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'

export const UserContext = createContext();

const ContextProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const [selectedUser, setSelectedUser] = useState(null);
    const [show, setShow] = useState(false);
  
      useEffect(() => {
         fetch("https://jsonplaceholder.typicode.com/users")
           .then((response) => response.json())
           .then((data) => {
             setUsers(data);
             setFilteredUsers(data); 
           })
           .catch((error) => console.error("Error fetching users:", error));
       }, []);


    
  return (
    <UserContext.Provider value={{ users, setUsers, filteredUsers, setFilteredUsers, searchQuery, setSearchQuery, selectedUser, setSelectedUser, show, setShow  }}>
    {children}
  </UserContext.Provider>
);
  
}

export default ContextProvider
