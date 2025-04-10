import React from 'react'
import "../Sidebar/Sidebar.css"
import nice from '../../assets/medical-modern-flat-template.png'
import { GrView } from "react-icons/gr";
import { HiOutlineUserAdd } from "react-icons/hi";
import { FaUserEdit } from "react-icons/fa";
import logoo from "../../assets/InfoHive (4).png";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Sidebar = () => {
  return (
    <>
      <div className='sidebar' >

        <div className="sidebar-menu">
          <div className="header">
            <img src={nice} className="logo" alt="" />
          </div>

          <div className="logo-info">
            <img src={logoo} alt="" />
          </div>

          <div className="list">
            <Link to='/cards'>
              <GrView />
              <span>View</span>
            </Link>

            <Link to='/Adduser'>
              <HiOutlineUserAdd />
              <span>Add</span>
            </Link>
          </div>

        </div>




      </div>

      <div className='sidebar-second'>

        <div className="sidebar-menu-tab">

          <div className="logo-info-tab">
            <img src={logoo} alt="" />
          </div>

          <div className="list">
          <Link to='/'>
              <GrView />
            </Link>

            <Link to='/Adduser'>
              <HiOutlineUserAdd />
            </Link>


          </div>
        </div>




      </div>


    </>
  )
}

export default Sidebar
