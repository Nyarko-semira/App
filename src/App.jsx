import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Components/Login/Login';
import Cardd from './Components/Card/Card';
import Adduser from './Components/Adduser/Adduser';
import Editpage from './Components/Editpage/Editpage';

import Maincontainer from './Components/Main-container/mainContainer';


const App = () => {


  return (
 <div className="app">

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
    </div>
  )
}

export default App




