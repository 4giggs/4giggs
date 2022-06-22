import React, {useEffect, useState} from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Navigation from './Navigator';
import { Link } from 'react-router-dom';

export default function CreateForm(props) {
  // create function onSubmit that executes a post request when clicked
  //   that will send the data of each input field to the DB
  // And when that happens we need to update the state of the dashboard to request
  //   and render the latest query and put to the upcoming jobs column
  const [input, setInput] = useState('')
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);


  return (
    <>
      <Link className='m-3' to='/addJobs'>
        Add Jobs
      </Link>
      <Link to='/dashboard'>Dashboard</Link>


  <Container>
  <Row>
    <Col>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicCompany">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="Compaany Name" placeholder="Company Name" /> 
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicJobTitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="jobtitle" placeholder="Job Title" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicStage">
          <Form.Label>Stage</Form.Label>
          <Form.Control type="stage" placeholder="Stage" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicLink">
          <Form.Label>Link</Form.Label>
          <Form.Control type="link" placeholder="Link" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicDateCreated">
          <Form.Label>Date Created</Form.Label>
          <Form.Control type="datecreated" placeholder="Date Created" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicLastModified">
          <Form.Label>Last Modified</Form.Label>
          <Form.Control type="lastmodified" placeholder="Last Modified" />
        </Form.Group> 
        
        <Form.Group className="mb-3" controlId="formBasicJobID">
          <Form.Label>Job ID</Form.Label>
          <Form.Control type="jobid" placeholder="Job ID" />
        </Form.Group> 
    </Form>
  </Col>

  
  <Col>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Notes</Form.Label>
          <Form.Control as="textarea" rows={20} />
        </Form.Group>
          
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  </Col>
  
</Row>
</Container>
  </>
  );
}
