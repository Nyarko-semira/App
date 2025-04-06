import React from 'react'
import "../Sidebar/Sidebar.css"
import nice from '../../assets/medical-modern-flat-template.png'
import { GrView } from "react-icons/gr";
import { HiOutlineUserAdd } from "react-icons/hi";
import { FaUserEdit } from "react-icons/fa";


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-menu">
        <div className="header">
            <img src={nice}  className="logo" alt="" />
        </div>

           <div className="list">
            <a href='/'>
              <GrView />
              <span>View</span>
            </a>
            <a href='/Adduser'>
             <HiOutlineUserAdd/>
                <span>Add</span>
            </a>
       
            
           </div>
        </div>
        
 

      
    </div>
  )
}

export default Sidebar
