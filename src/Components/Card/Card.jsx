import React from 'react'
import "../Card/Card.css"
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Cardd = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUsers(data))
          .catch((error) => console.error("Error fetching users:", error));
      }, []); 

  return (
    <div className='card'>
         <div>
      <h2>users</h2>
      <ul>
        {users.map((user) => (
        //   <li key={user.id}>
        //     {user.name} - {user.email}
        //   </li>

        <Card style={{ width: '18rem' }} className='ama'>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
          <Card.Text>
            <>
           <p>{user.address.street}</p>
           <p>{user.company.city}</p>
           <p>{user.company.zipcode}</p>
           </>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      </Card>
        ))}
      </ul>
    </div>

      
    </div>
  )
}

export default Cardd





 


