import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../../Components/Editpage/Editpage.css"
import { Form, Button, Container, Card } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../ContextProvider';

const Editpage = () => {
  const { users, setUsers} = useContext(UserContext); //  get the users and setUsers from the context
   const {show, setShow} = useContext(UserContext) ;
     const {filteredUsers, setFilteredUsers} =  useContext(UserContext); 


  const { id } = useParams();
  const navigate = useNavigate();
  const user = filteredUsers.find((u) => u.id === parseInt(id));//  find specific user from the users based on their id


  const [formData, setFormData] = useState({
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
    } else if (name === "companyName") {
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


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const updatedUsers = users.map((u) =>
  //     u.id === parseInt(id) ? formData : u
  //   );
  //   setUsers(updatedUsers);
  //   console.log("Updated Users:", updatedUsers);

  //   navigate('/cards');
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const updatedUsers = filteredUsers.map((u) =>
      u.id === parseInt(id) ? { ...u, ...formData } : u
    );
  
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers)
    console.log("Updated Users:", updatedUsers);
    handleCancel(); // Navigate to the cards page after updating
    navigate('/cards');
  };
  



  const handleCancel = () => {
    setShow(false);
   
    navigate("/cards");
  }




  return (
    <div className="Edit-container ">
      <div className="formed-Container" >
        <h2 className='form-title'>Edit User</h2>
        <Form onSubmit={handleSubmit} className='form-wrapp'>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" />
          </Form.Group>


          <Row>
            <Col xs={12} md={6}>
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
            <Col xs={12} md={6}>
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
            <Col xs={12} md={6}>
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
            <Col xs={12} md={6}>
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
          {/* 
          <div className="d-flex justify-content-between edit-btn">
          <Button variant="primary" onClick={handleCancel}  style={{width: "30%"}}>
              Cancel
            </Button>
            <Button className='cancel-btn' type="submit" style={{width: "30%"}} >
              Save Changes
            </Button>
           
          </div> */}

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
          Save Changes
        </Button>
        </div>


        </Form>
      </div>
    </div>
  );
};

export default Editpage;

