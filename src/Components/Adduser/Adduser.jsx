import React from 'react'
import '../../Components/Adduser/Adduser.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';



const Adduser = ({ handleAddUser }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

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






  // const handleSubmitt = (e) => {


  //     e.preventDefault();

  //     // Create the new user object
  //     const userObj = {
  //       id: new Date().getTime(), 
  //       name: newUser.name,
  //       email: newUser.email,
  //       username: newUser.username,
  //       address: {
  //         street: newUser.street,
  //         city: newUser.city,
  //         zipcode: newUser.zipcode
  //       },
  //       website: newUser.website,
  //       phone: newUser.phone,
  //      company: {
  //       name: newUser.name
  //      }

  //     };


  //     handleAddUser(userObj);


  //     setNewUser({
  //       name: '',
  //       email: '',
  //       username: '',
  //       street: '',
  //       city: '',
  //       zipcode: '',
  //       website: '',
  //       phone: '',
  //       company: '',
  //     });
  //     navigate("/");
  //   };


  const onSubmit = (data) => {
    const userObj = {
      id: new Date().getTime(),
      name: data.name,
      email: data.email,
      username: data.username,
      address: {
        street: data.street,
        city: data.city,
        zipcode: data.zipcode
      },
      website: data.website,
      phone: data.phone,
      company: {
        name: data.company
      }
    };

    handleAddUser(userObj);
    reset(); // reset form after submit
    navigate('/');
  };

  const handleCancel = () => {
    navigate("/");
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
            {...register('name', { required: true })}
            // value={newUser.name}
            // onChange={handleChange}
            isInvalid={!!errors.name}
          />
          {errors.name && (
            <Form.Control.Feedback type="invalid">
              Name is required
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email format'
                  }
                })}
                isInvalid={!!errors.email}
              />
              {errors.email && (
                <Form.Control.Feedback type="invalid">
                  Email is required
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="form-label">Company Name</Form.Label>
              <Form.Control
                type="text"
                name="company"
                placeholder="Enter Company's name"
                {...register('company', { required: true })}
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
          <Col>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label className="form-label">Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter username"
                {...register('username', { required: true })}
                isInvalid={!!errors.username}
              />
              {errors.username && (
                <Form.Control.Feedback type="invalid">
                  Username is required
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formStreet">
              <Form.Label className="form-label">Street</Form.Label>
              <Form.Control
                type="text"
                name="street"
                onChange={handleChange}
                {...register('street', { required: true })}
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
          <Col>
            <Form.Group className="mb-3" controlId="formCity">
              <Form.Label className="form-label">City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                placeholder="City"
                {...register('city', { required: true })}
                isInvalid={!!errors.city}
              />
              {errors.city && (
                <Form.Control.Feedback type="invalid">
                  city name is reqired
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formZip">
              <Form.Label className="form-label">Zipcode</Form.Label>
              <Form.Control
                type="text"
                name="zipcode"
                placeholder="Zipcode"
                {...register('zipcode', { required: true })}
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
          <Col>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label className="form-label">Phone</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                placeholder="Enter Phone number"
                {...register('phone', {
                  required: true,
                  minLength: {
                    value: 10,
                    message: 'Phone number must be at least 10 digits'
                  }
                })}
                isInvalid={!!errors.phone}
              />
              {errors.phone && (
                <Form.Control.Feedback type="invalid">
                  phone is required
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formStreet">
              <Form.Label className="form-label">Website</Form.Label>
              <Form.Control
                type="text"
                name="website"
                placeholder="website"
                {...register('website', { required: true })}
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
        {/* <Button variant="primary" type="submit" style={{width:"20%"}} >
    Add User
  </Button> */}
        <div className="d-flex justify-content-between align-items-center" >
          <Button type="submit" style={{ width: "30%" }} onClick={handleCancel}  >
            Cancel
          </Button>
          <Button className='cancel-btn' type="submit" style={{ width: "30%" }} >
            Add user
          </Button>

        </div>
      </Form>
    </div>
  )
}

export default Adduser




