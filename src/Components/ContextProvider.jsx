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
    const [loading, setLoading] = useState(false);

      useEffect(() => {
        setLoading(true);
         fetch("https://jsonplaceholder.typicode.com/users")
           .then((response) => response.json())
           .then((data) => {
            setTimeout(() => {
              setUsers(data);
              setFilteredUsers(data);
              setLoading(false);
            }, 100); // 2000ms = 2 seconds
          
           })
           .catch((error) => console.error("Error fetching users:", error));
           setLoading(false); 
       }, []);


    
  return (
    <UserContext.Provider value={{ users, setUsers, filteredUsers, setFilteredUsers, searchQuery, setSearchQuery, selectedUser, setSelectedUser, show, setShow, 
      loading, setLoading
     }}>
    {children}
  </UserContext.Provider>
);
  
}

export default ContextProvider
