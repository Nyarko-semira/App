import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../../Components/Editpage/Editpage.css"
import { Form, Button, Container, Card } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const EditUser = ({ users, setUsers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((u) => u.id === parseInt(id));//  find specific user from the users based on their id


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    address: {
      street: '',
      city: '',
      zipcode: '',
    },
    company:{
      name: '', 
    },
    phone: '',
    website: '',
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (['street', 'city', 'zipcode'].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    }else if (name === "companyName") {
      setFormData((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          name: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUsers = users.map((u) =>
      u.id === parseInt(id) ? formData : u
    );
    setUsers(updatedUsers);
    console.log("Updated Users:", updatedUsers);

    navigate('/');
  };






  const handleCancel = () => {
  navigate("/");
  }

  return (
    <div className="Edit-container ">
       <div className="formed-Container" >
        <h2 className='form-title'>Edit User</h2>
        <Form onSubmit={handleSubmit}>
         
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" />
          </Form.Group>
         
          

          <Row>
          <Col>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
          </Form.Group>
          </Col>
          <Col>
          
          <Form.Group className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control name="companyName" value={formData.company.name} onChange={handleChange} placeholder="Company Name" />
          </Form.Group>
          </Col>
          </Row>
         
           <Row>
            <Col>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control name="username" value={formData.username} onChange={handleChange} placeholder="Enter username" />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3">
            <Form.Label>Street</Form.Label>
            <Form.Control name="street" value={formData.address.street} onChange={handleChange} placeholder="Street address" />
          </Form.Group>
           </Col>
          </Row>

          <Row>
          <Col>
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control name="city" value={formData.address.city} onChange={handleChange} placeholder="City" />
          </Form.Group>
          </Col>
          <Col>
          
          <Form.Group className="mb-3">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control name="zipcode" value={formData.address.zipcode} onChange={handleChange} placeholder="Zip code" />
          </Form.Group>
          </Col>
          </Row>


          <Row>
          <Col>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control name="phone" value={formData.phone} onChange={handleChange} placeholder="City" />
          </Form.Group>
          </Col>
          <Col>
          
          <Form.Group className="mb-3">
            <Form.Label>Website</Form.Label>
            <Form.Control name="website" value={formData.website} onChange={handleChange} placeholder="Zip code" />
          </Form.Group>
          </Col>
          </Row>

          <div className="d-flex justify-content-between">
            <Button className='cancel-btn' type="submit" style={{width: "30%"}} >
              Save Changes
            </Button>
            <Button variant="primary" onClick={handleCancel}  style={{width: "30%"}}>
              Cancel
            </Button>
          </div>
        </Form>
        </div>
    </div>
  );
};

export default EditUser;

