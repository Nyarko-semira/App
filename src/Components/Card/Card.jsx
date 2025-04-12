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
import { useContext } from 'react';
import { UserContext } from '../ContextProvider';
import { Spinner } from 'react-bootstrap';


const Cardd = () => {
  const { show, setShow } = useContext(UserContext);
  const { selectedUser, setSelectedUser } = useContext(UserContext);
  const { users, setUsers } = useContext(UserContext);
  const { filteredUsers, loading, setLoading } = useContext(UserContext);




  const handleShow = (user) => {
    setSelectedUser(user);
    setShow(true);

  };

  const handleClose = () => {
    setShow(false);
    setSelectedUser(null);

  };





  return (
    <>
      <div className='cardd'>

        <div>
          <h2>Users</h2>

          <div className="card-container" >
            {loading ? (
                <div className="loader-container">
                <Spinner animation="border" variant="primary" /> {/* This is the spinner */}
                <div>Loading users...</div>
              </div>
            ) : (

              filteredUsers.map((user) => (
                <Card style={{ width: '18rem' }} className='card-content' key={user.id} onClick={() => handleShow(user)}>
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
                      <div className="mb-2"><FaCity />: {user.address?.city}</div>
                      <div className="mb-2"><TbZip />: {user.address?.zipcode}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>





              ))

            )} </div>
        </div>
        {selectedUser && (
          <Modalpage handleClose={handleClose}
          />
        )}
        <div>

        </div>
      </div>
    </>
  )
}

export default Cardd








