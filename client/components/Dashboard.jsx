import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
// import { Outlet, Link } from 'react-router-dom';
import CreateForm from './Form';
import { Link } from 'react-router-dom';

export default function Dashboard(props) {
  // are we getting jobs from API or adding our own
  // need an input field to create jobs and run a post request to the
  // post request to create jobs in upcoming
  // run a loop that queries the DB and render the job
  // we need to add an extra form component page to send new job and details to server/DB

  return (
    <Container>
      <Link className='m-3' to='/addJobs'>Add Jobs</Link>
      <Link to='/dashboard'>Dashboard</Link>

      <Row>
        <Col>
          <h1 className='d-flex justify-content-center'>Upcoming</h1>
        </Col>
        <Col>
          <h1 className='d-flex justify-content-center'>In Progress</h1>
        </Col>
        <Col>
          <h1 className='d-flex justify-content-center'>Done</h1>
        </Col>
      </Row>
      {/* <Link to='/addjobs/' component={<CreateForm />}>
        Add Job
      </Link> */}
      {/* <Outlet /> */}
    </Container>
  );
}

{
  /* <Accordion>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */
}
