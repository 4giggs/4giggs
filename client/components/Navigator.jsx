import React from 'react';
import { Nav } from 'react-bootstrap';

export default function Navigation(props) {
    return (
        <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
      </Nav>
    )
}