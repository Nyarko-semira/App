import React from 'react'
import '../../Components/Adduser/Adduser.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Adduser = ({handleAddUser}) => {
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        username: '',
        street: '',
        city: '',
        zipcode: ''
      });


      const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prevUser) => ({
          ...prevUser,
          [name]: value
        }));
      };


        //  Add Form
    //   const handleAddUser = () => {
    //     const newUserObj = {
    //       id: users.length + 1,
    //       name: newUser.name,
    //       email: newUser.email,
    //       username: newUser.username,
    //       address: {
    //         street: newUser.street,
    //         city: newUser.city,
    //         zipcode: newUser.zipcode
    //       }
    //     };
      
    //     setUsers([...users, newUserObj]);
      
        
    //     setNewUser({
    //       name: '',
    //       email: '',
    //       username: '',
    //       street: '',
    //       city: '',
    //       zipcode: ''
    //     });
    //   };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Create the new user object
        const userObj = {
          id: new Date().getTime(), // or use a real ID generator
          name: newUser.name,
          email: newUser.email,
          username: newUser.username,
          address: {
            street: newUser.street,
            city: newUser.city,
            zipcode: newUser.zipcode
          }
        };
    
        
        handleAddUser(userObj);
    
        
        setNewUser({
          name: '',
          email: '',
          username: '',
          street: '',
          city: '',
          zipcode: ''
        });
        navigate("/");
      };

    
      
      
      
  return (
<div className='adduser'>
<Form onSubmit={handleSubmit}  className="form-wrapper"   >
  <h3 className='form-title'>Add New User</h3>
 
  <Form.Group className="mb-2" controlId="formName">
    <Form.Label className="form-label">Name</Form.Label>
    <Form.Control
      type="text"
      name="name"
      placeholder="Enter name"
      value={newUser.name}
      onChange={handleChange}
    />
  </Form.Group>
  
  
  <Form.Group className="mb-3" controlId="formEmail">
    <Form.Label className="form-label">Email</Form.Label>
    <Form.Control
      type="email"
      name="email"
      placeholder="Enter email"
      value={newUser.email}
      onChange={handleChange}
    />
  </Form.Group>
  
   <Row>
    <Col>
  <Form.Group className="mb-3" controlId="formUsername">
    <Form.Label className="form-label">Username</Form.Label>
    <Form.Control
      type="text"
      name="username"
      placeholder="Enter username"
      value={newUser.username}
      onChange={handleChange}
    />
  </Form.Group>
  </Col>
  <Col>
  <Form.Group className="mb-3" controlId="formStreet">
    <Form.Label className="form-label">Street</Form.Label>
    <Form.Control
      type="text"
      name="street"
      placeholder="Street"
      value={newUser.street}
      onChange={handleChange}
    />
  </Form.Group>
  </Col>
  </Row>


  <Row>
    <Col>
  <Form.Group className="mb-3" controlId="formCity">
    <Form.Label className="form-label">City</Form.Label>
    <Form.Control
      type="text"
      name="city"
      placeholder="City"
      value={newUser.city}
      onChange={handleChange}
    />
  </Form.Group>
  </Col>
  
  <Col>
  <Form.Group className="mb-3" controlId="formZip">
    <Form.Label className="form-label">Zipcode</Form.Label>
    <Form.Control
      type="text"
      name="zipcode"
      placeholder="Zipcode"
      value={newUser.zipcode}
      onChange={handleChange}
    />
  </Form.Group>
  </Col>
  </Row>
  <Button variant="primary" type="submit" style={{width:"20%"}} >
    Add User
  </Button>
</Form>     
 </div>
  )
}

export default Adduser



  
