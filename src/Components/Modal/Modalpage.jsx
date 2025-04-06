import React from 'react'
import "../Modal/Modalpage.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { FaStreetView } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { TbZip } from "react-icons/tb";
import { FaUserTie } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { PiBuildings } from "react-icons/pi";




const Modalpage = ({ handleClose, show, setShow, selectedUser }) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/Editname/${selectedUser.id}`);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{selectedUser?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>  
                <Row>
                    <Col>
                    <div className="mb-2"><FaUserTie /> {selectedUser?.username}</div>
                    </Col>
                    
                    <Col>
                    <div className="mb-2"><MdOutlineAttachEmail className='iconed' /> {selectedUser?.email}</div>
                    </Col>

                </Row>

                <Row>
                    <Col>
                    <div className="mb-2"><FaStreetView />: {selectedUser?.address.street}</div>
                    </Col>
                    
                    <Col>
                    <div className="mb-2"><FaCity />: {selectedUser?.address.city}</div>
                    </Col>

                </Row>

                <Row>
                    <Col>
                    <div className="mb-2"><TbZip />: {selectedUser?.address.zipcode}</div>
                    </Col>
                    
                    <Col>
                    <div className="mb-2"> <FaPhoneAlt/>: {selectedUser?.phone}</div>
                    </Col>

                </Row>


                <Row>
                    <Col>
                    <div className="mb-2">< CgWebsite/>:  {selectedUser?.website}</div>
                    </Col>
                    
                    <Col>
                    <div className="mb-2"> < PiBuildings/>: {selectedUser?.company.name}</div>
                    </Col>

                </Row>
               

            </Modal.Body>
            <Modal.Footer className='modal-footer'>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleEdit}>Edit User</Button>
            </Modal.Footer>
        </Modal>
    );
};



export default Modalpage
