import React from 'react'
import "../Main-container/MainContainer.css"
import Sidebar from '../Sidebar/Sidebar'
import { Outlet} from 'react-router-dom'
import Navbarr from '../Navbar/Navbarr'


const Maincontainer = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <Navbarr/>
      <div className="right-container">
        {<Outlet />}
      </div>
    </div>
  );
}
export default Maincontainer


