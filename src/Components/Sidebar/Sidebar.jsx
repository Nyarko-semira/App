import React from 'react'
import "../Sidebar/Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-menu">
        <div className="header">
            <h1>Logo</h1>
        </div>

           <div className="list">
            <a href='#'>
                <p>View</p>
            </a>
            <a href='#'>
                <p>Add</p>
            </a>
            <a href='#'>
                <p>Edit</p>
            </a>
           </div>
        </div>
        
 

      
    </div>
  )
}

export default Sidebar
