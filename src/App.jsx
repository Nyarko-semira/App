import React from 'react'
import "./App.css"
import Sidebar from './Components/Sidebar/Sidebar'
import Navbarr from './Components/Navbar/Navbarr'
import RightContainer from './Components/RightContainer/RightContainer'



const App = () => {
  return (
    <div className='app'>
      <Sidebar className="sidebar"/>
         {/* <Navbarr className="ama"/> */}
         <RightContainer/>
      
      
     
    </div>
  )
}

export default App




