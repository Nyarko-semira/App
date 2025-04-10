import React from 'react'
import "./Login.css"
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const Title = "Login"
    const navigate = useNavigate();
    const [person, setPerson] = useState({
        email: "",
        password: "",
        comfirmPassword: "",
    });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setPerson((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // };


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    

   const onLogin = () => {
    navigate("/cards")
    reset(); // Reset the form after submission
   }


    return (

        <div className="container">
            <div className='login-container'>
                <div className='header'>
                    <div className='text'>{Title}</div>
                    <div className='underline'></div>
                </div>

                <Form onSubmit={handleSubmit(onLogin)}>
                    <Row>
                        <Col xs={12} md={12}>
                            <Form.Group className="mb-4" controlId="formBasiccEmail">
                                <Form.Label className='form-label'><span><MdOutlineEmail /> </span> Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email'
                                    {...register('email', { required: true })}
                                    isInvalid={!!errors.email} />

                                {errors.email && (
                                    <Form.Control.Feedback type="invalid">
                                        Email is required
                                    </Form.Control.Feedback>
                                )}
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={12}>
                            <Form.Group className="mb-5" controlId="formBasicPassword">
                                <Form.Label className='form-label'><span><RiLockPasswordLine /></span>  Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password'
                                    {...register('password', { required: true, minLength: {
                                        value: 8,
                                        message: 'Password must be at least 8 characters long',} })}
                                    isInvalid={!!errors.password} />

                                {errors.password && (
                                    <Form.Control.Feedback type="invalid">
                                    {errors.password?.message}
                                  </Form.Control.Feedback>
                                )}

                            </Form.Group>
                        </Col>
                    </Row>
                   

                    <div className="d-flex justify-content-center">
                        <Button variant="primary" type="submit" className="mt-4 login-submit">
                            Login
                        </Button>
                    </div>





                </Form>


            </div>
        </div>
    )
}

export default Login
