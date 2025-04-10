import React from 'react'
import '../../Components/Adduser/Adduser.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const defaultValues = {
  id: new Date().getTime(),
  name: "",
  email: "",
  username: "",
  address: {
    street: "",
    city: "",
    zipcode: ""
  },
  website: "",
  phone: "",
  company: {
    name: ""
  }
};

const Adduser = () => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues,
    
  });

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    username: '',
    street: '',
    city: '',
    zipcode: '',
    website: '',
    phone: '',
    company: '',
  });


    

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setFilteredUsers((prevUsers) => [...prevUsers, newUser]);
  };



  const onSubmit = (data) => {

    console.log({data});
    reset(); 
    navigate('/cards');
  };

  const handleCancel = () => {
    navigate("/cards");
  }



  return (
    <div className='adduser'>
      <Form onSubmit={handleSubmit(onSubmit)} className="form-wrapper"   >
        <h3 className='form-title'>Add New User</h3>

        <Form.Group className="mb-2" controlId="formName">
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="name"
            {...register('name')}
            isInvalid={!!errors.name}
          />
          {errors.name && (
            <Form.Control.Feedback type="invalid">
              Name is required
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group className="mb-2" controlId="formEmail">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                {...register('email')}
                isInvalid={!!errors.email}
              />
              {errors.email && (
                <Form.Control.Feedback type="invalid">
                  Email is required
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-2" controlId="formEmail">
              <Form.Label className="form-label">Company Name</Form.Label>
              <Form.Control
                type="text"
                name="company.name"
                placeholder="Enter Company's name"
                {...register('company.name')}
                isInvalid={!!errors.company}
              />
              {errors.company && (
                <Form.Control.Feedback type="invalid">
                  Compant name is required
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group className="mb-2" controlId="formUsername">
              <Form.Label className="form-label">Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter username"
                {...register('username')}
                isInvalid={!!errors.username}
              />
              {errors.username && (
                <Form.Control.Feedback type="invalid">
                  Username is required
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-2" controlId="formStreet">
              <Form.Label className="form-label">Street</Form.Label>
              <Form.Control
                type="text"
                name="address.street"
                onChange={handleChange}
                {...register('address.street')}
                isInvalid={!!errors.street}
              />
              {errors.street && (
                <Form.Control.Feedback type="invalid">
                  street name is required
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </Col>
        </Row>


        <Row>
          <Col xs={12} md={6}>
            <Form.Group className="mb-2" controlId="formCity">
              <Form.Label className="form-label">City</Form.Label>
              <Form.Control
                type="text"
                name="address.city"
                placeholder="City"
                {...register('address.city')}
                isInvalid={!!errors.city}
              />
              {errors.city && (
                <Form.Control.Feedback type="invalid">
                  city name is reqired
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group className="mb-2" controlId="formZip">
              <Form.Label className="form-label">Zipcode</Form.Label>
              <Form.Control
                type="text"
                name="address.zipcode"
                placeholder="Zipcode"
                {...register('address.zipcode')}
                isInvalid={!!errors.zipcode}
              />
              {errors.zipcode && (
                <Form.Control.Feedback type="invalid">
                  Zipcode is required
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <Form.Group className="mb-2" controlId="formUsername">
              <Form.Label className="form-label">Phone</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                placeholder="Enter Phone number"
                {...register('phone')}
                isInvalid={!!errors.phone}
              />
              {errors.phone && (
                <Form.Control.Feedback type="invalid">
                  phone is required, 10 digits at least
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-2" controlId="formStreet">
              <Form.Label className="form-label">Website</Form.Label>
              <Form.Control
                type="text"
                name="website"
                placeholder="website"
                {...register('website')}
                isInvalid={!!errors.website}
              />
              {errors.website && (
                <Form.Control.Feedback type="invalid">
                  website name is required
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </Col>
        </Row>
<div className="d-flex flex-column flex-md-row align-items-center  gap-3 w-100">
  <Button 
    type="button" 
    style={{ width: "100%" }} 
    onClick={handleCancel}
  >
    Cancel
  </Button>

  <Button 
    className="cancel-btn w-70 w-md-30 w-xs-20"  // Adds margin-top for small screens and margin-left for larger screens
    type="submit" 
    style={{ width: "100%" }}
  >
    Add User
  </Button>
</div>



      </Form>
    </div>
  )
}

export default Adduser




