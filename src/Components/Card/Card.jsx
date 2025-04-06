import React from 'react'
import "../Card/Card.css"
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { FaStreetView } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { TbZip } from "react-icons/tb";
import { FaUserTie } from "react-icons/fa6";
import Navbarr from '../Navbar/Navbarr';
import Modalpage from '../Modal/Modalpage';


const Cardd = ({ users, setUsers , handleSearch}) => {
     const [show, setShow] = useState(false);
     const [selectedUser, setSelectedUser] = useState(null);
  
     const handleClose = () => {
      setShow(false);
      setSelectedUser(null);
    };


     const handleShow = (user) => {
    setSelectedUser(user);
    setShow(true);
  };

 


  return (
    <>
    <Navbarr handleSearch={handleSearch}/>
    <div className='cardd'>
  
      <div>
        <h2>Users</h2>

        <div className="card-container" >
      
          {users.map((user) => (
            <Card style={{ width: '18rem' }} className='card-content' key={user.id}  onClick={() => handleShow(user)}>
              <Card.Body>
                <Card.Title className="mb-4 ">{user.name}</Card.Title>

                <Card.Subtitle className="mb-3 text-muted">
                  <MdOutlineAttachEmail className='iconed' /> {user.email}
                </Card.Subtitle>

                <Card.Subtitle className="mb-3 text-muted">
                  <FaUserTie /> {user.username}
                </Card.Subtitle>

                <Card.Text as="div">
                  <div className="mb-2"><FaStreetView />: {user.address.street}</div>
                  <div className="mb-2"><FaCity />: {user.address.city}</div>
                  <div className="mb-2"><TbZip />: {user.address.zipcode}</div>
                </Card.Text>
              </Card.Body>
            </Card>

          



          ))}

          
        </div>
        {selectedUser && (
          <Modalpage
            handleClose={handleClose}
            show={show}
            setShow={setShow}
            selectedUser={selectedUser}
          />
        )}
        <div>

        </div>
      </div>


    </div>
    </>
  )
}

export default Cardd








