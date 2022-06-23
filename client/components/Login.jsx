import React from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Login() {
  //write a post request that sends the username and the password to the DB
  //if login info matches correctly then we send the user to the dashboard with
  // their job data and stuff to the dashboard rendered
  // if create user is

  // {
  //   "email": "teifel7@gmail.com",
  //   "password": "password123"
  // }

  // Post Login returns either
  // Success
  // {
  //   "message": "Success: User Logged In."
  // }
  //
  // Failure
  // {
  //   message: 'Error: User not authenticated'
  // };

  const [input, setInput] = useState({ email: '', password: '' });

  let navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    if (input.email === '' || input.password === '') {
      // Show Error
      console.log('Missing email or password');
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: input.email, password: input.password }),
      credentials: 'include'
    };
    fetch('http://localhost:3000/login', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Success: User Logged In.') {
          // Navigate to Dashboard
          navigate('/dashboard');
        } else {
          console.log('Invalid username password combo');
          return;
        }
      });
  }
  console.log(input);
  return (
    <div className='d-flex justify-content-center'>
      <Container className='w-25 m-4 d-flex flex-column justify-content-center'>
        <h1>Login</h1>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label
              value={input}
              // onChange={(e) => setInput({ email: e.target.value, ...input })}
            >
              Email
            </Form.Label>
            <Form.Control
              type='email'
              placeholder='Email'
              onChange={(e) => {
                console.log(e.target.value);
                setInput({ ...input, email: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label
              value={input}
              // onChange={(e) => setInput({ password: e.target.value, ...input })}
            >
              Password
            </Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </Form.Group>

          <Button
            className='mx-3'
            onClick={handleLogin}
            variant='primary'
            type='submit'
          >
            Log In
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
            }}
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
