import React from 'react'

import Cardd from '../Card/Card'
import Adduser from '../Adduser/Adduser'
import Editpage from '../Editpage/Editpage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const RightContainer = ({users, setUsers,handleAddUser, handleSearch}) => {
  return (
    <div className='right-container'>

        <Router>
      <Routes>
        <Route path="/" element={<Cardd users={users}  setUsers={setUsers} handleSearch={handleSearch}/>} />
        <Route path="/Adduser" element={<Adduser handleAddUser={handleAddUser}/>} />
        <Route path="/Editname" element={<Editpage users={users} setUsers={setUsers}/>} />
      </Routes>
    </Router>
         {/* <Cardd users={users}  setUsers={setUsers}/>
         <Adduser handleAddUser={handleAddUser}/>
         <Editpage users={users} setUsers={setUsers}/> */}
    </div>
  )
}

export default RightContainer
