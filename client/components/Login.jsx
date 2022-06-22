import React from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Login() {
 
//write a post request that sends the username and the password to the DB
  //if login info matches correctly then we send the user to the dashboard with
    // their job data and stuff to the dashboard rendered
// if create user is  

  let navigate = useNavigate()
  // function handleSubmit(e) {
  //   e.preventDefault();

  // }

  return (
    <div className='d-flex justify-content-center'>
      <Container className='w-25 m-4 d-flex flex-column justify-content-center'>
        <h1>Login</h1>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Username</Form.Label>
            <Form.Control type='email' placeholder='Username' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>

          <Button
          className='mx-3'
            onClick={(e) => navigate('/dashboard')}
            variant='primary'
            type='submit'
          >
            Log In
          </Button>
          <Button
            onClick={(e) => navigate('/dashboard')}
            variant='primary'
            type='submit'
          >
            Create Account
          </Button>
        </Form>
      </Container>
    </div>
  );
}
